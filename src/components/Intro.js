import { useEffect, useState } from "react";
import Typewriter from "./Typewriter";

const Intro = () => {
  const textRef = useState(null);
  const [animate, setAnimate] = useState(false);

  const text = `I'm a full-stack developer with a focus on building dynamic and
              scalable applications. My goal is to make
              intuitive solutions to real world problems through my design, 
              and my code. Currently employed at Cryptan Labs.`;

  const typewriterText = Typewriter(text, 30);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const isWide = window.innerWidth > 1000;

  return (
    <div className="w-full">
      <div
        ref={textRef}
        className={`intro flex m-auto justify-center items-center font-mono mt-40 lg:pb-14 ml-5 lg:ml-40 ${
          animate ? "fade-in-top" : ""
        }`}
      >
        <div className="flex flex-col pr-30">
          <h1 className="text-green-200 ml-1.5 my-3">Hi, my name is</h1>

          <h1 className="text-6xl text-slate-100 mb-2">Jimmy.</h1>
          <h1 className="text-6xl text-slate-100 mb-4">Software Engineer</h1>
          <p
            className="text-slate-500 leading-7"
            dangerouslySetInnerHTML={{ __html: typewriterText }}
          ></p>
          <div>
            <a
              href="https://drive.google.com/file/d/14tPFY3WPFIi5XbtdMOHxblPLyP8LZAfd/view?usp=sharing"
              className="resume inline-block border-solid border-2 border-green-200 text-green-200 text-center mt-10 py-2 px-5 hover:bg-green-200 hover:bg-opacity-50 cursor-pointer transition-all duration-300 ease-in-out"
            >
              Resume
            </a>
          </div>
        </div>

        {isWide && (
          <div className="imgcontainer">
            <img
              id="me"
              src="https://cdn-icons-png.flaticon.com/512/1159/1159385.png"
              alt="Me"
              className="ml-40"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Intro;
