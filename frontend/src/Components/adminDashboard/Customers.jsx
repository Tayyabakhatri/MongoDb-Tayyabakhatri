import React from 'react'

const Customers = ({ customers }) => {
    return (
        <div className="bg-[#485566] p-4 rounded-2xl shadow-md w-full mt-6">
          <h2 className="text-xl font-bold text-white  mb-3">Customer Details</h2>
          <div className="overflow-x-auto rounded-2xl">
            <table className="min-w-full bg-gray-400 rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Description</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id} className="border-b">
                    <td className="py-2 px-4 text-center">{customer.username}</td>
                    <td className="py-2 px-4 text-center flex items-center space-x-2">
                        {customer.email}
                      {/* <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                      <span>{user.name}</span> */}
                    </td>
                    <td className="py-2 px-4">{customer._id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
  };


export default Customers
