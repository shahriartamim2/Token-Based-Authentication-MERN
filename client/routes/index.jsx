import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../components/Homepage";
import Login from "../components/Login";
import Register from "../components/Register";
import Error from "../components/Error";
import Profile from "../components/Profile";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Index;
