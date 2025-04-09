import React, { useState } from "react";
import api from "../api"; // Use the configured axios instance
import "./Auth.css";

function Auth() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    userID: "",
    password: "",
  });
  const [message, setMessage] = useState(""); // State to store success/error messages

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", {
        userID: formData.userID,
        password: formData.password,
      });
      setMessage("Login successful");
      localStorage.setItem("token", res.data.token); // Save token
    } catch (error) {
      let errMsg = "";
      if (error.response) {
        errMsg = error.response.data.message || "Login failed";
      } else if (error.request) {
        errMsg = "No response from the server. Please check your network connection.";
      } else {
        errMsg = `An error occurred: ${error.message}`;
      }
      setMessage(errMsg);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/register", {
        name: formData.name,
        userID: formData.userID,
        password: formData.password,
      });
      setMessage(res.data.message); // Show success message
    } catch (error) {
      let errMsg = "";
      if (error.response) {
        errMsg = `Error: ${error.response.data.message}`;
      } else if (error.request) {
        errMsg = "No response from the server. Please check your network connection.";
      } else {
        errMsg = `An error occurred: ${error.message}`;
      }
      setMessage(errMsg);
    }
  };

  return (
    <div className="auth-container">
      <h2>{isRegistering ? "Register" : "Login"} Page</h2>
      {message && <p className="message">{message}</p>} {/* Display success/error messages */}
      {isRegistering ? (
        <form onSubmit={handleRegisterSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="userID">User ID</label>
            <input
              type="text"
              id="userID"
              name="userID"
              value={formData.userID}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="auth-button">
            Register
          </button>
        </form>
      ) : (
        <form onSubmit={handleLoginSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="userID">User ID</label>
            <input
              type="text"
              id="userID"
              name="userID"
              value={formData.userID}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
      )}
      <p onClick={() => setIsRegistering(!isRegistering)} className="toggle-link">
        {isRegistering ? "Already have an account? Login" : "Don't have an account? Register"}
      </p>
    </div>
  );
}

export default Auth;
