import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="p-3 flex flex-col gap-4 border-gray-600 border rounded-lg bg-white">
      <div className="w-60 h-70 rounded-lg overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={user.image}
          alt="Image Here"
        />
      </div>

      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>

      <button className="bg-red-500 text-white">
        Delete
      </button>
    </div>
  );
};

export default UserCard;