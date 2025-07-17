'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; 

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminEmail = 'admin@example.com';
    const adminPassword = 'admin123';

    if (email === adminEmail && password === adminPassword) {
      router.push('/create'); 
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <>
      <div>
        <h1>Admin Login Page</h1>
      </div>
      <div className="Login-form">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="fname">First name:</label><br />
          <input type="text" id="fname" name="fname" /><br />

          <label htmlFor="lname">Last name:</label><br />
          <input type="text" id="lname" name="lname" /><br />

          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          /><br />

          <label htmlFor="password">Password:</label><br />
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          /><br />

          <label htmlFor="confirm">Confirm Password:</label><br />
          <input type="password" id="confirm" name="confirm" /><br /><br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
