"use client";
import React, { useState, useEffect } from "react";
import "./styles.css";
import Navbar from "./comp/navbar";
import AppleCardsCarouselDemo from "./comp/applecards";
import { BackgroundLines } from "@/components/ui/background-lines";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";

export default function Home() {
  const typingArray = ["the future.", "innovation.", "evolution."];
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingEffect = async () => {
      const currentWord = typingArray[loopIndex % typingArray.length];

      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setCurrentText((prev) => currentWord.slice(0, prev.length + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === currentWord.length) {
        // Pause before starting to delete
        await new Promise((resolve) => setTimeout(resolve, 400));
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        // Pause before typing the next word
        await new Promise((resolve) => setTimeout(resolve, 200));
        setIsDeleting(false);
        setLoopIndex((prev) => prev + 1);
      }
    };

    const typingInterval = setTimeout(typingEffect, isDeleting ? 20 : 100);
    return () => clearTimeout(typingInterval);
  }, [charIndex, isDeleting, loopIndex, typingArray]);
  const images = [
    "/micromouseback.png",
    "/micromousebacktwo.png",
    "/backthree.png",
  ];

  return (
    <>
      <body>
        <Navbar />
        <div className="flex items-center justify-center h-screen">
          <ImagesSlider className="" images={images}>
            <motion.div
              initial={{
                opacity: 0,
                y: -80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="z-50 flex flex-col justify-center items-center"
            >
              <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                <h3 className="bg-gradient-to-br text-6xl from-gray-600 to-white text-transparent bg-clip-text">
                  MEC Robotics
                </h3>
                <p className="text-2xl mt-4 bg-gradient-to-tr from-[#1F7BFD] via-[#A190FF] to-[#1F7BFD] bg-clip-text text-transparent animate-gradient-shift">
                  We are <span>{currentText}|</span>
                </p>
              </motion.p>
              <button
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSd6NHgufAHAXpRwh9oC5GCiBpt3wNERa2NleFNJmTCrc2Ivqg/viewform",
                    "_blank"
                  )
                }
                className="px-4 hover:scale-110 duration-150 py-2 backdrop-blur-sm border bg-indigo-300/20 border-indigo-500/50 text-white mx-auto text-center rounded-full relative mt-4"
              >
                <span>Join now →</span>
                <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-indigo-500 to-transparent" />
              </button>
              <span className="text-sm text-white">
                (Scroll down to learn more ↓)
              </span>
            </motion.div>
          </ImagesSlider>
        </div>

        <AppleCardsCarouselDemo></AppleCardsCarouselDemo>
      </body>
    </>
  );
}
