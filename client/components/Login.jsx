import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {};

  return (
    <div>
      <h1>Login Page</h1>
      <form action="">
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
          required
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}
export default Login;
