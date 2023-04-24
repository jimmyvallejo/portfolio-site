/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import Projects from "./Projects";
import { useState } from "react";

const Work = () => {
  const p1Name = "Tipster";
  // const p2Name = "Lairbnb";
  const p3Name = "Breakout";
  const p4Name = "Thinkbot"

  const p1 = `Full-stack app using React, Express, and MongoDB. 
  It's a mix of Twitter, Craigslist, and Yelp, with weather, Stripe, and 
  Google Maps API for payments and location features. Share information about local businesses, traffic, 
  or entertainment, post classified ads, or connect with others.`;

  // const p2 = `Lairbnb is a full-stack web app for supervillains 
  // built with Express, MongoDB, JavaScript, and Handlebars.
  //  It is like Airbnb, but for evil lairs, with advanced 
  //  search filters, security features, and payment processing.`;

  const p3 = `Breakout, a classic arcade game remade in JavaScript 
  canvas with clean and reusable code using class-based 
  programming. Experience an engaging and challenging gameplay 
  loop with advanced collision detection and ball physics.`;

  const p4 = `AI tutor created for the 2023 Emerge Americas hackathon. 
  Students get personalized responses from the AI based on subject and age. 
  Teachers get access to dynamic student data.`;

  const p1Tech = "React | Express | MongoDB | Node.js";
  // const p2Tech = "HandleBars | Express | MongoDB | Node.js";
  const p3Tech = "JavaScript | Canvas | HTML | CSS";
  const p4Tech = "React | Express | MongoDB | OpenAI" ;

  const p1Img = process.env.PUBLIC_URL + "tipster.png";
  // const p2Img = process.env.PUBLIC_URL + "lairbnb1.png";
  const p3Img = process.env.PUBLIC_URL + "brick.png";
  const p4Img = process.env.PUBLIC_URL + "fourth.png";

  const p1Source = "https://tipster-app.netlify.app/";
  // const p2Source = "https://lairbnb.fly.dev/";
  const p3Source = "https://github.com/jimmyvallejo/Breakout-Game-2D";
  const p4Source = "https://thinkbot.netlify.app/";

  const p1Git = "https://github.com/jimmyvallejo/tipster-front-end";
  // const p2Git = "https://github.com/jimmyvallejo/Lair-Bnb-Project";
  const p3Git = "https://jimmyvallejo.github.io/Breakout-Game-2D/";
  const p4Git = "https://github.com/jimmyvallejo/ThinkBot-Frontend";

  const [img, setImg] = useState(p1Img);
  const [text, setText] = useState(p1);
  const [tech, setTech] = useState(p1Tech);
  const [source, setSource] = useState(p1Source);
  const [git, setGit] = useState(p1Git);
  const [hr1, setHr1] = useState(true);
  const [hr2, setHr2] = useState(false);
  const [hr3, setHr3] = useState(false);

  const change1 = () => {
    setText(p1);
    setImg(p1Img);
    setTech("");
    setTech(p1Tech);
    setSource(p1Source);
    setGit(p1Git);
    setHr2(false);
    setHr3(false);
    setHr1(true);
  };

  const change2 = () => {
    setText(p4);
    setImg(p4Img);
    setTech("");
    setTech(p4Tech);
    setSource(p4Source);
    setGit(p4Git);
    setHr3(false);
    setHr1(false);
    setHr2(true);
  };

  const change3 = () => {
    setText(p3);
    setImg(p3Img);
    setTech("");
    setTech(p3Tech);
    setSource(p3Source);
    setGit(p3Git);
    setHr1(false);
    setHr2(false);
    setHr3(true);
  };

  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center mt-40 pt-10"
    >
      <div className="flex items-center mb-10">
        <hr className="border-slate-300 w-20 lg:w-40 mx-4" />
        <h1 className="text-2xl text-slate-300">Projects</h1>
        <hr className="border-slate-300 w-20 lg:w-40 mx-4" />
      </div>
      <div className=" mb-10 lg:mb-20 flex flex-row lg:pl-2">
        {hr1 ? (
          <div className="flex flex-col justify-center">
            <a
              onClick={change1}
              className="mr-10 text-xl text-blue-200 hover:text-blue-400 cursor-pointer"
            >
              {p1Name}
            </a>
            <hr
              className={`projecthr border-slate-300 w-16 ml-2.5 mt-1.5 ${
                hr1 ? "fade-in-left" : ""
              }`}
            />
          </div>
        ) : (
          <a
            onClick={change1}
            className="mr-10 text-xl text-blue-200 hover:text-blue-400 cursor-pointer"
          >
            {p1Name}
          </a>
        )}
        {hr2 ? (
          <div className="flex flex-col justify-center">
            <a
              onClick={() => change2()}
              className="mr-10 text-xl text-orange-300 hover:text-orange-400 cursor-pointer"
            >
              {p4Name}
            </a>
            <hr
              className={`projecthr border-slate-300 w-16 ml-3 mt-1.5  ${
                hr2 ? "fade-in-left" : ""
              }`}
            />
          </div>
        ) : (
          <a
            onClick={() => change2()}
            className="mr-10 text-xl text-orange-300 hover:text-orange-400 cursor-pointer"
          >
            {p4Name}
          </a>
        )}
        {hr3 ? (
          <div className="flex flex-col justify-center">
            <a
              onClick={() => change3()}
              className={`text-xl text-purple-300 cursor-pointer hover:text-purple-500`}
            >
              {p3Name}
            </a>
            <hr
              className={`lasthr border-slate-300 w-16 ml-5 lg:ml-5 mt-1.5 ${
                hr3 ? "fade-in-left" : ""
              }`}
            />
          </div>
        ) : (
          <a
            onClick={() => change3()}
            className="text-xl text-purple-300 cursor-pointer hover:text-purple-400"
          >
            {p3Name}
          </a>
        )}
      </div>
      <Projects
        project={text}
        tech={tech}
        img={img}
        source={source}
        git={git}
        hr1={hr1}
        hr2={hr2}
        hr3={hr3}
      />
    </div>
  );
};

export default Work;
