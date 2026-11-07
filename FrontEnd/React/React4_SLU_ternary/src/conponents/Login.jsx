import React from "react";

const Login = ({ setIsLogin }) => {
  return (
    <div className="bg-white w-96 p-3 rounded-2xl shadow-lg">
      <h1 className="ml-2">Login</h1>
      <form
        
        className="flex flex-col gap-3 p-2"
        action=""
      >
        <input
          required
          className="border-2 p-2 rounded-lg"
          type="email"
          placeholder="Enter your Email"
        />
        <input
          required
          className="border-2 p-2 rounded-lg"
          type="password"
          placeholder="Enter your Password"
        />
        <button className="bg-blue-500 text-white p-2 rounded-lg cursor-pointer">
          Login
        </button>
      </form>
      <p className="ml-3">
        Didn't register yet?{" "}
        <span
          onClick={() => setIsLogin(false)}
          className="text-blue-400 cursor-pointer"
        >
          Register Here
        </span>
      </p>
    </div>
  );
};

export default Login;
