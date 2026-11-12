import React from "react";

const Usercard = ({ ind, deleteUser, user }) => {
  return (
    <div className="p-4 border border-black rounded-lg flex flex-col gap-2 bg-white">
      <div className="h-40 w-40">
        <img
          className="h-full w-full object-fit"
          src={user.image}
          alt="Image"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1>{user.name}</h1>
        <p className="text-sm">{user.email}</p>
        <p className="text-sm">{user.contact}</p>
      </div>
      <div className="flex w-full gap-4 justify-between">
        <button className="p-2 rounded bg-amber-600 cursor-pointer hover:bg-amber-300 text-white">
          Update
        </button>
        <button
          onClick={() => deleteUser(ind)}
          className="p-2 rounded bg-red-600 cursor-pointer hover:bg-red-400 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Usercard;
