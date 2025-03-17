
import React from "react";
import { useState } from "react";
import { FaHome, FaUsers, FaChartBar, FaCog, FaBars } from "react-icons/fa";

export default function AdminDashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-white p-5 shadow-lg ${isSidebarOpen ? "w-64" : "w-20"} transition-all duration-300`}>
        <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="mb-4">
          <FaBars className="h-6 w-6" />
        </button>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2">
            <FaHome className="h-5 w-5" />
            {isSidebarOpen && <span>Dashboard</span>}
          </li>
          <li className="flex items-center space-x-2">
            <FaUsers className="h-5 w-5" />
            {isSidebarOpen && <span>Users</span>}
          </li>
          <li className="flex items-center space-x-2">
            <FaChartBar className="h-5 w-5" />
            {isSidebarOpen && <span>Analytics</span>}
          </li>
          <li className="flex items-center space-x-2">
            <FaCog className="h-5 w-5" />
            {isSidebarOpen && <span>Settings</span>}
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="mb-6 flex justify-between items-center bg-white p-4 rounded-lg shadow">
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          <input type="text" placeholder="Search..." className="border rounded px-3 py-1" />
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Total Users</h2>
            <p className="text-2xl font-bold">1,240</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Revenue</h2>
            <p className="text-2xl font-bold">$12,450</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Active Sessions</h2>
            <p className="text-2xl font-bold">320</p>
          </div>
        </div>
      </div>
    </div>
  );
}
