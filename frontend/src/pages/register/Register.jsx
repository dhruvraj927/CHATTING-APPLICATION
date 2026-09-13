
import { useState } from "react";
import { useNavigate } from "react-router-dom";
 import "./register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/chatapp/login/create", {
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
        alert("User created successfully");

        // Go back to login page
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }

  return (
    <div className="new-user-container">
      <div className="new-user-box">

        <h2>Create New User</h2>

        <form onSubmit={handleRegister}>

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
            Create User
          </button>

        </form>

        <p>Already have an account?</p>

        <button
          className="back-login"
          onClick={() => navigate("/")}
        >
          Back to Login
        </button>

      </div>
    </div>
  );
}

export default Register;

