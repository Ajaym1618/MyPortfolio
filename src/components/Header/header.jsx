import "../Header/header.css";
import { useState, useEffect } from "react";
import resumee from "../../assets/Ajay.M__RESUME.pdf";

function Header() {
  const [orNot, setOrNot] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenu = () => {
    setOrNot(!orNot);
  };

  const downloadPDF = (e) => {
    e.preventDefault();
    const pdfPath = resumee;
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Check if the user has scrolled to the top of the page
      const isAtTop = currentScrollPos === 0;

      if (isAtTop || prevScrollPos > currentScrollPos) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`w-[100%] h-[15vh] flex justify-between items-center px-[50px] border-b-2 bg-[#ffffff] fixed top-0 z-50 transition-transform duration-800 ease-in-out ${isScrolled || orNot ? 'hidden' : 'block'}`}>
        <div className="logo">
          <h1 className="text-[#008bc6] text-3xl font-semibold">MyFolio</h1>
        </div>
        <nav className="nav">
          <ul>
            <li className="inline-block ">
              <a href="#" className="mr-[60px] text-[18px] font-bold text-[#008bc6] hover:text-black">
                Home
              </a>
            </li>
            <li className="inline-block ">
              <a href="#" className="mr-[60px] text-[18px] font-bold text-[#008bc6] hover:text-black">
                About
              </a>
            </li>
            <li className="inline-block hover:text-black">
              <a href="#" className="mr-[60px] text-[18px] font-bold text-[#008bc6] hover:hover:text-black">
                Contact
              </a>
            </li>
            <li className="inline-block ">
              <a
                href="#"
                className="mr-[60px] text-[18px] font-bold border-2 text-[#008bc6] border-[#008bc6] p-[10px] rounded-[5px] hover:border-black hover:text-black "
                onClick={downloadPDF}
              >
                Download CV
              </a>
            </li>
          </ul>
        </nav>
        <i className="fa-solid fa-bars text-[30px] text-[#008bc6] hidden menuBar" onClick={handleMenu}></i>
      </div>
      {orNot === true ? (
        <div className={`w-[300px] h-[100vh] right-0 bg-[#008bc6] text-xl  p-[10px] z-50 fixed ${orNot ? 'fade-in' : 'fade-out'} border-2 hidden sidebar `}>
          <ul className="flex flex-col justify-center items-center relative mt-[10px] ">
            <li className="p-[30px]">
              <a href="#" className="text-black font-semibold font-[20px]">
                Home
              </a>
            </li>
            <li className="p-[30px]">
              <a href="#" className="text-black font-semibold font-[20px]">
                About
              </a>
            </li>
            <li className="p-[30px]">
              <a href="#" className="text-black font-semibold font-[20px]">
                Contact
              </a>
            </li>
            <li className="p-[30px]">
              <a href="#" className="text-black font-semibold font-[20px]" onClick={downloadPDF}>
                Download CV
              </a>
            </li>
          </ul>
          <span className="text-[20px] p-[20px] absolute top-0 right-0 text-black" onClick={handleMenu}>
            <i className="fa-solid fa-xmark"></i>
          </span>
        </div>
      ) : null}
    </>
  );
}

export default Header;
