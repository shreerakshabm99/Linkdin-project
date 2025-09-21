import React from "react";
// import profilePic from "public/image.png";

export default function Sidebar({ onMenuClick }) {
  return (
    <div className="sidebar">
      {/* Profile Circle */}
      <div className="profile" onClick={() => onMenuClick("profile")}>
        <img src="https://tse2.mm.bing.net/th/id/OIP.8S8nd0rgWBcDRTr1MfPoOQHaHa?pid=Api&P=0&h=180" alt="profile" />
      </div>

      {/* Menu */}
      <ul>
        <li onClick={() => onMenuClick("home")}>Home</li>
        {/* <li onClick={() => onMenuClick("profile")}>Profile</li> */}
        <li onClick={() => onMenuClick("Hi")}>Hi</li>
      </ul>
    </div>
  );
}
