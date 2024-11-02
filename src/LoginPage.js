import React from 'react';

const LoginPage = () => {
  return (
    <div className="form-container">
      <h3>Login</h3>
      <form>
        <div>
          <label>Registered Email ID:</label>
          <input type="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
