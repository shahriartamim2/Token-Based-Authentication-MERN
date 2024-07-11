import { useState } from "react";
// import axios from "axios";
// import {useNavigate} from "react-router-dom";

const Register = () => {
  // const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleClick = ()=>{
    // axios.post("http://localhost:4000/register",{username,password})
    // .then(()=>{alert("User is register");
    //   navigate("/login");
    // })
    // .catch((err)=>{
    //   console.log(err);
    //   navigate("/register")
    // })
    console.log({username,password})
  }
    
  return (
    <div>
      <h1>Registration Page</h1>
      <form action="">
        <label htmlFor="username">Enter username</label>
        <input
          type="text"
          className="username"
          id="username"
          value={username}
          placeholder="Enter username"
          onChange={(e)=>setUsername(e.target.value)}
        />
        <label htmlFor="password">Enter password</label>
        <input
          type="password"
          className="password"
          id="password"
          value={password}
          placeholder="Enter password"
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default Register
