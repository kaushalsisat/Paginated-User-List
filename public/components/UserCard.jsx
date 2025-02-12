import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="flex justify-center">
      <div className="card p-6 rounded-lg shadow-lg bg-white w-80 text-center">
        <img
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-24 h-24 rounded-full mx-auto mb-4 border border-gray-400 bg-red-200"
        />
        <h2 className="text-xl font-semibold">{user.firstName} {user.lastName}</h2>
        <p className="text-gray-600">✉️ {user.email}</p>
        <p className="text-gray-600">📞 {user.phone}</p>
      </div>
    </div>
  );
};

export default UserCard;

