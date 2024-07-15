"use client";
import { AiOutlineDown } from "react-icons/ai";
import { phosphate } from "./fonts";
import * as React from "react";
import {Navbar, Footer} from "./components";  

export default function Home() {
  return (
    <>
      <Navbar
      aboutCol = "text-black" 
      faqCol = "text-black" 
      
      />

      <div className="h-screen flex flex-col justify-center items-center">
        <h1
          className={`${phosphate.variable} font-sans text-7xl text-center mb-10 bg-gradient-to-tr from-[#E55D76] to-[#5FC3E4]
                     inline-block text-transparent bg-clip-text`}
        >
          ONE MAZE, ONE MOUSE
          <br />
          ONE CLOCK
        </h1>

        <p className="w-2/3 text-2xl font-['Outfit'] text-center mb-10">
          Micromouse is a high-stakes competition where small mechanical mice
          have to autonomously complete a maze in the least amount of time.{" "}
          <br />
          <br />
          Are you up for the challenge?
        </p>
        <h1 className="text-5xl text-center mb-10">YES!</h1>
        <h1 className="text-7xl hover:text-lightBlue ease-in duration-300 animate-bounce">
          <AiOutlineDown />
        </h1>
      </div>
      <Footer />
    </>
  );
}
