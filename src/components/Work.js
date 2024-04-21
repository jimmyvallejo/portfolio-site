/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import Projects from "./Projects";
import { useState } from "react";
import {
  p1Name,
  p3Name,
  p4Name,
  p5Name,
  p1,
  p3,
  p4,
  p5,
  p1Tech,
  p3Tech,
  p4Tech,
  p1Img,
  p3Img,
  p4Img,
  p5Img,
  p1Source,
  p3Source,
  p4Source,
  p5Source,
  p1Git,
  p3Git,
  p4Git,
  p5Git,
} from "../constants/personal_projects";

const Work = () => {
  const [img, setImg] = useState(p5Img);
  const [text, setText] = useState(p5);
  const [tech, setTech] = useState(p4Tech);
  const [source, setSource] = useState(p5Source);
  const [git, setGit] = useState(p5Git);
  const [hr1, setHr1] = useState(false);
  const [hr2, setHr2] = useState(false);
  const [hr3, setHr3] = useState(false);
  const [hr4, setHr4] = useState(true);

  const change1 = () => {
    setText(p1);
    setImg(p1Img);
    setTech("");
    setTech(p1Tech);
    setSource(p1Source);
    setGit(p1Git);
    setHr2(false);
    setHr3(false);
    setHr4(false);
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
    setHr4(false);
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
    setHr4(false);
    setHr3(true);
  };

  const change4 = () => {
    setText(p5);
    setImg(p5Img);
    setTech("");
    setTech(p4Tech);
    setSource(p5Source);
    setGit(p5Git);
    setHr1(false);
    setHr2(false);
    setHr3(false);
    setHr4(true);
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
        {hr3 ? (
          <div className="flex flex-col justify-center">
            <a
              onClick={() => change3()}
              className={`lg:text-xl pr-0 mr-7 lg:pr-0 text-purple-300 cursor-pointer hover:text-purple-500`}
            >
              {p3Name}
            </a>
            <hr
              className={`lasthr border-slate-300 w-16 ml-2 lg:ml-3.5 mt-1.5 ${
                hr3 ? "fade-in-left" : ""
              }`}
            />
          </div>
        ) : (
          <a
            onClick={() => change3()}
            className="lg:text-xl mr-7 lg:pr-0 text-purple-300 cursor-pointer hover:text-purple-400"
          >
            {p3Name}
          </a>
        )}
        {hr4 ? (
          <div className="flex flex-col justify-center">
            <a
              onClick={change4}
              className="lg:mr-10 pr-5 lg:pr-0 lg:text-xl text-red-300 hover:text-red-400 cursor-pointer"
            >
              {p5Name}
            </a>
            <hr
              className={`projecthr border-slate-300 w-16 lg:ml-1.5 mt-1.5 ${
                hr4 ? "fade-in-left" : ""
              }`}
            />
          </div>
        ) : (
          <a
            onClick={change4}
            className="lg:mr-10 pr-5 lg:pr-0 lg:text-xl text-red-300 hover:text-red-400 cursor-pointer"
          >
            {p5Name}
          </a>
        )}
        {hr1 ? (
          <div className="flex flex-col justify-center">
            <a
              onClick={change1}
              className="lg:mr-10  pr-5 lg:pr-0 lg:text-xl text-blue-200 hover:text-blue-400 cursor-pointer"
            >
              {p1Name}
            </a>
            <hr
              className={`projecthr border-slate-300 w-16 lg:ml-2.5 ml-1 mt-1.5 ${
                hr1 ? "fade-in-left" : ""
              }`}
            />
          </div>
        ) : (
          <a
            onClick={change1}
            className="lg:mr-10  pr-5 lg:pr-0 lg:text-xl text-blue-200 hover:text-blue-400 cursor-pointer"
          >
            {p1Name}
          </a>
        )}
        {hr2 ? (
          <div className="flex flex-col justify-center">
            <a
              onClick={() => change2()}
              className="lg:mr-10  pr-5 lg:pr-0 lg:text-xl text-orange-300 hover:text-orange-400 cursor-pointer"
            >
              {p4Name}
            </a>
            <hr
              className={`projecthr border-slate-300 w-16 lg:ml-3.5 ml-2 mt-1.5 = ${
                hr2 ? "fade-in-left" : ""
              }`}
            />
          </div>
        ) : (
          <a
            onClick={() => change2()}
            className="lg:mr-10  pr-5 lg:pr-0 lg:text-xl text-orange-300 hover:text-orange-400 cursor-pointer"
          >
            {p4Name}
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
