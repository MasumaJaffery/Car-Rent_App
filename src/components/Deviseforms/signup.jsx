import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UI from '../../images/UI-Masuma.png';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password.trim() === '') {
        setError("Password can't be blank");
        return;
      }

      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      const dataToSend = {
        user: {
          name,
          email,
          password,
        },
      };

      const response = await axios.post('http://127.0.0.1:4000/api/v1/users', dataToSend, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response:', response.data);
      navigate('/Homepage');

      // Reset form fields
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError('');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message[0]) {
        setError(error.response.data.message[0]);
      } else {
        setError('An error occurred');
      }
    }
  };

  return (
    <div
      className="bg-gray-100 min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('${UI}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full bg-opacity-90">
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-500 text-left">
              Name
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Name"
              />
            </label>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-500 text-left">
              Email
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Email"
              />
            </label>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-500 text-left">
              Password
              <input
                type="password"
                id="password"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            {error && (
              <div className="text-red-500">{error}</div>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-500 text-left">
              Confirm Password
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Confirm Password"
              />
            </label>
            {error && (
              <div className="text-red-500">{error}</div>
            )}
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full p-2 text-center text-white rounded-md bg-lime-400"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
