const Projects = ({ project, tech, source, git, img }) => {
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
    let elements = document.getElementById("tech");
    if (isElementInViewport(elements)) {
      elements.classList.add("fade-in-down");
    } else {
      elements.classList.remove("fade-in-down");
    }
  }

  window.addEventListener("scroll", onScroll);

  const isSmall = window.innerWidth < 1000;

  return (
    <div className="flex lg:flex-row flex-col">
      <div className="mr-3 ml-3 lg:mr-20">
        {!img ? (
          "...Loading"
        ) : (
          <img
            alt="project"
            id="tipster"
            className="mb-10 rounded-md opacity-80 lg:opacity-60 hover:opacity-90"
            src={img}
          ></img>
        )}
      </div>
      <div
        className={isSmall ? "flex flex-col justify-center items-center" : ""}
      >
        <p className="lg:text-left text-center mb-10 text-slate-400 leading-10 lg:leading-8  ml-4 lg:mr-0 w-80">
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
  );
};

export default Projects;
