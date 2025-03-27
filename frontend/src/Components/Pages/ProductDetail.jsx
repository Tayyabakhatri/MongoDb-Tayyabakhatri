import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  //2 approaches
  //ya to local storage se uthalo data ya phir state se
  //lekin dono men refresh ho rha he ...
  const isProduct = useSelector((state) => state.productDetail);
  console.log(isProduct);

  //   const storedProduct = {
  //     productName: localStorage.getItem("productName"),
  //     productPrice: localStorage.getItem("productPrice"),
  //     productDescription: localStorage.getItem("productDescription"),
  //     productId: localStorage.getItem("productId"),
  //     productImage: localStorage.getItem("productImage"),
  //   };

  // const {productName,productDescription,productPrice,productImage,productId}= storedProduct

  return (
    <>


    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="container mx-auto p-6">
    <motion.div
      className="grid md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Product Image */}
      <motion.img
        src={isProduct.productImage}
        alt="Product"
        className="mx-auto h-52 w-52 rounded-xl shadow-md  border-gray-300"
        whileHover={{ scale: 1.05 }}
      />

      {/* Product Details */}
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">{isProduct.productName}</h2>
        <p className="text-gray-600 text-lg mb-4">{isProduct.productDescription}</p>
        <p className="text-2xl font-semibold text-blue-600 mb-6">${isProduct.productPrice}</p>

        {/* Quantity Selector */}
        <div className="flex items-center space-x-6 bg-gray-200 px-4 py-2 rounded-lg w-fit mb-6">
          <button
            className="text-xl font-bold text-gray-800 hover:text-red-500 transition"
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          >
            -
          </button>
          <span className="text-xl font-semibold">{quantity}</span>
          <button
            className="text-xl font-bold text-gray-800 hover:text-green-500 transition"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Add to Cart
          </button>
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  </div>
</div>

    </>


  );
};

export default ProductDetail;
