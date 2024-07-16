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
          className={`${phosphate.variable} pt-4 font-sans text-7xl text-center mb-10 bg-gradient-to-tr from-[#E55D76] to-[#5FC3E4]
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

      <div className="flex flex-col gap-10 mb-10 px-10">
        {/* Venue Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start mb-10">
          <div className="md:w-1/2 md:pr-10">
          <h1 className={`${phosphate.variable} font-sans text-8xl partTwoScreenThree:mt-[0%] mb-5 pt-4 partTwoScreenThree:text-5xl
                     bg-gradient-to-tr from-[#E55D76] to-[#5FC3E4]
                     inline-block text-transparent bg-clip-text mt-[10%]`}>
            VENUE
          </h1>
            <p className="text-[1.5rem] partTwoScreen:text-[125%] partTwoScreenTwo:text-[100%] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://media.discordapp.net/attachments/834855883623235605/1262800608033902692/image.png?ex=6697ea36&is=669698b6&hm=7d83d17e00a599127cc9cfac19a63389ac0bbda84c494bd20b764e20c3c41f0a&=&format=webp&quality=lossless&width=1133&height=770"
              alt="Venue Image"
              className=""
            />
          </div>
        </div>

        {/* Impact Section */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start mb-10">
          <div className="md:w-1/2 md:pl-10">
          <h1 className={`${phosphate.variable} font-sans text-8xl partTwoScreenThree:text-5xl mt-[5%]
                     inline-block pt-4 partTwoScreenThree:mt-[0%]
                     bg-gradient-to-tr from-[#E55D76] to-[#5FC3E4] text-transparent bg-clip-text`}>
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
              src="https://media.discordapp.net/attachments/834855883623235605/1262801150835429488/image.png?ex=6697eab8&is=66969938&hm=e470bbe8452171d5ed8e5a80971b16299064ca93a6b5020cbd00abbe869f7cb9&=&format=webp&quality=lossless&width=1093&height=770"
              className="z-10"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
