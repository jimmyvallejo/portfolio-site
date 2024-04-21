const About = () => {
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
    let elements = document.querySelectorAll("li");
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      if (isElementInViewport(element)) {
        element.classList.add("fade-in-down");
      } else {
        element.classList.remove("fade-in-down");
      }
    }
  }

  window.addEventListener("scroll", onScroll);

  const isWide = window.innerWidth > 1000;

  return (
    <div className="flex flex-col items-center lg:ml-0 lg:mt-40">
      <div id="about" className="flex items-center mb-10 mt-60  ">
        <hr className="border-slate-300 w-20 lg:w-40 mx-4" />
        <h1 className="text-2xl text-slate-300">About {isWide && "Me"}</h1>
        <hr className="border-slate-300 w-20 lg:w-40 mx-4" />
      </div>
      <div className="leading-7 flex flex-col justify-center lg:max-w-[50%] items-center ">
        <div className="flex items-center justify-center items-center">
          <img
            alt="me"
            className="bio rounded-xl mb-10"
            src={process.env.PUBLIC_URL + "/me2.jpeg"}
          ></img>
        </div>
        <div className=" flex text-lg lg:text-base justify-center flex-col items-center w-[77%] p-5 ml-3 ">
       
            <p className="text-slate-400 mb-3 self-center">
              Hi! My name is Jimmy. My passion for creating software came from wanting to help the world. Some people want to be superheros, I just  want to
              build cool things that could make someones life a little bit better. 
            </p>
          
        </div>
      </div>
      <p className="mt-10 text-slate-400 text-center  lg:ml-0">
            Some of the technologies I've learned along the way.
          </p>
      <div className="flex text-green-200 my-5 mr-3">
        <ol className="mr-10">
          <li className="list opacity-0 mt-2">- React</li>
          <li className="list opacity-0 mt-2">- Express</li>
          <li className="list opacity-0 mt-2">- MongoDb</li>
          <li className="list opacity-0 mt-2">- GraphQL</li>
          <li className="list opacity-0 mt-2">- MySQL</li>
          <li className="list opacity-0 mt-2">- Node.js</li>
        </ol>
        <ol className="ml-10">
          <li className="list opacity-0 mt-2">- JavaScript</li>
          <li className="list opacity-0 mt-2">- TypeScript</li>
          <li className="list opacity-0 mt-2">- Python</li>
          <li className="list opacity-0 mt-2">- Next.js</li>
          <li className="list opacity-0 mt-2">- MaterialUI</li>
          <li className="list opacity-0 mt-2">- Tailwind</li>
        </ol>
      </div>
    </div>
  );
};

export default About;
