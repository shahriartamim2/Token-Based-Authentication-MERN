import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    axios
      .post("http://localhost:4000/register", { username, password })
      .then(() => {
        alert("User is registered");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        alert("Registration failed");
        navigate("/register");
      });
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter username</label>
        <input
          type="text"
          className="username"
          id="username"
          value={username}
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Enter password</label>
        <input
          type="password"
          className="password"
          id="password"
          value={password}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
