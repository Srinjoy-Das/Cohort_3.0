import React, { useState } from "react";
import Login from "./conponents/Login";
import Register from "./conponents/Register";
import UsersCard from "./conponents/UserCard";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState([]);

  return (
    <div className="h-screen bg-gray-200 flex justify-center items-center ">
      {isLogin ? (
        users.map((elem) => <UsersCard key={elem.email} user={elem} />)
      ) : (
        <Register setIsLogin={setIsLogin} setUsers={setUsers} />
      )}
    </div>
  );
};

export default App;
