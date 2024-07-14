import { AiOutlineDown } from "react-icons/ai";

export default function Faq() {
  return (
    // TODO: make format nicer
    <div className="h-screen flex flex-col items-left ">
      <h1 className={`font-sans text-6xl text-left mb-10 bg-gradient-to-tr from-[#E55D76] to-[#5FC3E4]
                     inline-block text-transparent bg-clip-text`}>
        Frequently Asked Questions
      </h1>
      <p>
      At MEC, we have always believed that nothing is more precious than kindling a love for STEM amongst middle and high school students. 
      That's why we present to you the micromouse program: an all-ecompassing, hands-on education project that allows students to explore 
      their imaginations and creative problem-solving skills. This is done through working in teams to develop 
      innovative strategies that enable them to program a minature robot that can move independently from one point of 
      a labyrinth to the other. 
      </p>
    </div>
  );
}
