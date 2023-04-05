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
    <div className="flex flex-col items-center ml-10 lg:ml-0 lg:mt-40">
      <div id="about" className="flex items-center mb-10 mt-60 mr-10">
        <hr className="border-slate-300 w-20 lg:w-40 mx-4" />
        <h1 className="text-2xl text-slate-300">About {isWide && "Me"}</h1>
        <hr className="border-slate-300 w-20 lg:w-40 mx-4" />
      </div>
      <div className="leading-7 flex flex-col justify-center lg:ml-10">
        <div className="flex items-center justify-center mr-6">
          <img alt="me"
            className="bio rounded-xl mr-3 lg:mr-10 mb-10 lg:ml-0 "
            src={process.env.PUBLIC_URL + "/me.jpg"}
          ></img>
        </div>
        <div className="mr-10 text-lg lg:text-base">
          {isWide && (
            <p className="text-slate-400 mb-3 lg:ml-20 ">
              Hi there! My name is Jimmy and it my sound cliche, but my passion
              for creating <br></br> came from wanting to help the world. Now I
              don't mean this in a Batman type of way, <br></br> I simply want
              to create things that could make someones life easier, even if
              just a little.
            </p>
          )}
          <p className="mb-3 text-slate-400 lg:ml-20 ">
            My journey started a few years ago when i graduated from Florida
            International University {isWide && <br></br>} with a degree in
            political science. While I liked politics, I ultimately decided I
            couldn't see <br></br> myself working in it full-time or moving to
            Washington D.C.
          </p>
          <p className="mb-10 text-slate-400 lg:ml-20">
            Fast forward a few years and a few jobs ranging from
            customer-service to nightlife and {isWide && <br></br>} one day I
            decided I wanted to make a change. I picked up coding and
            discovered <br></br> I could get lost (enjoyably) in a project and
            have not looked back since.
          </p>
          <p className="mb-7 text-slate-400 text-center  lg:ml-0">
            Some of the technologies i've learned along the way.
          </p>
        </div>
      </div>
      <div className="flex text-green-200 mb-20 mr-10 pr-4 lg:mr-0 lg:pr-0">
        <ol className="mr-10">
          <li className="list opacity-0 mt-2">- React</li>
          <li className="list opacity-0 mt-2">- Express</li>
          <li className="list opacity-0 mt-2">- MongoDb</li>
          <li className="list opacity-0 mt-2">- Node.js</li>
        </ol>
        <ol className="ml-10">
          <li className="list opacity-0 mt-2">- JavaScript</li>
          <li className="list opacity-0 mt-2">- TypeScript</li>
          <li className="list opacity-0 mt-2">- Tailwind</li>
          <li className="list opacity-0 mt-2">- Handlebars</li>
        </ol>
      </div>
    </div>
  );
};

export default About;
