import React, {useState} from "react";

const Web = () => {

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex flex-col gap-4 bg-black text-white justify-center items-center h-screen">
      <input name="name" onChange={handleChange} className="border-2 p-2 rounded-lg" type="text" placeholder="Name" />
      <input name="email" onChange={handleChange} className="border-2 p-2 rounded-lg" type="email" placeholder="Email" />
      <input name="password" onChange={handleChange} className="border-2 p-2 rounded-lg" type="password" placeholder="Password" />
      
      <h2>Name: {formData.name}</h2>
      <h2>Email: {formData.email}</h2>
      <h2>PassWord: {formData.password}</h2>
    </div>
  );
};

export default Web;
