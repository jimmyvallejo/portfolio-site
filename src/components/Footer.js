import { animateScroll as scroll } from "react-scroll";
import { useState, useEffect } from "react";

const Footer = () => {
  const [top, setTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.innerWidth > 1000) {
        if (window.pageYOffset > 100) {
          setTop(true);
        } else {
          setTop(false);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  return (
    <div className=" footer flex items-center justify-center mt-60 lg:mt-80">
      <p className="text-slate-400 text-sm ">
        Designed and Built by Jimmy Vallejo
      </p>
      <a className="cursor-pointer" href="https://github.com/jimmyvallejo">
        <img alt="github"
          className="w-6 ml-2"
          src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png"
        ></img>
      </a>
      <a
        className="cursor-pointer"
        href="https://www.linkedin.com/in/jimmyvallejo/"
      >
        <img alt="linkedin"
          className="w-6 ml-2"
          src="https://cdn-icons-png.flaticon.com/512/3536/3536569.png"
        ></img>
      </a>

      <div
        className={`${
          top ? "flex" : "hidden"
        } flex-col items-center cursor-pointer`}
        id="top"
        onClick={() => scroll.scrollToTop({ smooth: true, duration: 500 })}
      >
        <img alt="top"
          className="w-10 cursor-pointer opacity-70"
          src="https://cdn-icons-png.flaticon.com/512/3148/3148312.png"
          onClick={() => scroll.scrollToTop({ smooth: true, duration: 500 })}
        ></img>
        <span
          id="back-to-top"
          className="mx-4 cursor-pointer text-green-200 mt-2"
          onClick={() => scroll.scrollToTop({ smooth: true, duration: 500 })}
        >
          Back to top
        </span>
      </div>
    </div>
  );
};

export default Footer;




