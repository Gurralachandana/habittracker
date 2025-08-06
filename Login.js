import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const usersDB = [
    { username: "chandana", password: "pass1" },
    { username: "keerthana", password: "pass2" },
    { username: "Bhavana", password: "pass3" },
    { username: "kavya", password: "pass4" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = usersDB.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      localStorage.setItem("habitTrackerUser", username);
      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ display: "block", marginBottom: 10 }}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ display: "block", marginBottom: 10 }}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
