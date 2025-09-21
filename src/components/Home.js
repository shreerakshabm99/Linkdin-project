import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ProfileForm from "./ProfileForm";

export default function Home() {
  const [activeMenu, setActiveMenu] = useState("home");

  return (
    <div className="App">
      <div className="AppGlass">
        {/* Sidebar */}
        <Sidebar onMenuClick={setActiveMenu} />

        {/* Content Area */}
        <div className="content">
          {activeMenu === "home" && <h1>🏠 Home Page</h1>}
          {activeMenu === "profile" && <ProfileForm />}
          {activeMenu === "Hi" && <h2>Hi</h2>}
        </div>
      </div>
    </div>
  );
}
