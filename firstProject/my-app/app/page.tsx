"use client"; // This enables the component to run on the client side

import React from "react";
import { Vortex } from "@/app/components/ui/vortex";
import Typewriter from "@/app/components/typewriter";
import Button from "./components/button";
import Card from "./components/card";

function Home() {
  function onclickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log("Onclick handler is called");
    console.log(e.currentTarget.value);
    alert("Hello Sunny!")
  }

  function onclickHandlernew(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log("Onclick handler new is called");
    console.log(e.currentTarget.value);
    alert("Hello Sunny!")
  }

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black overflow-hidden">
        <Vortex
          rangeY={800}
          particleCount={600}
          baseHue={180}
          className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 py-8 w-full h-full"
        >
          <Typewriter />
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-center leading-relaxed tracking-wide">
            <span className="text-yellow-400 font-semibold">Code With Sunny</span>{" "}
            is where your coding journey begins! Master HTML, CSS, Tailwind CSS, JavaScript,
            and TypeScript through engaging courses. Level up with React, Next.js, Node.js, 
            and Express.js. Build dynamic full-stack apps using MongoDB and SQL. Let’s turn 
            your passion into skills at <span className="text-yellow-400 font-semibold">Code With Sunny</span>.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-8 animate-bounce">
            <Button onClick={onclickHandler} title="Contact Us" />
            <Button onClick={onclickHandlernew} title="Watch Trailer" />
          </div>
        </Vortex>
      </div>

      <div className="bg-gradient-to-t from-gray-900 to-black py-10">
        <h1 className="text-center text-5xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-8">
          Our Projects
        </h1>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-14 px-4 sm:px-6 md:px-8 lg:px-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default Home;
