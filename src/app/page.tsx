"use client";
import { AiOutlineDown } from "react-icons/ai";
import { phosphate } from "./fonts";
import * as React from "react";
import { Navbar, Footer } from "./components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
        />
      </Head>

      <Navbar aboutCol="text-black" faqCol="text-black" />

      <div className="h-screen flex flex-col justify-center items-center">
        <h1
          className={`${phosphate.variable} pt-4 font-sans text-7xl text-center mb-10 bg-gradient-to-tr from-[#E55D76] to-[#5FC3E4]
                     inline-block text-transparent bg-clip-text`}
        >
          ONE MAZE, ONE MOUSE
          <br />
          ONE CLOCK
        </h1>

        <div className="w-2/3 text-2xl font-['Outfit'] text-center mb-10">
        The micromouse engineering competition <b className = "bg-gradient-to-tr from-[#E55D76] to-[#5FC3E4] inline-block text-transparent bg-clip-text"> (MEC)</b> is a high-stakes competition where small mechanical mice
          have to autonomously complete a maze in the least amount of time.{" "}
          <br />
          <br />
          Are you up for the challenge?
        </div>
        <a href="#section2" className="flex flex-col items-center justify-center">
          <h1 className="text-5xl text-center mb-10">YES!</h1>
          <h1 className="text-7xl hover:text-lightBlue ease-in duration-300 motion-safe:animate-bounce">
          <AiOutlineDown />
          </h1>
        </a>
      </div>

      <div className="py-20" id="section2"></div>

      <div className="flex flex-col gap-10 mb-10 px-10">
        {/* Venue Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start mb-10">
          <div className="md:w-1/2 md:pr-10">
            <h1
              className={`${phosphate.variable} font-sans text-8xl partTwoScreenThree:mt-[0%] mb-5 pt-4 partTwoScreenThree:text-5xl
                     bg-gradient-to-tr from-[#E55D76] to-[#5FC3E4]
                     inline-block text-transparent bg-clip-text mt-[10%]`}
            >
              VENUE & TIME
            </h1>
            <p className="text-[1.5rem] partTwoScreen:text-[125%] partTwoScreenTwo:text-[100%] mb-4">
              We will host our competition in a prestigous college in New Jersey! This competition will take place
              in late November. We have not finalized a date yet.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/venue.webp"
              alt="Venue Image"
              className=""
            />
          </div>
        </div>

        {/* Impact Section */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start mb-10">
          <div className="md:w-1/2 md:pl-10">
            <h1
              className={`${phosphate.variable} font-sans text-8xl partTwoScreenThree:text-5xl mt-[5%]
                     inline-block pt-4 partTwoScreenThree:mt-[0%]
                     bg-gradient-to-tr from-[#E55D76] to-[#5FC3E4] text-transparent bg-clip-text`}
            >
              IMPACT
            </h1>
            <p className="text-[150%] mb-[20px] partTwoScreen:text-[125%] partTwoScreenTwo:text-[100%]">
              Micromouse offers a priceless and immersive educational
              experience. We want middle school and high school students to
              explore STEM. To plant the seeds of passion, students nurture
              creativity, teamwork, and problem solving in order to program a
              small robot that can autonomously complete a maze.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={"/impact.webp"}
              className="z-10"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
