import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaHome, FaUsers, FaChartBar, FaCog, FaBars } from "react-icons/fa";
import chalk from "chalk";
import { Link } from "react-router-dom";
import { IoIosSwitch } from "react-icons/io";

function AdminDashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  //getting input from admin to upload images
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
  });
  //

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const adminAccess = async () => {
    if (!token) {
      console.log("Unauthorized ,No token available");
      navigate("/login");
    }
    const API = "http://localhost:3000/api";
    try {
      const response = await fetch(`${API}/auth/admin`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      console.log("admin", data);
      if (!data.success || !data.isAdmin) {
        console.error("❌ User is not an admin, redirecting to login...");
        // localStorage.removeItem('authToken'); // 🔹 Remove invalid token
        navigate("/signin");
        return;
      }
    } catch (error) {
      console.log("error checking admin status", error.message);
      navigate("/signin");
    }
  };

  useEffect(() => {
    adminAccess();
  }, []);

  //uploading products as an admin functionality
  const handleChangeInputs = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const handleImageChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };
  //handling submit
  const handleSubmitData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("image", product.image);
    formData.append("description", product.description);
    formData.append("price", product.price);

    //checking
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]); // Logs key-value pairs
    }
    ////

    try {
      const API = "http://localhost:3000/api/cart";
      const response = await fetch(`${API}/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const text = await response.text();
      console.log("Raw response", text);
      const data = JSON.parse(text);
      console.log("uploaded sucessfully", data);
      
    } catch (error) {
      console.log("error uploading image", error.message);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-white p-5 shadow-lg ${
          isSidebarOpen ? "w-64" : "w-20"
        } transition-all duration-300`}
      >
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
          <li>
            <Link to="/" className="flex space-x-2">
              <IoIosSwitch className="h-5 w-5" />
              {isSidebarOpen && <span>Switch to user Mode</span>}
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="mb-6 flex justify-between items-center bg-white p-4 rounded-lg shadow">
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          <input
            type="text"
            placeholder="Search..."
            className="border rounded px-3 py-1"
          />
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
          <main className="flex-1 flex justify-center items-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-bold mb-4">Upload Product</h2>
              <form className="space-y-4" onSubmit={handleSubmitData}>
                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  className="w-full p-2 border rounded"
                  onChange={handleChangeInputs}
                  required
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Product Price"
                  className="w-full p-2 border rounded"
                  onChange={handleChangeInputs}
                  required
                />
                <textarea
                  name="description"
                  placeholder="Product Description"
                  className="w-full p-2 border rounded"
                  onChange={handleChangeInputs}
                  required
                />
                <input
                  type="file"
                  // accept="image/*"
                  name="image"
                  className="w-full p-2 border rounded"
                  onChange={handleImageChange}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                  Upload
                </button>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
export default AdminDashboard;
