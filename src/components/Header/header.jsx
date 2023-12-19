import "../Header/header.css";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import resumee from "../../assets/Ajay.M__Resume.pdf";
import id from "../../assets/for-portfolio.png";

function Header() {
  const [orNot, setOrNot] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const handleMenu = () => {
    setOrNot(!orNot);
  };

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Check if the user has scrolled to the top of the page
      const isAtTop = currentScrollPos === 0;

      if (isAtTop || prevScrollPos > currentScrollPos) {
        setIsScrolled(false);
        setShowArrow(false);
      } else {
        setIsScrolled(true);
        if (currentScrollPos >= window.innerHeight) {
          // Check if scrolled at least 100vh
          setShowArrow(true);
        }
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`w-[100%] h-[15vh] bg-[#eef8fc] flex justify-between items-center px-[50px] shadow-lg shadow-[#c2ebfe] fixed top-0 z-50 transition-transform duration-800 ease-in-out  ${
          isScrolled ? "hidden" : "block"
        } `}
      >
        <div className="logo">
          <h1 className="text-[#008bc6] text-3xl font-semibold cursor-pointer">
            <Link
              to="Home"
              spy={true}
              smooth={true}
              offset={-150}
              duration={200}
            >
              MyFolio
            </Link>
          </h1>
        </div>
        <nav className={`nav ${orNot ? "hidden" : "block"}`}>
          <ul className=" flex justify-center items-center">
            <li className="inline-block ">
              <Link
                to="Home"
                spy={true}
                smooth={true}
                offset={-150}
                duration={200}
                className="mr-[60px] relative text-[18px] font-bold text-[#008bc6] cursor-pointer transition-all duration-1000 ease-in-out after:absolute after:top-5 after:left-0 after:content-[''] after:mt-1 after:w-[0%] after:rounded after:h-1 after:bg-[#008bc6] hover:text-black hover: rounded active:text-[red] hover:after:w-[100%] after: transition-all after:duration-500 after: ease-in-out"
              >
                Home
              </Link>
            </li>
            <li className="inline-block ">
              <Link
                to="About"
                spy={true}
                smooth={true}
                offset={-30}
                duration={200}
                className="mr-[60px] relative text-[18px] font-bold text-[#008bc6] hover:text-black cursor-pointer transition-all duration-1000 ease-in-out after:absolute after:top-5 after:left-0 after:content-[''] after:mt-1 after:w-[0%] after:rounded after:h-1 after:bg-[#008bc6] hover:text-black hover: rounded active:text-[red] hover:after:w-[100%] after: transition-all after:duration-500 after: ease-in-out"
              >
                About
              </Link>
            </li>
            <li className="inline-block ">
              <Link
                to="Project"
                spy={true}
                smooth={true}
                offset={-10}
                duration={200}
                className="mr-[60px] relative text-[18px] font-bold text-[#008bc6] hover:text-black cursor-pointer transition-all duration-1000 ease-in-out after:absolute after:top-5 after:left-0 after:content-[''] after:mt-1 after:w-[0%] after:rounded after:h-1 after:bg-[#008bc6] hover:text-black hover: rounded active:text-[red] hover:after:w-[100%] after: transition-all after:duration-500 after: ease-in-out"
              >
                Project
              </Link>
            </li>
            <li className="inline-block hover:text-black">
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="mr-[60px] relative text-[18px] font-bold text-[#008bc6] cursor-pointer hover:hover:text-blacktransition-all duration-1000 ease-in-out after:absolute after:top-5 after:left-0 after:content-[''] after:mt-1 after:w-[0%] after:rounded after:h-1 after:bg-[#008bc6] hover:text-black hover: rounded active:text-[red] hover:after:w-[100%] after: transition-all after:duration-500 after: ease-in-out"
              >
                Contact
              </Link>
            </li>
            <li className="inline-block ">
              <a
                href="#DownloadResume"
                className="mr-[40px] relative text-[18px] font-bold border-2 text-[#008bc6] border-[#008bc6] p-[10px] rounded-[5px] hover:text-black transition-all hover:border-black"
                download="Resume.pdf"
              >
                Download CV
              </a>
            </li>
            <li className="inline-block" title="GitHub">
              <a
                href="https://github.com/Ajaym1618"
                target="_blank"
                className="text-[#008bc6] text-[35px]  px-[10px] py-[6px] rounded-[5px] hover:text-black active:text-green-600"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </nav>
        <i
          className="fa-solid fa-bars text-[30px] text-[#008bc6] hidden menuBar "
          onClick={handleMenu}
        ></i>
      </div>
      {orNot === true ? (
        <div
          className={`w-[320px] h-full right-0  z-50 fixed ${
            orNot ? "fade-in" : "fade-out"
          } border-2 hidden sidebar `}
        >
          <div className="w-full flex flex-col items-center justify-center mt-4">
            <div className=" w-[100px] h-[100px] flex bg-[#4ac1eb] items-center justify-center rounded-[50px] overflow-hidden">
              <img src={id} className="w-[100px]" />
            </div>
            <h1 className="text-[18px] pt-1 font-semibold">Ajay.M</h1>
          </div>
          <ul className="flex flex-col gap-6  h-[60vh] relative mt-[30px]">
            <li className="pl-8 pb-4 pt-4 border-y-2 border-[#0000003c]">
              <Link
                to="Home"
                spy={true}
                smooth={true}
                offset={-150}
                duration={200}
                className="text-black font-semibold"
                onClick={handleMenu}
              >
                <i className="fa-solid fa-house pr-2"></i>Home
              </Link>
            </li>
            <li className="pl-8 pb-4 border-b-2 border-[#0000003c]">
              <Link
                to="About"
                spy={true}
                smooth={true}
                offset={-150}
                duration={200}
                className="text-black font-semibold"
                onClick={handleMenu}
              >
                <i className="fa-solid fa-question pr-2"></i>About
              </Link>
            </li>
            <li className="pl-8 pb-4 border-b-2 border-[#0000003c]">
              <Link
                to="Project"
                spy={true}
                smooth={true}
                offset={-150}
                duration={200}
                className="text-black font-semibold"
                onClick={handleMenu}
              >
                <i className="fa-solid fa-bars-progress pr-2"></i>Project
              </Link>
            </li>
            <li className="pl-8 pb-4 border-b-2 border-[#0000003c]">
              <a href="#" className="text-black font-semibold ">
                <i className="fa-solid fa-user pr-2"></i>Contact
              </a>
            </li>
            <li className="pl-8 pb-4 border-b-2 border-[#0000003c] ">
              <a
                href={resumee}
                className="text-black font-semibold "
                download="Resume.pdf"
              >
                <i className="fa-solid fa-download pr-2"></i>Download CV
              </a>
            </li>
            <li className="pl-8 pb-4 border-b-2 border-[#0000003c]">
              <a
                href="https://github.com/Ajaym1618"
                target="_blank"
                className="text-black font-semibold "
              >
                <i className="fa-brands fa-github text-xl pr-2"></i>Github
              </a>
            </li>
          </ul>
          <span
            className=" px-4 text-[20px] absolute top-0 right-0 text-black"
            onClick={handleMenu}
          >
            <i className="fa-solid fa-xmark"></i>
          </span>
        </div>
      ) : null}
      {showArrow && (
        <Link to="Home" spy={true} smooth={true} offset={-150} duration={200} title="top">
            <span className=" text-[18px] fixed right-4 bottom-6 z-50 text-white bg-[#008bc6]  shadow-md shadow-[1px_1px_38px_4px_rgba(0, 139, 198,1)] flex justify-center items-center w-8 h-8 rounded-3xl max-md:right-2 cursor-pointer animate-bounce">
            <i className="fa-solid fa-arrow-up text-[18px]"></i>
            </span>
        </Link>
      )}
    </>
  );
}

export default Header;
