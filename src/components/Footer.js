import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  
  return (
    <div className=" footer flex items-center justify-center mt-60 lg:mt-80">
      <p className="text-slate-400 text-sm ">
        Designed and Built by Jimmy Vallejo
      </p>
      <a className="cursor-pointer" href="https://github.com/jimmyvallejo">
        <img
          alt="github"
          className="w-5 ml-2 mb-1"
          src={process.env.PUBLIC_URL + "/ghgrey.png"}
        ></img>
      </a>
      <a
        className="cursor-pointer"
        href="https://www.linkedin.com/in/jimmyvallejo/"
      >
        <img
          alt="linkedin"
          className="w-6 ml-0.5 mb-1"
          src={process.env.PUBLIC_URL + "/li.png"}
        ></img>
      </a>

      <div
        className="flex-col items-center cursor-pointer"
        id="top"
        onClick={() => scroll.scrollToTop({ smooth: true, duration: 500 })}
      >
        <img
          alt="top"
          className="w-10 cursor-pointer opacity-85"
          src={process.env.PUBLIC_URL + "/top.png"}
          onClick={() => scroll.scrollToTop({ smooth: true, duration: 500 })}
        ></img>
      </div>
    </div>
  );
};

export default Footer;
