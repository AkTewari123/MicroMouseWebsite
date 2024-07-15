import { AiOutlineDown } from "react-icons/ai";
import { Navbar, Footer, Question } from "../components";
import { phosphate } from "../fonts";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Faq() {
  return (
    // TODO: make format nicer
    <>
      <Navbar
        aboutCol="text-black"
        faqCol="text-lightBlue underline underline-offset-8"
      />
      <div className=" flex flex-col items-start p-6 h-[350px] bg-lightBlue w-full">
      <h1
            className={`${phosphate.variable} font-sans text-6xl text-white text-center mt-8 mb-5`}
          >
            FREQUENTLY ASKED QUESTIONS
          </h1>
        <br></br>
        <p className="inline text-lg font-['Outfit'] leading-relaxed text-white w-[70%]">
          At MEC, we have always believed that nothing is more precious than
          kindling a love for STEM amongst middle and high school students.
          That's why we present to you the micromouse program: an
          all-ecompassing, hands-on education project that allows students to
          explore their imaginations and creative problem-solving skills. This
          is done through working in teams to develop innovative strategies that
          enable them to program a minature robot that can move independently
          from one point of a labyrinth to the other.
        </p>

        <img
          src="https://media.discordapp.net/attachments/834855883623235605/1262190526006820945/GkAAAAASUVORK5CYII.png?ex=6695b207&is=66946087&hm=091f88bbbe976462f25215aaccba735e9a04cef33e457991254138224f01efc9&=&format=webp&quality=lossless&width=818&height=770"
          className="h-[300px] float-right ml-[75%] absolute"
          alt="MEC Logo"
        />
      </div>
      <div>
        <ol>
          <li>
            <Question text="How do I get a team?"
            answer = "By joining the discord and looking at the 'resources' channel, you can see a google sheet that has a list of interested applicants (and their information) and contact people to form a team."
            />
            <Question text="Question 1" />
            <Question text="Question 2" />
            <Question text="Question 3" />
            <Question text="Question 4" />
            <Question text="Question 5" />
          </li>
        </ol>
      </div>
      <Footer />
    </>
  );
}
