import React, { useState } from 'react';
import './Login.css';
import logo from '../assets/BC_Logo.png'; 

function Login() {
  // Initialize state for username and password
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username:', username);  // Log username value
    console.log('Password:', password);  // Log password value
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Login Logo" className="login-image" />
      <h2>BC Biology Lab Database</h2>
      <p>For authorized staff ONLY</p>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            value={username}  // Bind input field to username state
            onChange={(e) => setUsername(e.target.value)}  // Update state on input change
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}  // Bind input field to password state
            onChange={(e) => setPassword(e.target.value)}  // Update state on input change
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
