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
        "Ayden is the Chief Financial Officer of the organization. He is responsible for the financial aspects of the organization, and he makes sure that funding and donations are acquired in order to keep the operation going.",
      name: "Ayden Pinto",
      designation: "Chief Financial Officer",
      src: "/ayden.jpeg",
    },
    {
      quote:
        "Henry is the Chief Operations Officer of the organization. He uses his skills & 4H experience to help the organization grow.",
      name: "Henry Cantor",
      designation: "Chief Operations Officer",
      src: "/henry.jpeg",
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
