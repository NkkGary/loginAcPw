import React from "react";
import profileImage from "../assets/test_icon.jpg";
import links from "../data/links.json"; // ⬅️ JSON import
import "./Home.css";

function Home() {
  return (
    <div className="linktree-container">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <h2 className="username">@nkkgary</h2>

      <div className="links">
        {links.map((link, index) => (
          <a
            key={index}
            className="link-button"
            href={link.url}
            target={link.url.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Home;
