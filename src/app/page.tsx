"use client";
import React, { useState, useEffect } from "react";
import "./styles.css";
import Navbar from "./comp/navbar";
import AppleCardsCarouselDemo from "./comp/applecards";

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

  return (
    <>
      <body>
        <Navbar />
        <div className="h-screen bg-[url('/darkback.png')] bg-cover flex flex-col justify-center items-center">
          <h1 className="text-white text-[6rem] " id="mecroboticsHeader">
            MEC Robotics
          </h1>
          <p className="text-white text-2xl mt-4">
            We are <span>{currentText}|</span>
          </p>
        </div>

        <AppleCardsCarouselDemo></AppleCardsCarouselDemo>
      </body>
    </>
  );
}
