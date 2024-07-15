"use client"
import {
  useState,
  useEffect
} from "react"

import "@fortawesome/fontawesome-free/css/all.min.css";
type NavbarPropsType = {
  aboutCol?: string;
  faqCol?: string;
  children?: any;
};
type QuestionPropsType = {
  text?: string;
  answer?: string;
};
export const Question = (props: QuestionPropsType) => {
  const [but, setBut] = useState([`transition duration-[500ms] fas fa-arrow-down`, `hidden`]);
  const iconStyle = `float-right text-black inline ${but[0]}`
  const questionStyle = `font-semibold border-b-[1px] border-silver w-[40%] ml-[20%] mt-[2%] p-4 mb-[2%]`
  const answerStyle = `font-normal ${but[1]} mt-[5%]`
  return (

    <>
      <div>
        <div className = {questionStyle}>{props.text} <i className={iconStyle}
        onClick = {() => {
          if(but[0] === 'transition duration-[500ms] fas fa-arrow-down' || but[0] === 'fas fa-arrow-down') {
          setBut([`transition duration-[500ms] rotate-180 fas fa-arrow-down`, `transition duration-[500ms] block`])
          } else {
          setBut([`transition duration-[500ms] fas fa-arrow-down`, `hidden`])

          }
        }}></i><p className = {answerStyle}>{props.answer}</p></div>
        
        
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
          src="https://media.discordapp.net/attachments/834855883623235605/1262206388365693061/mecweb.png?ex=6695c0cd&is=66946f4d&hm=ec1aa4a9fe441b42ce409d1711771ff7e018fbdaa94a60e2ed32eeb039707e9b&=&format=webp&quality=lossless&width=1359&height=770"
          className="w-[15%] ml-[42.5%]"
          alt="MecIcon"
        />
        <p>
          <img
            src="https://media.discordapp.net/attachments/834855883623235605/1262213374377332828/image.png?ex=6695c74f&is=669475cf&hm=95b1556ca8e5931b5ef737ae9795c040bf534a6c74b7d3e5182f7e78c27d7fd1&=&format=webp&quality=lossless&width=814&height=519"
            className="h-[30px] inline ml-[44.8%]"
            alt="Join us on youtube "
          />
          <img
            src="https://media.discordapp.net/attachments/834855883623235605/1262213223755677746/image.png?ex=6695c72b&is=669475ab&hm=1b314ac20ba86db9d8c548ca1379b138769759748ed4659916badfb54e0e00b8&=&format=webp&quality=lossless&width=633&height=554"
            className="h-[30px] inline"
            alt="Join us on youtube "
          />
          <img
            src="https://media.discordapp.net/attachments/834855883623235605/1262213158622330952/image.png?ex=6695c71b&is=6694759b&hm=59fad40b8a8fb3bcafd8513c78f251f16e1a9daf2034bedfa75a5d83f3acae2f&=&format=webp&quality=lossless&width=655&height=506"
            className="h-[30px] inline"
            alt="Join us on youtube "
          />
          <img
            src="https://media.discordapp.net/attachments/834855883623235605/1262213097230434375/image.png?ex=6695c70d&is=6694758d&hm=6744f8ba2d91f3511d7e6c5d9a8d8904ebe4a99441d6758dfb75f108dfe559df&=&format=webp&quality=lossless&width=642&height=536"
            className="h-[30px] inline"
            alt="Join us on youtube "
          />
        </p>
      </footer>
    </>
  );
};

export const Navbar = (props: NavbarPropsType) => {
  const rulesStyle = `opacity-100 block font-['Outfit'] ml-[20px] py-2 px-4 rounded transition duration-[500ms] hover:text-lightBlue md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700`;
  const faqStyle = `opacity-100 block font-['Outfit'] ml-[20px] py-2 px-4 ${props.faqCol} rounded transition duration-[500ms] hover:text-lightBlue md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700`;
  const aboutUsStyle = `opacity-100 block font-['Outfit'] ml-[20px] py-2 px-4 ${props.aboutCol} rounded transition duration-[500ms] hover:text-lightBlue md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700`;
  return (
    <>
      <nav className="bg-white border-gray-200 fixed w-full opacity-80 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="http://localhost:3000">
            <img
              src="https://media.discordapp.net/attachments/834855883623235605/1262149280454541312/wEqE3sbksPlmgAAAABJRU5ErkJggg.png?ex=66958b9e&is=66943a1e&hm=48d29252482380999fa71737f1076cc4bdec3e7ad5ca5c5be8c2ffb9c05f4c26&=&format=webp&quality=lossless&width=1210&height=693"
              className="h-16 opacity-100"
              alt="MEC Logo"
            />
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <span className="sr-only">Register</span>
            </button>
            <div className="relative ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>

              <a
                href="https://www.remove.bg/upload"
                className="px-5 opacity-100 py-1 text-[23px] rounded-full  bg-lightBlue dark:text-black font-bold transition duration-[1000ms] hover:text-white"
              >
                Register
              </a>
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <ul className="flex font-['Outfit'] flex-col p-4  md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-[23px] md:bg-white ">
              <li>
                <a href="/about" className={aboutUsStyle} aria-current="page">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://attend.ieee.org/r2sac-2020/wp-content/uploads/sites/175/2020/01/MicroMouse_Rules_2020.pdf"
                  className={rulesStyle}
                  target="_blank"
                >
                  Rules
                </a>
              </li>
              <li>
                <a href="./faq" className={faqStyle}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="h-[100px]"></div>
    </>
  );
};
