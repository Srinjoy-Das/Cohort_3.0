import React, {useState} from "react";

const Register = ({ setIsLogin, setUsers }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setUsers((prev) => [ ...prev, formData]);
    setFormData({
      name: "",
      image: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="bg-white w-96 p-3 rounded-2xl shadow-lg">
      <h1 className="ml-2">Register</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 p-2"
      >
        <input
          onChange={handleChange}
          required
          name="name"
          value={formData.name}
          className="border-2 p-2 rounded-lg"
          type="text"
          placeholder="Enter your Name"
        />
        <input
          onChange={handleChange}
          required
          name="image"
          value={formData.image}
          className="border-2 p-2 rounded-lg"
          type="url"
          placeholder="Enter Image link"
        />
        <input
          onChange={handleChange}
          required
          name="email"
          value={formData.email}
          className="border-2 p-2 rounded-lg"
          type="email"
          placeholder="Enter your Email"
        />
        <input
          onChange={handleChange}
          required
          name="password"
          value={formData.password}
          className="border-2 p-2 rounded-lg"
          type="password"
          placeholder="Enter your Password"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg cursor-pointer">
          Register
        </button>
      </form>
      <p className="ml-3">
        Have an account?{" "}
        <span
          onClick={() => setIsLogin(true)}
          className="text-blue-400 cursor-pointer"
        >
          Login Here
        </span>
      </p>
    </div>
  );
};

export default Register;
