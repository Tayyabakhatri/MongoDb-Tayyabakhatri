import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import banner from "../../../src/assets/banner.jpg";

const Items = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // Redirect to signup if user is not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signup");
    }
  }, [isAuthenticated, navigate]);

  // ✅ Only render if authenticated
  if (!isAuthenticated) return null;

  const token = localStorage.getItem("token");
  const fetchingProducts = async (e) => {
    // e.preventDefault();
    try {
      const API = "http://localhost:3000/api/cart";
      const response = await fetch(`${API}/gettingProduct`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        console.error("error", response.status);
      } else {
        const data = await response.json();
        console.log("fetch products ", data.productCollection);
        setData(data.productCollection);
      }
    } catch (error) {
      console.log("error fetching products", error.message);
    }
  };
  useEffect(() => {
    fetchingProducts();
  }, []);

  const handleProductClick = (product) => {
    localStorage.setItem("productId", product._id);
    localStorage.setItem("productName", product.name);
    localStorage.setItem("productDescription", product.description);
    localStorage.setItem("productPrice", product.price);
    localStorage.setItem("productImage", product.image);
    navigate(`/product/${product._id}`);
  };

  return (
    <>
      <div>
        <img src={banner} alt="" />
      </div>
      <div className="p-7 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:mt-8">
        {data.map(({ price, name, image, description, _id }) => (
          <div
            key={_id}
            onClick={() =>
              handleProductClick({ price, name, image, description })
            }
            className="mx-auto w-full max-w-screen-xl xl:mt-20 xl:block"
          >
            <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-[#8a5cae64] p-6 shadow-sm">
              <a href="#" className="overflow-hidden rounded block">
                <img
                  className="mx-auto h-44 w-44 dark:hidden"
                  src={image}
                  alt="iMac image"
                />
              </a>
              <div>
                <a
                  href="#"
                  className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                >
                  {name}
                </a>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  {description}
                </p>
              </div>
              <div>
                <p className="text-lg font-bold text-red-600 dark:text-red-500">
                  {price}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg
                    className="me-2 h-5 w-5"
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
                    />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Items;
