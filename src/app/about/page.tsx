import Image from 'next/image';
import "../globals.css";
import { phosphate } from "../fonts";


export default function About() {
    return (
        <div className="flex flex-col items-center mb-32">
            <div className="bg-[#5FC3E4] px-16 py-16 mb-12 text-white">
                <h1 className={`${phosphate.variable} font-sans text-6xl mb-5`}>MISSION STATEMENT</h1>
                <p className="text-lg">
                At MEC, we have always believed that nothing is more precious than
                kindling a love for STEM amongst middle and high school students. That's why
                we present to you the micromouse program: an all-encompassing, hands-on education
                project that allows students to explore their imaginations and creative problem-solving
                skills. This is done through working in teams to develop innovative strategies that enable
                them to program a miniature robot that can move independently from one point of a
                labyrinth to the other. The thing about Micromouse is not only does it make young people
                interested in technology and engineering, but it also gives them the skills they need in life.
                As they embark on this thrilling contest, they acquire perseverance, teamwork as well as an
                enhanced understanding of the STEM principles thus creating a foundation of knowledge upon which further
                learning should be based.
                </p>
            </div>
            <div className="px-16">
                <h1 className={`${phosphate.variable} font-sans text-6xl mb-10 text-center mb-20`}>MEET THE TEAM</h1>
                <div className="grid grid-cols-3 gap-[10rem]">
                    <div className="font-bold text-center">
                        <h1>Aditya Choudhary</h1>
                        <h1 className="text-[#5FC3E4]">Founder/Chief Organizer</h1>
                    </div>
                    <div className="font-bold text-center">
                        <h1>Yash Kanda</h1>
                        <h1 className="text-[#5FC3E4]">Head of Location</h1>
                    </div>
                    <div className="font-bold text-center">
                        <h1>Saketh Satti</h1>
                        <h1 className="text-[#5FC3E4]">Head of Advertising</h1>
                    </div>
                    <div className="font-bold text-center">
                        <h1>Akshat Tewari</h1>
                        <h1 className="text-[#5FC3E4]">Head of Technology</h1>
                    </div>
                    <div className="font-bold text-center">
                        <h1>Remy Mander</h1>
                        <h1 className="text-[#5FC3E4]">Head of Outreash</h1>
                    </div>
                    <div className="font-bold text-center">
                        <h1>Maria Huan</h1>
                        <h1 className="text-[#5FC3E4]">Head of Seminar</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
