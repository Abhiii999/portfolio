import React from "react";
import { useNavigate } from "react-router-dom";
import passPic from "../icons/profilePic.png";  // Replace with your image path

import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="home-page">
     
        <img
          src={passPic}
          alt="Abhishek Konathala"
          className="profile-pic"
        />
        <div className="nav-buttons">
          <button onClick={() => handleNavigate("/about")}>About</button>
        </div>
     
    </div>
  );
}

export default Home;
