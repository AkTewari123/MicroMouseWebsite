"use client";
import { useState, useEffect } from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
type NavbarPropsType = {
  aboutCol?: any;
  faqCol?: any;
  children?: any;
};
type QuestionPropsType = {
  text?: any;
  answer?: any;
};
export const Question = (props: QuestionPropsType) => {
  const [but, setBut] = useState([
    `transition duration-[500ms] fas fa-arrow-down`,
    `hidden`,
  ]);
  const iconStyle = `float-right text-black inline ${but[0]}`;
  const questionStyle = `text-[1.5rem] font-['Outfit'] font-semibold border-b-[1px] border-silver w-[60%] questionScreen:w-full ml-[20%] questionScreen:ml-[0%] mt-[2%] p-4 mb-[2%]`;
  const answerStyle = `font-normal text-[1rem] ${but[1]} mt-[5%]`;
  return (
    <>
      <div className={questionStyle}>
        <p className="inline-block w-[80%]">{props.text} </p>
        <i
          className={iconStyle}
          onClick={() => {
            if (
              but[0] === "transition duration-[500ms] fas fa-arrow-down" ||
              but[0] === "fas fa-arrow-down"
            ) {
              setBut([
                `transition duration-[500ms] rotate-180 fas fa-arrow-down`,
                `transition-all duration-[500ms] block`,
              ]);
            } else {
              setBut([
                `transition duration-[500ms] fas fa-arrow-down`,
                `transition-all duration-[500ms] hidden`,
              ]);
            }
          }}
        ></i>
        <div className={answerStyle}>{props.answer}</div>
      </div>
    </>
  );
};
export const Footer = () => {
  return (
    <>
      <script src="https://unpkg.com/browse/ionicons@4.2.4/dist/fonts/"></script>
      <footer className="bg-blackGood h-[300px]">
        <p className="text-white text-[15px] w-[60%] px-5 pb-5 pt-8 ml-[20%] text-center border-silverBord border-b-[2px]">
          Contact us with any questions you have! We hope you have a good day
          and would like to see you at the competition!
        </p>
        <img
          src="https://media.discordapp.net/attachments/834855883623235605/1262206388365693061/mecweb.png?ex=66990c8d&is=6697bb0d&hm=85bb70fb7a60ef1f2c9301df700c0de83d3b0c8ca0b06344ee775eacc7717c75&=&format=webp&quality=lossless&width=1359&height=770"
          className="w-[15%] macBookFin:w-[20%] ml-[42.5%] macBookTwo:w-[20%] mackBookTwo:ml-[40%]"
          alt="MecIcon"
        />
        <p>
          <img
            src="https://media.discordapp.net/attachments/834855883623235605/1262213374377332828/image.png?ex=6699130f&is=6697c18f&hm=7563438498972aa88f2710f4bfb90e4cb1f60005c7eae9a5aa4e4abde37c9a36&=&format=webp&quality=lossless&width=814&height=519"
            className="z-10 h-[4%] macBookFin:h-[3%] macBookFin:ml-[39%] macBook:h-[3.5%] macBookTwo:h-[5%] macBookTwo:ml-[40%] absolute inline ml-[44%] "
            alt="Join us on youtube "
          />
          <img
            src="https://media.discordapp.net/attachments/834855883623235605/1262213223755677746/image.png?ex=669912eb&is=6697c16b&hm=db74dd97976b1860b9cb30e9ff6808146300e7c6b911d141840ea62f9a2fa31d&=&format=webp&quality=lossless&width=633&height=554"
            className="h-[4%] macBookFin:h-[3%] macBookFin:ml-[47%] macBook:h-[3.5%] macBookTwo:h-[5%] macBookTwo:ml-[47%] ml-[47.25%] absolute inline"
            alt="Join us on instagram "
          />
          <a href="https://discord.gg/AjcAVctz" target="_blank">
            <img
              src="https://media.discordapp.net/attachments/834855883623235605/1262213158622330952/image.png?ex=669912db&is=6697c15b&hm=90da63b1e555dc423bf7bccd1f983326344c024ac825ea3fd5ddf2e4b64a6197&=&format=webp&quality=lossless&width=655&height=506"
              className="h-[4%] macBookFin:h-[3%] macBookFin:ml-[53%] macBook:h-[3.5%] macBookTwo:h-[5%] ml-[50%] macBookTwo:ml-[53%] absolute inline"
              alt="Join us on discord "
            />
          </a>
          <img
            src="https://media.discordapp.net/attachments/834855883623235605/1262213097230434375/image.png?ex=669912cd&is=6697c14d&hm=597228793cc3eb4c847e1d2405654f40eaec5764721bc1cbf5fda32740f0746c&=&format=webp&quality=lossless&width=642&height=536"
            className="h-[4%] macBookFin:h-[3%] macBookFin:ml-[60%] macBook:h-[3.5%] macBookTwo:h-[5%] ml-[53.5%] macBookTwo:ml-[60%] absolute inline"
            alt="Join us on twitter "
          />
        </p>
      </footer>
    </>
  );
};

