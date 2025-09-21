import React, { useState } from "react";

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    headline: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-form">
      <h2>Edit Profile</h2>
      <form>
        <label>Name</label>
        <br></br>
        <input name="name" value={formData.name} onChange={handleChange} />

        {/* <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Headline</label>
        <input
          name="headline"
          value={formData.headline}
          onChange={handleChange}
          placeholder="Eg: Student | Developer | Engineer"
        /> */}
        <br></br>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
