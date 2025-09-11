import { useEffect, useState } from "react";

const About = () => {
  const fullText = "Welcome to my awesome Blog  website ";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      setIndex((prev) => {
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
    <div>
      <h1 className="text-4xl font-bold text-center mt-10 text-blue-800">
        {displayedText}
        <span className="animate-pulse"></span>
      </h1>
      <p className="text-2xl text-center mt-10">
        Where you can see all the editoral and thoughts about hot topics you
        like
      </p>
    </div>
  );
};

export default About;