export const Navbar = (props: NavbarPropsType) => {
  const [ulStyle, setDropStyle] = useState(`hidden`);
  const faqStyle = `block py-2 px-3 ${props.faqCol} rounded mt-2 hover:bg-gray-100 md:hover:bg-transparent transition duration-[500ms] md:hover:text-lightBlue md:p-0   dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700`;
  const aboutStyle = `block py-2 px-3 ${props.aboutCol} rounded mt-2 hover:bg-gray-100 md:hover:bg-transparent transition duration-[500ms] md:hover:text-lightBlue md:p-0   dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700`;
  return (
    <>
      <nav className="bg-white font-['Outfit'] fixed w-full z-20 top-0 start-0 text-[23px] ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://media.discordapp.net/attachments/834855883623235605/1262149280454541312/wEqE3sbksPlmgAAAABJRU5ErkJggg.png?ex=6698d75e&is=669785de&hm=e1e5259101c841a44289009f36442d53d8d492e2fe3e06511f0af2fa7d409896&=&format=webp&quality=lossless&width=1823&height=1045"
              className="h-[70px]"
              alt="Mec Logo"
            />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd6NHgufAHAXpRwh9oC5GCiBpt3wNERa2NleFNJmTCrc2Ivqg/viewform" target="_blank">
              <button
                type="button"
                className="text-white bg-lightBlue text-[100%] transition-all duration-[700ms] hover:bg-discordPurp focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full px-6 py-1 text-center "
              >
                Register
              </button>
            </a>
            <p
              data-collapse-toggle="navbar-sticky"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden transition duration-[500ms] hover:bg-lightBlue focus:outline-none focus:ring-2 focus:ring-gray-200 hover:text-white text-black dark:focus:ring-blue-700"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => {
                ulStyle === `hidden`
                  ? setDropStyle(
                      `text-[20px] md:hidden mt-2 ml-[5%] w-[90%] float-left bg-white`
                    )
                  : setDropStyle(`hidden`);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </p>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a href="/about" className={aboutStyle} aria-current="page">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://attend.ieee.org/r2sac-2020/wp-content/uploads/sites/175/2020/01/MicroMouse_Rules_2020.pdf"
                  target="_blank"
                  className="block py-2 px-3 text-gray-900 rounded mt-2 hover:bg-gray-100 md:hover:bg-transparent transition duration-[500ms] md:hover:text-lightBlue md:p-0   dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Rules
                </a>
              </li>
              <li>
                <a href="/faq" className={faqStyle}>
                  Resources
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ul className={ulStyle}>
          <a href="/about">
            <li className="bg-greyGood py-4 pl-8 mb-4 rounded-full transition duration-[700ms] hover:bg-silverBord hover:text-white">
              About Us{" "}
              <i className="fas fa-arrow-up rotate-45 float-right mr-[50px]"></i>
            </li>
          </a>
          <a
            href="https://attend.ieee.org/r2sac-2020/wp-content/uploads/sites/175/2020/01/MicroMouse_Rules_2020.pdf"
            target="_blank"
          >
            <li className="bg-greyGood py-4 pl-8 mb-4 rounded-full transition duration-[700ms] hover:bg-silverBord hover:text-white">
              Rules{" "}
              <i className="fas fa-arrow-up rotate-45 float-right mr-[50px]"></i>
            </li>
          </a>

          <a href="/faq">
            <li className="bg-greyGood py-4 pl-8 mb-4 rounded-full transition duration-[700ms] hover:bg-silverBord hover:text-white">
              FAQ{" "}
              <i className="fas fa-arrow-up rotate-45 float-right mr-[50px]"></i>
            </li>
          </a>
        </ul>
      </nav>

      <div className="h-[100px]"></div>
    </>
  );
};
