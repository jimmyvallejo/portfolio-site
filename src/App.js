import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App font-mono relative ">
      <div className="container fixed inset-0 ">
        <div className="bubbles ">
          {[...Array(30)].map((_, index) => (
            <span
              key={index}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${Math.random() * 5 + 10}s`,
                opacity: Math.random(),
                scale: `${Math.random() * 0.5 + 0.5}`,
              }}
            ></span>
          ))}
        </div>
      </div>
      <div className="content relative z-10">
        <Navbar />
        <Intro />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;