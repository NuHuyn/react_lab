import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Login form data:", formData);
    // xử lý tiếp...
  }

  return (
   <form onSubmit={handleSubmit}>
  <div style={{ marginBottom: "12px" }}>
    <label style={{ display: "block", marginBottom: "6px" }}>Username</label>
    <input
      type="text"
      name="username"
      value={formData.username}
      onChange={handleChange}
      style={{ padding: "6px", width: "200px" }}
    />
  </div>

  <div style={{ marginBottom: "12px" }}>
    <label style={{ display: "block", marginBottom: "6px" }}>Password</label>
    <input
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      style={{ padding: "6px", width: "200px" }}
    />
  </div>

  <button type="submit">Login</button>
  <p>Current username: {formData.username}</p>
</form>
  );
}
