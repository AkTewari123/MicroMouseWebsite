"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import NavBar from "../comp/navbar";
import "../styles.css";
import { useEffect, useState } from "react";
import Loader from "../comp/loader";
const Meet: React.FC = () => {
  const testimonials = [
    {
      quote:
        "He is the organizer of this event as he helps coordinate tasks and makes sure things run smoothly within MEC.",
      name: "Aditya Choudhary",
      designation: "Chief Organizer and Adminstrator",
      src: "/adi.png",
    },
    {
      quote:
        "Akshat's job is to create and maintain an up-to-date website and help other team members coordinate seminars and other events. He even gave the organization its name!",
      name: "Akshat Tewari",
      designation: "Chief Technological Officer",
      src: "/akshat.jpeg",
    },
    {
      quote:
        "Maria has been key in organizing seminars and contacting prospective speakers. She also works on contacting other members of IEEE that are important for the event.",
      name: "Maria Huan",
      designation: "Seminar Coordinator - Core Team",
      src: "/maria.webp",
    },
    {
      quote:
        "Vinil plays a huge part in terms of outreach and getting the word of the organization out. It's his job to cultivate student interest and also be able to answer micromouse related questions.",
      name: "Vinil Polepalli",
      designation: "Outreach Coordinator - Core Team",
      src: "/vinil.png",
    },
    {
      quote:
        "It's Saketh's job to secure a venue for MEC and communicate with NJIT in order to secure our spot for the event. So far, NJIT is hosting our event, and Saketh has been doing a great job!",
      name: "Saketh Satti",
      designation: "Venue Coordinator - Core Team",
      src: "/saketh.png",
    },
    {
      quote:
        "Sanjit and his team make weekly advertisements to post on the website and on our Instagram. These ads include anything from videos to extravagant art made on Canva! ",
      name: "Sanjit Vinod",
      designation: "VP of Advertising - Core Team",
      src: "/sanjit.jpeg",
    },
    {
      quote:
        "Remy helps Sanjit and his team create ads that are posted weekly! ",
      name: "Remy Mander",
      designation: "VP of Advertising - Core Team",
      src: "/remy.jpeg",
    },
  ];
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  });
  return mounted ? (
    <>
      <NavBar></NavBar>
      <div className="bg-black flex items-center flex-col">
        <h1 className="font-bold mt-24 text-transparent bg-gradient-to-r from-[#1F7BFD] to-[#A190FF] bg-clip-text  text-center text-[5rem] phone:text-[7rem] smallScreen:text-[4rem]">
          Meet Our Team
        </h1>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </>
  ) : (
    <>
      <Loader link="/meet"></Loader>
    </>
  );
};

export default Meet;
