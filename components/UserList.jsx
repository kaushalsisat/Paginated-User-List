import React, { useEffect, useState } from "react";
 
import Pagination from "./Pagination";
import UserCard from "./userCard";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;

//Data Fetching from Api using Use Effect
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const totalPages = Math.ceil(users.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-0">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-600 font-serif">Paginated User List</h1>
      <div className="space-y-4 bg-gray-300 pt-5 pb-5">
        {currentUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      {/* They are show who is current page who is previous page */}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default UserList;