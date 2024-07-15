import { AiOutlineDown } from "react-icons/ai";
import { Navbar, Footer, Question } from "../components";
import { phosphate } from "../fonts";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Faq() {
  const TeamAnswerOne = (
    <>
      By joining the{" "}
      <a
        href="https://discord.gg/AjcAVctz"
        target="_blank"
        className="text-discordPurp font-semibold decoration underline underline-offset-4 decoration-3 inline"
      >
        Discord <i className="fas fa-arrow-up rotate-45"></i>
      </a>
      {"  "}
      and looking at the "resources" channel, you can see a {"    "}
      <a
        href="https://docs.google.com/spreadsheets/d/1j_LK_1VGpp5ze8Arpm92Ydofv1EeV8OQGTbGoaEW_qA/edit?gid=1955226837#gid=1955226837"
        target="_blank"
        className="text-sheetsGreen font-semibold decoration underline underline-offset-4 decoration-3 inline"
      >
        Google Sheet <i className="fas fa-arrow-up rotate-45"></i>
      </a>
      {"  "}
      that has a list of interested applicants (and their contact information).
      You can use this {"    "}
      <a
        href="https://docs.google.com/spreadsheets/d/1j_LK_1VGpp5ze8Arpm92Ydofv1EeV8OQGTbGoaEW_qA/edit?gid=1955226837#gid=1955226837"
        target="_blank"
        className="text-formPurp font-semibold decoration underline underline-offset-4 decoration-3 inline"
      >
        Google Form <i className="fas fa-arrow-up rotate-45"></i>
      </a>
      {"  "}
      You can use this to form a team.
    </>
  );
  const TeamAnswerTwo = (
    <>
      The{" "}
      <a
        href="https://discord.gg/AjcAVctz"
        target="_blank"
        className="text-discordPurp font-semibold decoration underline underline-offset-4 decoration-3 inline"
      >
        Discord <i className="fas fa-arrow-up rotate-45"></i>
      </a>{" "}
      has a "seminars" text channel. This channel will the details of an
      upcoming seminars, including the dates and professionals that will need
      these seminars. You can also use {"         "}
      <a
        href="https://www.youtube.com/playlist?list=PLE-BQwvVGf8HOvwXPgtDfWoxd4Cc6ghiP"
        target="_blank"
        className="text-youtubeRed font-semibold decoration underline underline-offset-4 decoration-3 inline"
      >
          Youtube <i className="fas fa-arrow-up rotate-45"></i>
      </a> to learn Python for this project.
    </>
  );
  return (
    // TODO: make format nicer

    <>
      <Navbar
        aboutCol="text-black"
        faqCol="text-lightBlue underline underline-offset-8"
      />
      <div className=" flex flex-col items-start p-6 h-auto bg-lightBlue w-full">
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
          src="https://media.discordapp.net/attachments/950950901957402675/1262232987936886824/GkAAAAASUVORK5CYII.png?ex=66968253&is=669530d3&hm=2915aa45b4216f764cf97fe9ff7454cdda6f0cb9e3c319ed9e18317c86cd509f&=&format=webp&quality=lossless&width=1512&height=1422"
          className="h-[300px] float-right ml-[70%] mt-[1%] absolute"
          alt="MEC Logo"
           />

        
      </div>
      <div className = 'p-6 space-y-4'>
        <ol>
          <li>
            <Question text="How do I get a team?" answer={TeamAnswerOne} />
            <Question
              text="I don't know how to build a Micromouse, where can I learn?"
              answer={TeamAnswerTwo}
            />
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
