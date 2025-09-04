import React from 'react'
import "./Navbar.css"
import { assets } from './../../assets/assets';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = 'https://food-del-frontend-givz.onrender.com';
  };
  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo} alt="" />
        <div className="profile-img">
          <img className='profile' src={assets.profile_image} alt="" />
        <img onClick={logout} className='profile logout' src={assets.logout_icon} alt="" />
        </div>
    </div>
  )
}

export default Navbar
