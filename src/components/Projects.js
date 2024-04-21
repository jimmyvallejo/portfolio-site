import { useState } from "react";

const Projects = ({ project, tech, source, git, img }) => {
  const [expand, setExpand] = useState(null);

  function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  function onScroll() {
    if (!expand) {
      let elements = document.getElementById("tech");
      if (isElementInViewport(elements)) {
        elements.classList.add("fade-in-down");
      } else {
        elements.classList.remove("fade-in-down");
      }
    }
  }

  window.addEventListener("scroll", onScroll);

  const handleExpand = () => {
    window.removeEventListener("scroll", onScroll);
    setExpand(!expand);
  };

  const handleShrink = () => {
    window.addEventListener("scroll", onScroll);
    setExpand(!expand);
  };

  const isSmall = window.innerWidth < 1000;

  return (
    <div>
      {expand ? (
        <div className="">
          <img
            onClick={handleShrink}
            alt="project"
            id="expanded"
            className="mb-10 rounded-md opacity-80 lg:opacity-60 hover:opacity-80 cursor-pointer"
            src={img}
          ></img>
        </div>
      ) : (
        <div className="flex lg:flex-row flex-col">
          <div className="lg:mr-20">
            {git !== "https://jimmyvallejo.github.io/Breakout-Game-2D/" ? (
              !img ? (
                "...Loading"
              ) : (
                <img
                  onClick={isSmall ? null : handleExpand}
                  alt="project"
                  id="tipster"
                  className={`mb-10 rounded-md opacity-80 lg:opacity-60 hover:opacity-80 ${
                    !isSmall && "cursor-pointer"
                  }`}
                  src={img}
                ></img>
              )
            ) : (
              <iframe
                src={isSmall ? "https://jimmyvallejo.github.io/Brick-Breaker-Mobile/" : "https://jimmyvallejo.github.io/Breakout-Game-Small/#"}
                width={isSmall? "360" : "510"}
                height={isSmall? "180" : "320"}
                className="rounded-md border border-slate-500"
                title="Breakout"
              ></iframe>
            )}
          </div>
          <div
            className={
              isSmall ? "flex flex-col justify-center items-center" : ""
            }
          >
            <p className="lg:text-left text-center mb-10 text-slate-300 leading-10 lg:leading-8 lg:ml-4 lg:mr-0 w-80">
              {project}
            </p>
            <div className="flex justify-center mb-12 lg:mr-10">
              <a href={source}>
                <img
                  alt="website"
                  className="w-7 h-7 mr-5 bg-slate-200 cursor-pointer"
                  src="https://cdn-icons-png.flaticon.com/512/3110/3110884.png"
                ></img>
              </a>
              <a href={git}>
                <img
                  alt="code"
                  className="w-7 h-7 cursor-pointer"
                  src="https://cdn-icons-png.flaticon.com/512/2504/2504911.png"
                ></img>
              </a>
            </div>
            <p id="tech" className="text-center text-slate-200 mr-3 lg:mr-10">
              {tech}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
