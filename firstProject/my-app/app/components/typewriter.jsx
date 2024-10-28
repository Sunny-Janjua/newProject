"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
function Typewriter() {
  const words = [
    {
      text: "Code",
    },
    {
      text: "With",
    },
    {
      text: "Sunny!",
      className: "text-blue-500 dark:text-blue-400",
    },
  ];
  return (
      <TypewriterEffectSmooth words={words} />
    
  );
}
export default Typewriter;
