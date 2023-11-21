// components/PostCarData.js
const postCarData = async (formData) => {
  try {
    const response = await fetch('http://127.0.0.1:4000/api/v1/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    return response;
  } catch (error) {
    console.error('Error: not postedddddd', error);
    throw error;
  }
};

export default postCarData;
