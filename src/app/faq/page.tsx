import { AiOutlineDown } from "react-icons/ai";
import { Navbar, Footer, Question } from "../components";
import { phosphate } from "../fonts";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from 'next/image';
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
      and looking at the resources channel, you can see a {"    "}
      <a
        href="https://docs.google.com/spreadsheets/d/1j_LK_1VGpp5ze8Arpm92Ydofv1EeV8OQGTbGoaEW_qA/edit?gid=1955226837#gid=1955226837"
        target="_blank"
        className="text-sheetsGreen font-semibold decoration underline underline-offset-4 decoration-3 inline"
      >
        Google Sheet <i className="fas fa-arrow-up rotate-45"></i>
      </a>
      {"  "}
      that has a list of interested applicants (and their contact information).
      You can use this to form a team. You can use this {"    "}
      <a
        href="https://forms.gle/Wsx3Uwg72sxRLsCC8"
        target="_blank"
        className="text-formPurp font-semibold decoration underline underline-offset-4 decoration-3 inline"
      >
        Google Form <i className="fas fa-arrow-up rotate-45"></i>
      </a>
      {"  "} to submit your information to this sheet.
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
      has a seminars text channel. This channel will provide the details of any
      upcoming seminars, including the dates and professionals that will lead
      these seminars. You can also use {"         "}
      <a
        href="https://www.youtube.com/playlist?list=PLE-BQwvVGf8HOvwXPgtDfWoxd4Cc6ghiP"
        target="_blank"
        className="text-youtubeRed font-semibold decoration underline underline-offset-4 decoration-3 inline"
      >
        Youtube <i className="fas fa-arrow-up rotate-45"></i>
      </a>{" "}
      to learn Python for this project.
    </>
  );
  const TeamAnswerThree = (
    <>
      Micromouse is an engineering competition where small, robotic mice{" "}
      <a
        href="https://drive.google.com/drive/folders/13Gqyx88dv3vA7_w2pK9YYdSOxhkDC985?usp=drive_link"
        target="_blank"
        className="text-sheetsGreen font-semibold decoration underline underline-offset-4 decoration-3 inline"
      >
        (to see an image of a sample maze, mouse, and competition that is typical
        for a micromouse competition click this link)
        <i className="fas fa-arrow-up rotate-45"></i>
      </a>{" "}
      are programmed to autonomously complete a 10 foot by 10 foot maze. This
      micromouse competition, along with MEC, is sanctioned by {"  "}
      <a
        href="https://drive.google.com/drive/folders/13Gqyx88dv3vA7_w2pK9YYdSOxhkDC985?usp=drive_link"
        target="_blank"
        className="text-silverBord font-semibold decoration underline underline-offset-4 decoration-3 inline"
      >
        IEEE <i className="fas fa-arrow-up rotate-45"></i>
      </a>{" "}
      .
    </>
  );
  const TeamAnswerFour = (
    <>
      Unfortunately, this competition is available exclusively to 6-12th grade students.
      However, {"  "}
      <a
        href="https://robotics.pages.tcnj.edu/"
        target="_blank"
        className="text-tcnjBlue font-semibold decoration underline underline-offset-4 decoration-3 inline"
      >
        the TCNJ website <i className="fas fa-arrow-up rotate-45"></i>
      </a>{" "}
      has a list of plenty of robotics competitions that are open to college
      students. These competitions are in New Jersey.
    </>
  );
  const TeamAnswerSeven = (
    <>
      Don&apos;t procrastinate! There is plenty of time to make a mouse for this
      competition. In addition, we recommend that you
      spend a lot of time and effort into making a robot that can complete this
      task quickly. To add on, doing trial runs would get you prepared. Finally,
      there will be a lot of setbacks in the making of this mouse, so we recommend you
      be patient and diligent as you and your team are in this together for
      the long run. Visit {"  "}
      <a
        href="https://projects.ieeebruins.com/micromouse/q-and-a"
        target="_blank"
        className="text-ieeeGreen font-semibold decoration underline underline-offset-4 decoration-3 inline"
      >
        this page <i className="fas fa-arrow-up rotate-45"></i>
      </a>{" "}
      for more information.
    </>
  );
  const TeamAnswerSix = (
    <>
      It may cost{" "}
      <b className="text-green-500 decoration underline underline-offset-4">
        $100-$150
      </b>{" "}
      to make a Micromouse. Here are all the items necessary to make one:
      <ol className="ml-4">
        <li className="py-2">
          <b>1.</b> Arduino Mega2560
        </li>
        <li className="py-2">
          <b>2.</b> Four Infrared sensors (Obstacle avoidance)
        </li>
        <li className="py-2">
          <b>3.</b> Motor driver Hbridge
        </li>
        <li className="py-2">
          <b>4.</b> Two Ultrasonic sensors{" "}
        </li>
        <li className="py-2">
          <b>5.</b> Jumbo wires
        </li>
        <li className="py-2">
          <b>6.</b> heat shrink
        </li>
        <li className="py-2">
          <b>7.</b> 2WD miniq robot car chassis
        </li>
        <li className="py-2">
          <b>8.</b> Two DC motors with encoders
        </li>
      </ol>
      All information from the list above was taken from {"   "}
      <a
        href="https://www.instructables.com/Micro-Mouse-for-Beginnersth/"
        target="_blank"
        className="text-autodeskYellow font-semibold decoration underline underline-offset-4 decoration-3 inline"
      >
        this website <i className="fas fa-arrow-up rotate-45"></i>
      </a>
      . If you need any other technical information, you can reach out to the
      staff on the {"  "}
      <a
        href="https://discord.gg/AjcAVctz"
        target="_blank"
        className="text-discordPurp font-semibold decoration underline underline-offset-4 decoration-3 inline"
      >
        Discord Server <i className="fas fa-arrow-up rotate-45"></i>
      </a>{" "}
      , but the best way is to use the internet to get what you need.
    </>
  );
  const TeamAnswerFive = (
    <>
      If this is your first time doing a STEM-intensive activity with a team, it
      may take 3-5 hours <b>per week</b> of solid work with a team. This may
      take about <b>9 weeks</b> depending on your productivity. These weeks will
      be spent troubleshooting, writing code, and tenaciously following the
      engineering design process.
    </>
  );
  const TeamAnswerEight = (
    <>
      Right now, the price is{" "}
      <b className="text-sheetsGreen">$50 per person.</b> However, this price
      has the potential to go up to <b className="text-sheetsGreen">$70 per 
        person.</b> Register now to get the best deal possible!
    </>
  );
  return (
    // TODO: make format nicer

    <>
      <Navbar
        aboutCol="text-black"
        faqCol="text-lightBlue underline underline-offset-8"
      />
      <div className=" flex flex-col items-start px-16 py-16 h-auto bg-lightBlue w-full">
        <h1
          className={`${phosphate.variable} laptop:text-left font-sans text-6xl text-white text-center mt-8 remyScreen:mb-0 remyScreen: w-[90%] remyScreen:ml-[5%]`}
        >
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <br></br>
        <p className="inline-block text-lg font-['Outfit'] leading-relaxed text-white w-[80%] remyScreen:ml-[10%] remyScreen:text-center">
          At MEC, we have always believed that nothing is more precious than
          kindling a love for STEM amongst middle and high school students.
          That&apos;s why we present to you the Micromouse competition: an
          all-encompassing, hands-on educational project that allows students to
          explore their imaginations and creative problem-solving skills. This
          is done through working in teams to develop innovative strategies that
          enable them to program a miniature robot that can move independently
          from one point of a maze to the other.
        </p>

        <Image
          src={"/rover.png"}
          className="h-auto ml-[75%] absolute remyScreen:hidden"
          alt="Rover Logo"  
          height={250}
          width={250}
        />
      </div>
      <Question text="What does pricing look like?" answer={TeamAnswerEight} />
      <Question text="How do I get a team?" answer={TeamAnswerOne} />
      <Question
        text="I don't know how to build a Micromouse, where can I learn?"
        answer={TeamAnswerTwo}
      />
      <Question
        text="Can you give me more details for this event?"
        answer={TeamAnswerThree}
      />
      <Question
        text="I'm in college, can I still participate?"
        answer={TeamAnswerFour}
      />
      <Question
        text="How much time will I spend making a Micromouse if it's my first time?"
        answer={TeamAnswerFive}
      />
      <Question
        text="How much does it cost to make a Micromouse from scratch? What do I need to make one? "
        answer={TeamAnswerSix}
      />
      <Question
        text="Is there any other advice that you can give me? "
        answer={TeamAnswerSeven}
      />

      <Footer />
    </>
  );
}
