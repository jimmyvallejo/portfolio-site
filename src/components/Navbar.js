import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState("none");

  const [navHr, setNavHr] = useState(null);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 0 && currentScrollPos < window.innerHeight) {
      setScrollDirection("up");
    } else if (currentScrollPos > window.innerHeight) {
      setScrollDirection("down");
    } else {
      setScrollDirection("none");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const isWide = window.innerWidth > 1000;

  return (
    <nav id="nav"
      className={`flex justify-between pt-6 fixed top-0 left-0 w-full z-10 h-17 ${
        scrollDirection === "up" ? "up" : ""
      } ${scrollDirection === "down" ? "down" : ""}`}
    >
      <h1 className="font-mono lg:text-xl ml-8"> {"[Jimmy, Vallejo]"}</h1>
      <div className="text-sm flex lg:mr-5 lg:items-baseline mt-3 lg:mt-0">
        {navHr === "about" ? (
          <div className="flex flex-col items-center mb-10 ">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="about"
              onClick={() => setNavHr("about")}
              className="mx-4 hover:text-green-300 cursor-pointer"
            >
              {isWide && "01."} About
            </Link>
            <hr
              className={`navhr border-slate-300 w-14 mt-1 ml-1 lg:ml-7 ${
                navHr === "about" ? "fade-in-left" : ""
              }`}
            />
          </div>
        ) : (
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="about"
            onClick={() => setNavHr("about")}
            className="mx-4 hover:text-green-300 cursor-pointer"
          >
            {isWide && "01."} About
          </Link>
        )}

        {navHr === "projects" ? (
          <div className="flex flex-col items-center mb-10 ">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setNavHr("projects")}
              to="projects"
              className="mx-4 hover:text-green-300 cursor-pointer"
            >
              {isWide && "02."} Projects
            </Link>
            <hr
              className={`navhr border-slate-300 w-14 mt-1 lg:ml-8 ${
                navHr === "projects" ? "fade-in-left-nav" : ""
              }`}
            />
          </div>
        ) : (
          <Link
            onClick={() => setNavHr("projects")}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="projects"
            className="mx-4 hover:text-green-300 cursor-pointer"
          >
            {isWide && "02."} Projects
          </Link>
        )}

        {navHr === "contact" ? (
          <div className="flex flex-col items-center mb-10 ">
            <Link
              onClick={() => setNavHr("contact")}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="contact"
              className="mx-4 hover:text-green-300 cursor-pointer"
            >
              {isWide && "03."} Contact
            </Link>
            <hr
              className={`navhr border-slate-300 w-14 mt-1 lg:ml-8 ${
                navHr === "contact" ? "fade-in-left-nav" : ""
              }`}
            />
          </div>
        ) : (
          <Link
            onClick={() => setNavHr("contact")}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="contact"
            className="mx-4 hover:text-green-300 cursor-pointer"
          >
            {isWide && "03."} Contact
          </Link>
        )}
        {isWide && (
          <a
            href="https://drive.google.com/file/d/1F3SR7_SFL2Dxgxa2-pNdMsWB7A9PyYj6/view?usp=share_link"
            className="mx-4 hover:text-green-300 cursor-pointer"
          >
            Resume
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
