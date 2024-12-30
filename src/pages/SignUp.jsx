import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate(); // For navigation after successful sign up
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Assuming you have an API to handle user registration
    // For example, make a POST request to your API
    // fetch('/api/signup', { method: 'POST', body: { email, password } })
    // .then(response => {
    //    if (response.ok) {
    //        navigate("/signin"); // After successful signup, navigate to sign-in page
    //    } else {
    //        setError("Something went wrong. Please try again.");
    //    }
    // })

    // Simulating successful signup for now
    navigate("/signin");
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Sign Up</button>
      </form>

      <div className="signin-option">
        <p>
          Already have an account?{" "}
          <span
            className="signin-link"
            onClick={() => navigate("/signin")} // Navigate back to sign-in page
          >
            Sign in here
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
