import React, { useState } from 'react';

const Test = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setIsValidEmail(false);
      return;
    }

    // Email is valid, perform form submission logic here
    console.log('Email is valid:', email);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
      />
      {!isValidEmail && (
        <p className="text-red-500">Please enter a valid email address.</p>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Test;
