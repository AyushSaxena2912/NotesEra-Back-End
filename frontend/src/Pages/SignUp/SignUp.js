import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    } 

    try {
      // Perform signup logic using Axios or your preferred method
      await axios.post('https://notesera-backend.onrender.com/auth/signup', {
        username: username, 
        email: email,       
        password: password 
      });
      // Handle successful signup (redirect, show success message, etc.)
      navigate('/login9874Notes');
    } catch (error) {
      setError('Signup failed. Please try again.');
      console.log(error);
    }
  };

  return (
    <div className="container1">
      <div className="form-container1">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="form-field1">
            <input type="text" placeholder="Full Name" value={username} onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div className="form-field1">
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-field1">
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-field1">
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          {error && <p style={{ color: 'crimson' }}>{error}</p>}
          <div className="form-field1">
            <button className='signup-submit' type="submit">Sign Up</button>
          </div>
        </form>
        <p className="form-link1">Already have an account? <a href="/login9874Notes">Login</a></p>
      </div>
    </div>
  );
};

export default SignUp;
