import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:4000/profile",{
        headers:{
          Authorization:token
        }
      })
      .then((res) => console.log(res))
      .catch(()=>navigate("/login"));
  }, [])
  
  return (
    <div>
      profile
    </div>
  )
}

export default Profile
