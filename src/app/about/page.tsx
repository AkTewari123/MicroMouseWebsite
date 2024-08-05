import Image from "next/image";
import "../globals.css";
import { phosphate } from "../fonts";
import { Navbar, Footer } from "../components";

export default function About() {
  return (
    <>
      <Navbar
        aboutCol="text-lightBlue underline underline-offset-8"
        faqCol="text-black"
      />
      <div className="flex flex-col items-center mb-32">
        <div className="bg-[#5FC3E4] px-16 py-16 mb-12 text-white">
          <h1
            className={`${phosphate.variable} font-sans text-6xl mb-5 macBookFin:text-6xl`}
          >
            MISSION STATEMENT
          </h1>
          <p className="text-lg macBookFin:text-[90%]">
            At MEC, we have always believed that nothing is more precious than
            kindling a love for STEM amongst middle and high school students.
            That&apos;s why we present to you the Micromouse competition: an
            all-encompassing, hands-on educational project that allows students
            to explore their imaginations and creative problem-solving skills.
            This is done through working in teams to develop innovative
            strategies that enable them to program a miniature robot that can
            move independently from one point of a maze to the other.
          </p>
        </div>
        <div className="px-10">
          <h1
            className={`${phosphate.variable} font-sans text-6xl text-center mt-20`}
          >
            MEET THE JUDGES
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-[6rem] mt-10 questionScreen:gap-y-[4rem]">
            <div className="flex flex-col font-bold text-center justify-center items-center">
              <a
                href="https://www.linkedin.com/in/ali-daneshmand-nj/"
                target="_blank"
              >
                <img
                src="/emptypfp.png"

                  className="h-[200px] center rounded-full block mb-5"
                ></img>
                <h1 className="text-xl">Ali Daneshmand </h1>
                <h1 className="text-[#5FC3E4] text-lg">IEEE Judge</h1>
              </a>
            </div>
            <div className="flex flex-col font-bold text-center justify-center items-center">
              <a href = "https://www.linkedin.com/in/laurariedelnj/"
              target="_blank">
              <img
                src="/emptypfp.png"
                className="h-[200px] center rounded-full block mb-5"
              ></img>
              <h1 className="text-xl">Laura Riedel</h1>
              <h1 className="text-[#5FC3E4] text-lg">IEEE Judge</h1>
              </a>
            </div>
            <div className="flex flex-col font-bold text-center justify-center items-center">
              <a
                href="https://www.linkedin.com/in/filomena-citarella-7074088/"
                target="_blank"
              >
                <img
                src="/emptypfp.png"

                  className="h-[200px] center rounded-full block mb-5"
                ></img>
                <h1 className="text-xl">Filomena Citarella</h1>
                <h1 className="text-[#5FC3E4]  text-lg">IEEE Judge</h1>
              </a>
            </div>
            <div className="flex flex-col font-bold text-center justify-center items-center">
              <a
                href="https://www.linkedin.com/in/michael-sosa-970678b/"
                target="_blank"
              >
                <img
                src="/emptypfp.png"

                  className="h-[200px] center rounded-full block mb-5"
                ></img>
                <h1 className="text-xl">Michael Sosa</h1>
                <h1 className="text-[#5FC3E4] text-lg">IEEE Judge</h1>
              </a>
            </div>
            <div className="flex flex-col font-bold text-center justify-center items-center">
              <a
                href="https://www.linkedin.com/in/piyush-ranjan-9297a632/"
                target="_blank"
              >
                <img
                src="/emptypfp.png"

                  className="h-[200px] center rounded-full block mb-5"
                ></img>
                <h1 className="text-xl">Piyush Ranjan</h1>
                <h1 className="text-[#5FC3E4] text-lg">IEEE Judge</h1>
              </a>
            </div>
          </div>
          <h1
            className={`${phosphate.variable} font-sans text-6xl text-center mb-10 mt-[10%]`}
          >
            MEET THE TEAM
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-[8rem] questionScreen:gap-y-[4rem]">
            <div className="flex flex-col font-bold text-center justify-center items-center">
              <img
                src="/adi.png"
                className="h-[200px] center rounded-full block mb-5"
              ></img>
              <h1 className="text-xl">Aditya Choudhary</h1>
              <h1 className="text-[#5FC3E4] text-lg">
                Founder/Chief Organizer
              </h1>
            </div>
            <div className="flex flex-col font-bold text-center justify-center items-center">
              <img
                src="/yash.jpeg"
                className="h-[200px] center rounded-full block mb-5"
              ></img>
              <h1 className="text-xl">Yash Kanda</h1>
              <h1 className="text-[#5FC3E4] text-lg">Outreach Lead</h1>
            </div>
            <div className="flex flex-col font-bold text-center justify-center items-center">
              <img
                src="/saketh.png"
                className="h-[200px] center rounded-full block mb-5"
              ></img>
              <h1 className="text-xl">Saketh Satti</h1>
              <h1 className="text-[#5FC3E4] text-lg">Venue Lead</h1>
            </div>
            <div className="flex flex-col font-bold text-center justify-center items-center">
              <img
                src="/akshat.webp"
                className="h-[200px] rounded-full block mb-5"
              ></img>
              <h1 className="text-xl">Akshat Tewari</h1>
              <h1 className="text-[#5FC3E4] text-lg">Technology Lead</h1>
            </div>
            <div className="font-bold text-center">
              <img
                src="/remy.jpeg"
                className="h-[200px] center rounded-full block mb-5"
              ></img>
              <h1 className="text-xl">Remy Mander</h1>
              <h1 className="text-[#5FC3E4] text-lg">Advertising Lead</h1>
            </div>
            <div className="font-bold text-center">
              <img
                src="/maria.webp"
                className="h-[200px] center rounded-full block mb-5"
              ></img>
              <h1 className="text-xl">Maria Huan</h1>
              <h1 className="text-[#5FC3E4] text-lg">Seminar Lead</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
