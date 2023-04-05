import { useEffect, useState } from "react";

const Typewriter = (text, speed = 100) => {
  const [typewriterText, setTypewriterText] = useState("");
 

  useEffect(() => {
  

    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length) {
        const currentChar = text[index] === "\n" ? "<br>" : text[index];
        setTypewriterText((prev) => prev + currentChar);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

   

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return typewriterText;
};
export default Typewriter;
