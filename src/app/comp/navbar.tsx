import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./navbar.css";
import { AlignJustify } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
const NavBar: React.FC = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return width > 1050 ? (
    <>
      <div className="bg-black p-4 flex items-center justify-between w-full">
        {/* Left Side (Logo) */}
        <div>
          <a href="/">
            <img
              src="/whiteMecLogo.webp"
              alt="Logo"
              width="100"
              className="inline"
            />
          </a>
        </div>

        {/* Middle (Centered Links) */}
        <div className="flex space-x-4">
          <div>
            <a href="/meet">
              <h3 className="navHeaders hover-effect mr-8">Judges</h3>
            </a>
          </div>
          <div>
            <a href="/announcements">
              <h3 className="navHeaders hover-effect mr-8">Announcements</h3>
            </a>
          </div>
          <div>
            <a
              href="https://drive.google.com/file/d/1CtmNMuE4HtUcB-xBE9M29b7bxAinYx3g/view?usp=sharing"
              target="_blank"
            >
              <h3 className="navHeaders hover-effect mr-8">Rules</h3>
            </a>
          </div>
          <div>
            <a href="/resources">
              <h3 className="navHeaders hover-effect">Resources</h3>
            </a>
          </div>
        </div>

        {/* Right Side (Preregister Button) */}
        <div>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-2 text-lg font-medium text-white backdrop-blur-3xl">
              Preregister
            </span>
          </button>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="bg-black p-4 flex items-center justify-between">
        {/* Left Side (Logo) */}
        <div>
          <AlertDialog>
            <AlertDialogTrigger>
              {" "}
              <AlignJustify className="text-white inline" />
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-black text-white w-full">
              <AlertDialogHeader className="w-full">
                <AlertDialogTitle>Where Do You Wanna Go?</AlertDialogTitle>
                <a
                  className="text-center w-4/5 mx-auto bg-slate-900 rounded-md p-4"
                  href="/announcements"
                >
                  Announcements
                </a>
                <a
                  className="text-center w-4/5 mx-auto bg-slate-900 rounded-md p-4"
                  target="_blank"
                  href="https://drive.google.com/file/d/1CtmNMuE4HtUcB-xBE9M29b7bxAinYx3g/view?usp=sharing"
                >
                  Rules
                </a>
                <a
                  className="text-center w-4/5 mx-auto bg-slate-900 rounded-md p-4"
                  href="/resources"
                >
                  Resources
                </a>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction className="bg-white text-black">
                  Exit
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <a href="/">
            <img
              src="/whiteMecLogo.webp"
              alt="Logo"
              width="100"
              className="inline"
            />
          </a>
        </div>

        {/* Right Side (Preregister Button) */}
        <div>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-2 text-lg font-medium text-white backdrop-blur-3xl">
              Preregister
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
