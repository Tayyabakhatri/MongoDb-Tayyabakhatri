import React, { useEffect, useState } from "react";
import Customers from "../adminDashboard/Customers.jsx";
import Users from "../adminDashboard/Users.jsx";
import { Link } from "react-router-dom";

import Graph from "../adminDashboard/Graph.jsx";
import BarChart from "../adminDashboard/UserBarChart.jsx";

const UsersCustomersPage = () => {
  const [data, setData] = useState([]);
  const [graphData, setGraphData] = useState([
    { month: "Jan", users: 30 },
    { month: "Feb", users: 50 },
    { month: "Mar", users: 10 },
    { month: "Apr", users: 120 },
    { month: "May", users: 150 },
    { month: "Jun", users: 200 },
  ]);
  const token = localStorage.getItem("token");
  const allUser = async () => {
    try {
      const API = "http://localhost:3000/api/auth";
      const response = await fetch(`${API}/users`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const allUsersData = await response.json();
        console.log(allUsersData.collection);
        setData(allUsersData.collection);
      } else {
        console.error("error fetching all users");
      }
    } catch (e) {
      console.log("error fetching users", e.message);
    }
  };
  useEffect(() => {
    allUser();
  }, []);

  const customers = data.filter((user) => user.isCustomer);
  const users = data.filter((user) => !user.isCustomer);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-500 flex items-center justify-center p-6">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
          <Customers customers={customers} />
          <Users users={users} />
          <Graph data={graphData}/>
          <BarChart data={graphData}/>
          <div>
            <Link to="/dashboard">
              <span className="border py-1 px-3 rounded text-white ">Go to Dashboard</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersCustomersPage;
