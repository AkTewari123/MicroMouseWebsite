"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Col, Row } from "react-bootstrap";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <div className="mx-16 font-['Outfit']">
        <h2 className="max-w-7xl mb-4 pl-4 text-xl md:text-5xl font-bold text-white dark:text-neutral-200">
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
  text?: React.FC | string;
  imgurl: string | StaticImport;
  imgurlTwo: string | StaticImport;
  link?: string;
}
const AppleCards: React.FC<AppleCardProps> = ({
  text,
  imgurl,
  imgurlTwo,
  link,
}) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <>
      <div className="bg-[black] border-gray-500 border-[1px] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-white dark:text-neutral-400 text-base font-['Outfit'] max-w-3xl mx-auto">
          {typeof text === "string" ? (
            <p>{text}</p>
          ) : (
            text && <div>{text({})}</div> // Render the React.FC
          )}
        </p>
        <hr className="border-gray-500 border-1 my-5" />
        <div className="flex flex-row justify-end">
          <Image
            src={imgurlTwo}
            alt="Micromouse Image"
            width="300"
            height="300"
            className="border-[4px] buttonScreen:text-white border-[#4284F3] rounded-md mx-auto object-contain"
          />

          {width > 820 ? (
            <Image
              src={imgurl}
              alt="Micromouse Image"
              width="300"
              height="300"
              className="border-[3px] border-[#4284F3] rounded-md mx-auto object-contain"
            />
          ) : (
            <></>
          )}
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
      <AppleCards
        imgurl={"/bluemouse.png"}
        imgurlTwo={"/unwiredtwo.png"}
        text={() => {
          return (
            <>
              The Micromouse Competition is an annual event where students will
              build and compete against each other using a micromouse. The
              competition will be held at NJIT in the summer of 2025. The
              specific date is tentative (subject to change). We will notify all
              participants once a date is finalized. You can preregister without
              commitment by clicking on the &quot;Preregister&quot; option on
              the right of the navbar.
            </>
          );
        }}
      />
    ),
  },
  {
    category: "Venue & Time",
    title: "Rutgers University",
    src: "/rutgers.jpg",
    //If you would like to stay up to date with all the  Discord Server for MEC, please navigate to the &quot;Resources&quot; tab or go to the
    content: (
      <AppleCards
        text={() => {
          return (
            <>
              The MEC Robotics Competition will be held at NJIT on September 27,
              2025. This date is tentative (subject to change). We will notify
              all participants once a date is finalized. You can preregister
              without commitment by clicking on the "Preregister" option on the
              right of the navbar or by clicking{" "}
              <b>
                <a
                  className="text-[#1F7BFD]"
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd6NHgufAHAXpRwh9oC5GCiBpt3wNERa2NleFNJmTCrc2Ivqg/viewform"
                >
                  {" "}
                  here.{" "}
                </a>
              </b>
            </>
          );
        }}
        imgurl={"/njitrobotcomp.png"}
        imgurlTwo={"/njitrobotcomptwo.png"}
      />
    ),
  },
  {
    category: "Overview",
    title: "What You'll Learn",
    src: "/soldering.jpg",
    content: (
      <AppleCards
        text={() => {
          return (
            <>
              <div>
                While preparing for the micromouse competition, you will learn
                how to solder, create printed circuit board (PCB) design,
                implement algorithms into hardware components, design components
                using Fusion360, and more! These skills come in very handy when
                programming/designing your own projects. Also, these skills can
                get you in the door for Robotics organizations like{" "}
                <a
                  href="https://www.vexrobotics.com/"
                  className="text-[#1F7BFD]"
                  target="_blank"
                >
                  VEX
                </a>{" "}
                and &nbsp;
                <a
                  href="https://www.firstinspires.org/robotics/frc"
                  className="text-[#1F7BFD]"
                  target="_blank"
                >
                  First.
                </a>
              </div>
            </>
          );
        }}
        imgurl={"/fusion.png"}
        imgurlTwo={"/soldering.png"}
      />
    ),
  },

  {
    category: "Our Support",
    title: "Seminars/Contact Info",
    src: "/engineeringclass.jpg",
    content: (
      <AppleCards
        imgurl={"/techlab.png"}
        text={() => {
          return (
            <>
              We hold monthly seminars with world-class engineers to provide our
              contestants with the information they need to succeed. If you
              attend the whole set of seminars that is slated to take place in
              August &apos;25, you will walk away with a FULLY CONSTRUCTED
              micromouse. Please visit the "Announcements" tab for more
              information. Join us on{" "}
              <a
                href="https://discord.gg/K3khVW7P"
                className="text-[#1F7BFD]"
                target="_blank"
              >
                Discord
              </a>
              ,{" "}
              <a
                className="text-[#1F7BFD]"
                target="_blank"
                href="https://www.instagram.com/mec_competition/"
              >
                Instagram
              </a>
              , and{" "}
              <a
                className="text-[#1F7BFD]"
                target="_blank"
                href="https://www.linkedin.com/company/nj-mec-competition/"
              >
                LinkedIn.
              </a>{" "}
              Watch this{" "}
              <a
                href="https://youtu.be/ZMQbHMgK2rw?si=IV4tCySce-Qe1DWX"
                className="text-[#1F7BFD]"
                target="_blank"
              >
                YouTube video
              </a>{" "}
              for more info.
            </>
          );
        }}
        imgurlTwo={"/techlab2.png"}
      />
    ),
  },
  {
    category: "Rules",
    title: "An Overview of the Rules",
    src: "/rulesreg.png",
    content: (
      <AppleCards
        imgurl={"/mmsafety.png"}
        text={() => {
          return (
            <>
              Teams of 3 (or less) will team together to build a micromouse to
              autonomously complete a maze (the shape of the maze will be shown
              at the competition). You are allowed to use any kits you find
              online and enlist anyone&apos;s help you want, but the award will
              only go to three people. For more details, visit the "Rules" tab
              for more information or by clicking{" "}
              <a
                className="text-[#1F7BFD]"
                target="_blank"
                href="https://drive.google.com/file/d/1CtmNMuE4HtUcB-xBE9M29b7bxAinYx3g/view?usp=sharing"
              >
                here.{" "}
              </a>
            </>
          );
        }}
        imgurlTwo={"/mmsafetytwo.png"}
      />
    ),
  },
];
