import React from 'react';

const SignInPage = () => {
  return (
    <div className="form-container">
      <h3>Sign In</h3>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" required />
        </div>
        <div>
          <label>First Name:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Email ID:</label>
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

export default SignInPage;
