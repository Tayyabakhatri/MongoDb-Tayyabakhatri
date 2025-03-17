import React from "react";
import vegetable from "../../assets/categories/pakistan-online-grocery.jpg";
import fruits from "../../assets/categories/fruits.jpg";
import meat from "../../assets/categories/meat.jpg";

const Items = () => {
  return (
    <>
      <div className="my-20">
        <p className="text-center font-bold text-6xl text-[#333333]">SHOP</p>
      </div>
      <div className="flex my-10  ">
        <div className="container mx-auto py-10 inline-grid grid-cols-1 md:grid-cols-3 justify-items-center bg-[#d1e1e4]">
          <div className=" relative m-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#">
              <img className="rounded-lg" src={vegetable} alt="" />
            </a>
            <span className="absolute bottom-8 left-35 text-white text-2xl">GROCERY</span>
          </div>
          <div className="relative m-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#">
              <img class="rounded-lg" src={fruits} alt="" />
            </a>
            <span className="absolute bottom-8 left-35 text-white text-2xl">FRUITS</span>
          </div>
          <div className="relative m-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#">
              <img class="rounded-lg" src={meat} alt="" />
              <span className="absolute bottom-8 left-35 text-white text-2xl">MEAT</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex my-10  ">
        <div className="container mx-auto py-10 inline-grid grid-cols-1 md:grid-cols-3 justify-items-center bg-[#d1e1e4]">
          <div className=" relative m-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#">
              <img className="rounded-lg" src={vegetable} alt="" />
            </a>
            <span className="absolute bottom-8 left-35 text-white text-2xl">GROCERY</span>
          </div>
          <div className="relative m-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#">
              <img class="rounded-lg" src={fruits} alt="" />
            </a>
            <span className="absolute bottom-8 left-35 text-white text-2xl">FRUITS</span>
          </div>
          <div className="relative m-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#">
              <img class="rounded-lg" src={meat} alt="" />
              <span className="absolute bottom-8 left-35 text-white text-2xl">MEAT</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex my-10  ">
        <div className="container mx-auto py-10 inline-grid grid-cols-1 md:grid-cols-3 justify-items-center bg-[#d1e1e4]">
          <div className=" relative m-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#">
              <img className="rounded-lg" src={vegetable} alt="" />
            </a>
            <span className="absolute bottom-8 left-35 text-white text-2xl">GROCERY</span>
          </div>
          <div className="relative m-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#">
              <img class="rounded-lg" src={fruits} alt="" />
            </a>
            <span className="absolute bottom-8 left-35 text-white text-2xl">FRUITS</span>
          </div>
          <div className="relative m-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#">
              <img class="rounded-lg" src={meat} alt="" />
              <span className="absolute bottom-8 left-35 text-white text-2xl">MEAT</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
