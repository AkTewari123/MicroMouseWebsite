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
          <h1 className={`${phosphate.variable} font-sans text-6xl mb-5`}>
            MISSION STATEMENT
          </h1>
          <p className="text-lg">
            At MEC, we have always believed that nothing is more precious than
            kindling a love for STEM amongst middle and high school students.
            That's why we present to you the micromouse program: an
            all-encompassing, hands-on education project that allows students to
            explore their imaginations and creative problem-solving skills. This
            is done through working in teams to develop innovative strategies
            that enable them to program a miniature robot that can move
            independently from one point of a labyrinth to the other. The thing
            about Micromouse is not only does it make young people interested in
            technology and engineering, but it also gives them the skills they
            need in life. As they embark on this thrilling contest, they acquire
            perseverance, teamwork as well as an enhanced understanding of the
            STEM principles thus creating a foundation of knowledge upon which
            further learning should be based.
          </p>
        </div>
        <div className="px-10">
          <h1
            className={`${phosphate.variable} font-sans text-6xl text-center mb-20`}
          >
            MEET THE TEAM
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-[20rem]">
            <div className="flex flex-col font-bold text-center justify-center items-center">
              <h1 className="text-xl">Aditya Choudhary</h1>
              <h1 className="text-[#5FC3E4] text-lg">Founder/Chief Organizer</h1>
            </div>
            <div className="flex flex-col font-bold text-center justify-center items-center">
              <h1 className="text-xl">Yash Kanda</h1>
              <h1 className="text-[#5FC3E4] text-lg">Head of Advertising</h1>
            </div>
            <div className="flex flex-col font-bold text-center justify-center items-center">
              <h1 className="text-xl">Saketh Satti</h1>
              <h1 className="text-[#5FC3E4] text-lg">Head of Location</h1>
            </div>
            <div className="flex flex-col font-bold text-center justify-center items-center">
            <img src="https://media.discordapp.net/attachments/834855883623235605/1262905953930444800/image.png?ex=66984c53&is=6696fad3&hm=5bc5134b6a5c3b666743ff2ca02939bb5577097e2cded5a264d40463ac7e077d&=&format=webp&quality=lossless&width=1108&height=1047"
              className = "h-[200px] rounded-full block mb-5"></img>
              <h1 className="text-xl">Akshat Tewari</h1>
              <h1 className="text-[#5FC3E4] text-lg">Head of Technology</h1>
            </div>
            <div className="font-bold text-center">
            <img src="https://media.discordapp.net/attachments/834855883623235605/1262903157034324029/1705726481563.png?ex=669849b8&is=6696f838&hm=2138c3d209d1fc2400ea5acae9e1b787a337ed03fda28ef74c4d31069b4a0896&=&format=webp&quality=lossless&width=220&height=220"
              className = "h-[200px] center rounded-full block mb-5"></img>
              <h1 className="text-xl">Remy Mander</h1>
              <h1 className="text-[#5FC3E4] text-lg">Head of Outreach</h1>
            </div>
            <div className="font-bold text-center">
              <img src="https://media.discordapp.net/attachments/834855883623235605/1262903811312455770/image.png?ex=66984a54&is=6696f8d4&hm=5a8586f36d03709f9d0faa5903fc213a6456244e2e4cf5c2a3ea7f5a4b290b90&=&format=webp&quality=lossless&width=1049&height=1047"
              className = "h-[200px] center rounded-full block mb-5"></img>
              <h1 className="text-xl">Maria Huan</h1>
              <h1 className="text-[#5FC3E4] text-lg">Head of Seminar</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
