import { useState, useEffect } from "react";
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
import "./navbar.css";
const NavBar: React.FC = () => {
  const [width, setWidth] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = `
    fixed top-0 left-0 right-0 z-50
    p-4 flex items-center justify-between w-full
    backdrop-blur-md bg-transparent
    ${scrolled ? "shadow-lg" : ""}
  `.trim();

  return width > 950 ? (
    <div className={navbarClasses}>
      {/* Left Side (Logo) */}
      <div>
        <a href="/">
          <img
            src="/whiteMecLogo.webp"
            alt="Logo"
            width="100"
            className="inline hover:scale-110 transition-all duration-1000 ease-in-out"
          />
        </a>
      </div>

      {/* Middle (Links aligned to the right) */}
      <div className="flex justify-end space-x-4 flex-1">
        <a href="/meet">
          <h3 className="navHeaders hover-effect mr-8">Judges</h3>
        </a>
        <a href="/announcements">
          <h3 className="navHeaders hover-effect mr-8">Announcements</h3>
        </a>
        <a
          href="https://drive.google.com/file/d/1CtmNMuE4HtUcB-xBE9M29b7bxAinYx3g/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="navHeaders hover-effect mr-8">Rules</h3>
        </a>
        <a href="/resources">
          <h3 className="navHeaders hover-effect mr-8">Resources</h3>
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
  ) : (
    <div className={navbarClasses}>
      {/* Left Side (Logo with Menu Trigger) */}
      <div className="flex items-center">
        <AlertDialog>
          <AlertDialogTrigger>
            <AlignJustify className="text-white inline mr-4" />
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-transparent backdrop-blur-md text-white w-5/6">
            <AlertDialogHeader>
              <AlertDialogTitle>Where Do You Wanna Go?</AlertDialogTitle>

              <a
                className="text-center w-4/5 mx-auto bg-slate-900/80 rounded-md p-4 block my-2"
                href="/meet"
              >
                Judges
              </a>
              <a
                className="text-center w-4/5 mx-auto bg-slate-900/80 rounded-md p-4 block my-2"
                href="/announcements"
              >
                Announcements
              </a>
              <a
                className="text-center w-4/5 mx-auto bg-slate-900/80 rounded-md p-4 block my-2"
                href="https://drive.google.com/file/d/1CtmNMuE4HtUcB-xBE9M29b7bxAinYx3g/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rules
              </a>
              <a
                className="text-center w-4/5 mx-auto bg-slate-900/80 rounded-md p-4 block my-2"
                href="/resources"
              >
                Resources
              </a>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction className="bg-white w-4/5 mx-auto text-black">
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
  );
};

export default NavBar;
