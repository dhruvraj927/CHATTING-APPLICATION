import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/chatapp/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        alert("Login successful");
      } else {
        alert("Login failed , Now user found !!!!");
      }
    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">

        <h2>Login</h2>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p>Don't have an account?</p>

        <button
          className="create-account"
          onClick={() => navigate("/new-user")}
        >
          Create New User
        </button>

      </div>
    </div>
    
  );
}

export default Login;

