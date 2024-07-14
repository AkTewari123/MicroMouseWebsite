"use client";
import { AiOutlineDown } from "react-icons/ai";
import localFont from "next/font/local";
import Link from "next/link";
import * as React from "react";
import { useState, useEffect } from "react";
const phosphate = localFont({
  src: "./Phosphate.ttf",
  variable: "--font-phosphate",
});

export default function Home() {
  return (
    // TODO: Add Navbar
    <>
      <nav className="bg-white border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <img
              src="https://media.discordapp.net/attachments/834855883623235605/1262149280454541312/wEqE3sbksPlmgAAAABJRU5ErkJggg.png?ex=66958b9e&is=66943a1e&hm=48d29252482380999fa71737f1076cc4bdec3e7ad5ca5c5be8c2ffb9c05f4c26&=&format=webp&quality=lossless&width=1210&height=693"
              className="h-16"
              alt="MEC Logo"
            />
          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <span className="sr-only">Register</span>
            </button>
            <div className="relative ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>

              <a href = "https://www.remove.bg/upload" className="px-5 py-1 text-[23px] rounded-full  bg-lightBlue dark:text-black font-bold transition duration-[1000ms] hover:text-white">
                Register
              </a>
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <ul className="flex font-['Outfit'] flex-col p-4  md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-[23px] md:bg-white ">
              <li>
                <a
                  href="#"
                  className="block font-['Outfit'] py-2 px-8  text-black bg-white rounded md:bg-transparent md:p-0 transition duration-[500ms] hover:text-lightBlue"
                  aria-current="page"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block font-['Outfit'] ml-[20px] py-2 px-4 text-black rounded transition duration-[500ms] hover:text-lightBlue md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Rules
                </a>
              </li>
              <li>
                <a
                  href="./faq"
                  className="block font-['Outfit'] ml-[20px] py-2 px-4 text-black rounded transition duration-[500ms] hover:text-lightBlue md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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
    </>
  );
}
