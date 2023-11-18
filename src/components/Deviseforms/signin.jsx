import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UI from '../../images/UI-Masuma.png';
import { loginSuccess, loginFailure } from '../../redux/slices/authSlice';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        setError('Email and password are required');
        return;
      }

      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email,
            password,
          },
        }),
      });

      if (response.ok) {
        const user = await response.json();
        dispatch(loginSuccess({ user }));
        console.log('Login!');
        navigate('/Homepage');
      } else {
        dispatch(loginFailure());
        setError('Login failed');
      }
    } catch (error) {
      dispatch(loginFailure());
      setError('An error occurred');
    }
  };

  return (
    <div
      className="bg-gray-100 min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('${UI}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full bg-opacity-90">
        <form className="space-y-4" onSubmit={handleLogin}>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Password"
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
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
