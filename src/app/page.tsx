"use client";
import { AiOutlineDown } from "react-icons/ai";
import { phosphate } from "./fonts";
import * as React from "react";
import { Navbar, Footer } from "./components";
import Image from "next/image";
import Head from "next/head";
import { ImGithub } from "react-icons/im";

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
          className={`${phosphate.variable} font-sans text-7xl text-center mb-10 bg-gradient-to-tr from-[#E55D76] to-[#5FC3E4]
                     inline-block text-transparent bg-clip-text`}
        >
          ONE MAZE, ONE MOUSE
          <br />
          ONE CLOCK
        </h1>

        <p className="w-2/3 tablet:text-[10px] text-2xl font-['Outfit'] text-center mb-10">
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

      <div className="flex flex-col gap-10 mb-10 px-10">
        {/* Venue Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start mb-10">
          <div className="md:w-1/2 md:pr-10">
            <h2 className={` text-4xl font-bold bg-gradient-to-tr from-lightRed to-lightBlue inline-block bg-clip-text text-transparent mb-4`}>
              VENUE
            </h2>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://media.discordapp.net/attachments/834855883623235605/1262573864165310494/image.png?ex=6697170a&is=6695c58a&hm=4aa88c5ff1938fa120c72e8086848649b5a0838eba20175247dbc8f702c4aac4&=&format=webp&quality=lossless&width=1185&height=770"
              alt="Venue Image"
              className="red-text-shadow"
            />
          </div>
        </div>

        {/* Impact Section */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start mb-10">
          <div className="md:w-1/2 md:pl-10">
            <h2 className="text-4xl font-bold bg-gradient-to-tr from-lightRed to-lightBlue mb-4 inline-block bg-clip-text text-transparent">
              IMPACT
            </h2>
            <p className="text-lg mb-4">
              Micromouse offers a priceless and immersive educational
              experience. We want middle school and high school students to
              explore STEM. To plant the seeds of passion, students nurture
              creativity, teamwork, and problem solving in order to program a
              small robot that can autonomously complete a maze.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://media.discordapp.net/attachments/834855883623235605/1262574721866928178/image.png?ex=669717d7&is=6695c657&hm=51c943ef2686211bb0f662011c204850ae88033e61ecab7ff5cbfea7a09a2675&=&format=webp&quality=lossless&width=1093&height=770"
              className=""
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
