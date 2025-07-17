"use client"; 

import { useRouter } from "next/navigation";
import { useState } from "react";

const Userlogin = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (formData.email && formData.password && formData.password === formData.confirmPassword) {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/blog");
    } else {
      alert("Please enter all fields correctly.");
    }
  };

  return (
    <>
      <div>
        <h1>User Login Page</h1>
      </div>
      <div className="Userlogin-form">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="fname">First name:</label><br />
          <input type="text" id="fname" name="fname" onChange={handleChange} /><br />

          <label htmlFor="lname">Last name:</label><br />
          <input type="text" id="lname" name="lname" onChange={handleChange} /><br />

          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" onChange={handleChange} /><br />

          <label htmlFor="password">Password:</label><br />
          <input type="password" id="password" name="password" onChange={handleChange} /><br />

          <label htmlFor="confirmPassword">Confirm Password:</label><br />
          <input type="password" id="confirmPassword" name="confirmPassword" onChange={handleChange} /><br /><br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Userlogin;
