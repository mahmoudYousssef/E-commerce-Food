import axios from 'axios';
import React, { useState } from 'react';

function InputForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message
    
    try {
      const endPoint = isSignUp ? 'register' : 'signin';
      
      const response = await axios.post(
        `http://localhost:5000/user/${endPoint}`,
        { email, password }
      );

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      setSuccess(response.data.message);
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <>
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          name='email'
          className="form-control mt-3"
          type="email"
          placeholder="Email"
          value={email}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          name='password'
          className="form-control mt-3"
          type="password"
          placeholder="Password"
          value={password}
        />
        <div className="text-center">
          <button className="button mt-5 w-100" type="submit">
            {isSignUp ? "Sign Up" : "LogIn"}
          </button>
        </div>
        <h5 className='success'>{(success !== "") && success}</h5>
        <h5 className='error'>{(error !== "") && error}</h5>
        <p onClick={() => setIsSignUp(!isSignUp)} className='mt-5'>
          {isSignUp ? "Already have an account?" : "Don't have an account"} Sign {isSignUp ? "In" : "Up"}
        </p>
      </form>
    </>
  );
}

export default InputForm;