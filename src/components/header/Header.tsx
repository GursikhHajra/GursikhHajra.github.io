import { useEffect, useState } from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import backgroundImage from "../../assets/anime2-transformed.jpeg"; // Replace with the path to your background image

import "./Header.css";

const Header = () => {
  const [text, setText] = useState("");
  const textPhrases = ["Software Developer", "Computer Science Student"];
  const typingSpeed = 100; // Typing speed in milliseconds
  const deleteSpeed = 100; // Delete speed in milliseconds
  const deleteDelay = 2000; // Delay before deleting in milliseconds
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentIndex = text.length;
    if (isTyping) {
      if (currentIndex < textPhrases[phraseIndex].length) {
        const timer = setTimeout(() => {
          setText(text + textPhrases[phraseIndex][currentIndex]);
        }, typingSpeed);
        return () => clearTimeout(timer);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
          setPhraseIndex((prevIndex) =>
            prevIndex === textPhrases.length - 1 ? 0 : prevIndex + 1,
          );
          setText(""); // Clear the text
          setTimeout(() => {
            setIsTyping(false); // Add a delay before starting to delete
          }, deleteDelay);
        }, 1200); // Delay before switching to the next phrase (adjust as needed)
      }
    } else {
      if (currentIndex > 0) {
        const timer = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deleteSpeed);
        return () => clearTimeout(timer);
      } else {
        setIsTyping(true);
      }
    }
  }, [text, phraseIndex, isTyping, textPhrases, deleteDelay]);

  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain", // Ensure the entire image fits within the element
    backgroundPosition: "center center", // Center the image both horizontally and vertically
    height: "100vh",
  };

  return (
    <header id="header" style={headerStyle}>
      <div className="container header__container">
        <h1>I am Gursikh Hajra</h1>
        <h5 className="text-light">{text}</h5>
        {/* Display typing animation */}
        <CTA />
        <HeaderSocials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
