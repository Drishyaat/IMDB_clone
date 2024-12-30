import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate(); // For navigation to the signup page
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    // Basic validation (you can extend this)
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    // Assuming you have an API to authenticate
    // For example, make a POST request to your API
    // fetch('/api/signin', { method: 'POST', body: { email, password } })
    // .then(response => {
    //    if (response.ok) {
    //        navigate("/dashboard"); // On success, navigate to the dashboard
    //    } else {
    //        setError("Invalid credentials.");
    //    }
    // })

    // Simulating successful sign in for now
    if (email === "test@example.com" && password === "password") {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
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
        {error && <p className="error">{error}</p>}
        <button type="submit">Sign In</button>
      </form>

      <div className="signup-option">
        <p>
          Don't have an account?{" "}
          <span
            className="signup-link"
            onClick={() => navigate("/signup")} // Navigate to sign up page
          >
            Create one here
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
