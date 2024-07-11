import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:4000/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then(() => navigate("/profile"))
      .catch(() => navigate("/login"));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    axios
      .post("http://localhost:4000/login", { username, password })
      .then((user) => {
        localStorage.setItem("token",user.data.token)
        console.log("Login in successful");
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
        alert("Log in failed");
        navigate("/login");
      });
  };

  return (
    <div>
      <h1>Login Page</h1>
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

export default Login;
