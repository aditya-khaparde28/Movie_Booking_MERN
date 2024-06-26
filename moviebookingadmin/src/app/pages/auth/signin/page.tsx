
"use client";
import React, { useState } from 'react';
//import './auth.css';
import { ToastContainer, toast, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SigninPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSignup = async () => {
        try {
          const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/admin/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
            credentials: 'include'
          });
    
          if (response.ok) {
            const data = await response.json();
            // Handle successful signup, e.g., show a success message
            console.log('Admin login successful', data);
    
            toast.success('Admin login Successful', {
              position: "top-center",
            });
            window.location.href='/pages/movie/createmovie';
          } else {
            // Handle signup error
            console.error('Admin login failed', response.statusText);
            toast.error('Admin login Failed', {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        }
        catch (error) {
          toast.error('An error occurred during registration');
          console.error('An error occurred during registration', error);
        }
      }
    
    return (
        <div className='formpage'>
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign up</button>
    </div>
    
  )
}

export default SigninPage