import React from "react";
import hero from "../../assets/hero.webp";
import Swiper from "../Swiper/Swiper.jsx";

// import {BrowserRouter as Router,Routes,Route, Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="bg-[#64b3d3] dark:bg-gray-900 mx-2">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 md:mb-8 text-4xl text-[#333333] font-bold tracking-tight leading-15 md:leading-20 md:text-5xl xl:text-6xl dark:text-white">
              Online Grocery Delivery in Karachi Pakistan
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Enjoy a seamless and secure shopping experience with fast
              delivery, easy returns, and exceptional customer service.
            </p>
          </div>
          <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            <img src={hero} alt="mockup" />
          </div>
        </div>
      </section>

      <section className="bg-[#efd645]  dark:bg-gray-900 my-20 mx-2">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
          <p className="text-center text-white text-2xl">
            Welcome to [Your Shop Name], where shopping is always an adventure!
            Dive into our treasure trove of amazing finds that are just a click
            away. From chic fashion pieces to quirky gadgets, home decor that
            speaks to your style, and gifts that bring smiles, we’ve got a
            little something for everyone.
          </p>
        </div>
      </section>
      <section className="mb-20 bg-[#9dab81d5] mx-2 ">
        <Swiper />
      </section>
    </>
  );
};

export default Hero;
