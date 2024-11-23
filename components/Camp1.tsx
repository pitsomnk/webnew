"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Camp1 = () => {
  const [text] = useTypewriter({
    words: [
      "Your trusted Shopping Platform.",
      "Providing best user experience for customers.",
      "Delivery on time in demand.",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    
    <div className="h-96 max-w-screen-2xl mx-auto flex flex-col justify-center items-center">
      <h1 className="text-2xl md:text-4xl bold-52 lg:bold-88 bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent font-bold">
        The galley experience!
      </h1>
      <p className=" md:text-lg font-semibold text-3xl text-amber-500 mt-2">
        {text} <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" />
      </p>
    </div>
  );
};

export default Camp1