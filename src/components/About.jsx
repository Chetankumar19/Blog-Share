import { useEffect, useState } from "react";

const About = ()=> {
  const fullText = "Welcome to my awesome website";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      setIndex(prev => {
        if (prev + 1 === fullText.length) {
          setTimeout(() => {
            setDisplayedText("");
            setIndex(0);
          }, 1000); // Delay before restarting
        }
        return prev + 1;
      });
    }, 100); // Typing speed (ms per letter)

    return () => clearInterval(interval);
  }, [index]);

  return (
    <h1 className="text-4xl font-bold text-center mt-10 text-gray-800">
      {displayedText}
      <span className="animate-pulse"></span>
    </h1>
  );
}

export default About;
