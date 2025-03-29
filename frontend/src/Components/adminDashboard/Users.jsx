import React from "react";

// const Users = ({ users }) => {
//   console.log(users);

//   return (
//     <div className="bg-gray-600   p-4 rounded-2xl shadow-md border shadow-white">
//       <h2 className="text-3xl font-bold text-white mb-3">Users</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id} className=" bg-gray-800 border text-white p-2 mb-2 rounded-lg shadow">
//             <p>
//               <span className="text-lg font-semibold">ID= </span>
//               {user._id}
//             </p>
//             <p>
//               <span className="text-lg font-semibold">User Name =</span>
//               {user.username}
//             </p>
//             <p>
//               <span className="text-lg font-semibold">User Email =</span>
//               {user.email}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
const Users = ({ users }) => {
    return (
        <div className="bg-[#485566] p-4 rounded-2xl shadow-md w-full mt-6">
          <h2 className="text-xl text-white font-bold  mb-3">User Details</h2>
          <div className="overflow-x-auto rounded-2xl ">
            <table className="min-w-full bg-gray-400 rounded-lg shadow-md">
              <thead >
                <tr className="bg-gray-200 text-gray-700">
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Description</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b">
                    <td className="py-2 px-4 text-center">{user.username}</td>
                    <td className="py-2 px-4 text-center flex items-center space-x-2">
                        {user.email}
                      {/* <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                      <span>{user.name}</span> */}
                    </td>
                    <td className="py-2 px-4">{user._id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
  };

export default Users;
