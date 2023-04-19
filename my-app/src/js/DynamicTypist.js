import React, { useState } from "react";
import ReactTypingEffect from "react-typing-effect";
import { Link } from "react-router-dom";

const DynamicTypist = () => {
  // const texts = ["shes an artist", "shes an engineer", "she an advocate"];
  // let [currentTextCounter, setCurrentTextCounter] = useState(0);
  // console.log("in render:", currentTextCounter);
  // return (
  //   <div
  //     onMouseLeave={() =>
  //       currentTextCounter >= texts.length - 1
  //         ? (currentTextCounter = -1)
  //         : setCurrentTextCounter(currentTextCounter + 1)
  //     }
  //   >
  //     <Typist key={currentTextCounter}>
  //       {/* <Typist.Backspace count={4} delay={200} /> */}
  //       <Typist.Delay ms={500} />
  //       {texts[currentTextCounter]}
  //     </Typist>
  //   </div>
  // );
  return (
    <ReactTypingEffect
      text={["shes an artist", "shes an engineer", "she loves to watch movies"]}
      speed={100}
      eraseSpeed={75}
      typingDelay={1000}
    />
  );
};
export default DynamicTypist;
