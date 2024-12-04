"use client";
import { AiOutlineDown } from "react-icons/ai";
import { phosphate } from "../fonts";
import "./resources.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
import Navbar from "../comp/navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Faq() {
  return (
    <>
      <Navbar />
      <div className="bg-black min-h-screen">
        <div
          id="resource"
          className="bg-black text-white  text-center w-1/2 mx-auto mb-16 pt-24"
        >
          <h1 className="text-[3rem] mb-2 resourcesHeader font-bold">
            Frequently Asked Questions
          </h1>
          <p className="text-center resourcesText">
            &nbsp; &nbsp;Feel free to send any questions to
            mec.competition@gmail.com or click on any of the accordion items to
            learn more!
          </p>
        </div>
        <div className="text-[1.5rem] bg-black">
          <Accordion
            className="text-white w-3/5 mx-auto accItems"
            type="single"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Where Can I Learn Everything?</AccordionTrigger>
              <AccordionContent>
                <>
                  The{" "}
                  <a
                    href="https://discord.gg/AjcAVctz"
                    target="_blank"
                    className="text-indigo-600 font-semibold decoration underline underline-offset-4 decoration-3 inline"
                  >
                    Discord <i className="fas fa-arrow-up rotate-45"></i>
                  </a>{" "}
                  has a seminars text channel. This channel will provide the
                  details of any upcoming seminars, including the dates and
                  professionals that will lead these seminars. You can also use{" "}
                  {"         "}
                  <a
                    href="https://www.youtube.com/playlist?list=PLE-BQwvVGf8HOvwXPgtDfWoxd4Cc6ghiP"
                    target="_blank"
                    className="text-red-600 font-semibold decoration underline underline-offset-4 decoration-3 inline"
                  >
                    Youtube <i className="fas fa-arrow-up rotate-45"></i>
                  </a>{" "}
                  to learn Python for this project.
                </>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            className="text-white w-3/5 mx-auto accItems"
            type="single"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Where Can I Find More Resources?
              </AccordionTrigger>
              <AccordionContent>
                <>
                  By joining the{" "}
                  <a
                    href="https://discord.gg/AjcAVctz"
                    target="_blank"
                    className="text-indigo-600 font-semibold decoration underline underline-offset-4 decoration-3 inline"
                  >
                    Discord <i className="fas fa-arrow-up rotate-45"></i>
                  </a>
                  {"  "}
                  and looking at the resources channel, you can see a {"    "}
                  <a
                    href="https://docs.google.com/spreadsheets/d/1j_LK_1VGpp5ze8Arpm92Ydofv1EeV8OQGTbGoaEW_qA/edit?gid=1955226837#gid=1955226837"
                    target="_blank"
                    className="text-emerald-600 font-semibold decoration underline underline-offset-4 decoration-3 inline"
                  >
                    Google Sheet <i className="fas fa-arrow-up rotate-45"></i>
                  </a>
                  {"  "}
                  that has a list of interested applicants (and their contact
                  information). You can use this to form a team. You can use
                  this {"    "}
                  <a
                    href="https://forms.gle/Wsx3Uwg72sxRLsCC8"
                    target="_blank"
                    className="text-purple-600 font-semibold decoration underline underline-offset-4 decoration-3 inline"
                  >
                    Google Form <i className="fas fa-arrow-up rotate-45"></i>
                  </a>
                  {"  "} to submit your information to this sheet.
                </>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            className="text-white w-3/5 mx-auto accItems"
            type="single"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>What Exactly Is Micromouse?</AccordionTrigger>
              <AccordionContent>
                <>
                  Micromouse is an engineering competition where small, robotic
                  mice{" "}
                  <a
                    href="https://drive.google.com/drive/folders/13Gqyx88dv3vA7_w2pK9YYdSOxhkDC985?usp=drive_link"
                    target="_blank"
                    className="text-emerald-600 font-semibold decoration underline underline-offset-4 decoration-3 inline"
                  >
                    (to see an image of a sample maze, mouse, and competition
                    that is typical for a micromouse competition click this
                    link)
                    <i className="fas fa-arrow-up rotate-45"></i>
                  </a>{" "}
                  are programmed to autonomously complete a 10 foot by 10 foot
                  maze. This micromouse competition, along with MEC, is
                  sanctioned by {"  "}
                  <a
                    href="https://drive.google.com/drive/folders/13Gqyx88dv3vA7_w2pK9YYdSOxhkDC985?usp=drive_link"
                    target="_blank"
                    className="text-gray-400 font-semibold decoration underline underline-offset-4 decoration-3 inline"
                  >
                    IEEE <i className="fas fa-arrow-up rotate-45"></i>
                  </a>{" "}
                  .
                </>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            className="text-white w-3/5 mx-auto accItems"
            type="single"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>I'm in College, Can I Come?</AccordionTrigger>
              <AccordionContent>
                <>
                  Unfortunately, this competition is available exclusively to
                  6-12th grade students. However, {"  "}
                  <a
                    href="https://robotics.pages.tcnj.edu/"
                    target="_blank"
                    className="text-[#8b97d9] font-semibold decoration underline underline-offset-4 decoration-3 inline"
                  >
                    the TCNJ website{" "}
                    <i className="fas fa-arrow-up rotate-45"></i>
                  </a>{" "}
                  has a list of plenty of robotics competitions that are open to
                  college students. These competitions are in New Jersey.
                </>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            className="text-white w-3/5 mx-auto accItems"
            type="single"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How Long Will It Take to Build?
              </AccordionTrigger>
              <AccordionContent className="">
                <>
                  If this is your first time doing a STEM-intensive activity
                  with a team, it may take 3-5 hours <b>per week</b> of solid
                  work with a team. This may take about <b>9 weeks</b> depending
                  on your productivity. These weeks will be spent
                  troubleshooting, writing code, and tenaciously following the
                  engineering design process.
                </>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            className="text-white w-3/5 mx-auto accItems"
            type="single"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How Much Does it Take to Build a Mouse?
              </AccordionTrigger>
              <AccordionContent>
                <>
                  It may cost{" "}
                  <b className="text-emerald-500 decoration underline underline-offset-4">
                    $100-$150
                  </b>{" "}
                  to make a Micromouse. Here are all the items necessary to make
                  one:
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
                    className="text-orange-600 font-semibold decoration underline underline-offset-4 decoration-3 inline"
                  >
                    this website <i className="fas fa-arrow-up rotate-45"></i>
                  </a>
                  . If you need any other technical information, you can reach
                  out to the staff on the {"  "}
                  <a
                    href="https://discord.gg/AjcAVctz"
                    target="_blank"
                    className="text-indigo-600 font-semibold decoration underline underline-offset-4 decoration-3 inline"
                  >
                    Discord Server <i className="fas fa-arrow-up rotate-45"></i>
                  </a>{" "}
                  , but the best way is to use the internet to get what you
                  need.
                </>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            className="text-white w-3/5 mx-auto accItems"
            type="single"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>What Does It Cost to Enter?</AccordionTrigger>
              <AccordionContent>
                <>
                  Right now, the price is{" "}
                  <b className="text-emerald-600">$50 per person.</b> However,
                  this price has the potential to go up to{" "}
                  <b className="text-emerald-600">$70 per person.</b> Register
                  now to get the best deal possible!
                </>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
