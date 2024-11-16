"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Col, Row } from "react-bootstrap";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <div className="mx-16 font-['Outfit']">
        <h2 className="max-w-7xl pl-4 text-xl md:text-5xl font-bold text-white dark:text-neutral-200">
          Get to know MEC.
        </h2>
        <p className="pl-4 mx-auto text-white dark:text-neutral-200">
          MEC is a student-run organization that aims to promote STEM education
          and empower middle and high school students by providing resources,
          opportunities, and support. We believe in fostering a love for
          technology, and we're excited to share our vision with you.
        </p>
      </div>
      <Carousel items={cards} />
    </div>
  );
}
interface AppleCardProps {
  text?: string;
  imgurl?: string;
}
const AppleCards: React.FC<AppleCardProps> = ({ text, imgurl }) => {
  return (
    <>
      <div className="bg-black dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-white dark:text-neutral-400 text-sm font-['Outfit'] max-w-3xl mx-auto">
          {text}
        </p>
        <div>
          <img
            src="/otherdark.png"
            alt="Micromouse Image"
            width = "200"
            height = "200"
            className="md:w-1/2 md:h-1/2 h-[100px] rounded-md mx-auto object-contain"
          />
        </div>
      </div>
    </>
  );
};

const data = [
  {
    category: "The Competition",
    title: "Micromouse ",
    src: "/micromouse.jpg",
    content: (
      <AppleCards text="MEC is a student run organization that helps middle and high school students alike nurture a passion for robotics and STEM. Micromouse is an engineering competition where teams of 3 build micromice that can autonomously complete a maze. The mouse that can complete the maze in the shortest amount of time will get a trip to MIT to compete in their micromouse competition! We also offer $500 to the highest placing team! Preregister today as prices will start to increase!" />
    ),
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <AppleCards />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <AppleCards />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <AppleCards />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <AppleCards />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <AppleCards />,
  },
];
