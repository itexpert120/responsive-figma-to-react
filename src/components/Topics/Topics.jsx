import { useState } from "react";

import "./Topics.css";

import {
  FirstTopic,
  SecondTopic,
  ThirdTopic,
  FourthTopic,
  FifthTopic,
  SixthTopic,
  BGElementOne,
} from "../../assets/";

function Topics() {
  const [currentImage, setCurrentImage] = useState(FirstTopic);

  return (
    <section id="topics" className="black">
      <div className="wrapper">
        <h2>What will you learn?</h2>
        <div className="content-container">
          <ul className="topics-list">
            <li onMouseEnter={() => setCurrentImage(FirstTopic)}>
              What are frequencies?
            </li>
            <li onMouseEnter={() => setCurrentImage(SecondTopic)}>Using DAW</li>
            <li onMouseEnter={() => setCurrentImage(ThirdTopic)}>
              Vocals Processing
            </li>
            <li onMouseEnter={() => setCurrentImage(FourthTopic)}>Mixing</li>
            <li onMouseEnter={() => setCurrentImage(FifthTopic)}>
              Mixing Console
            </li>
            <li onMouseEnter={() => setCurrentImage(SixthTopic)}>Mastering</li>
          </ul>

          <div className="topic-image">
            <img src={currentImage} />
          </div>
        </div>
        <img src={BGElementOne} className="bg-element-1" />
      </div>
    </section>
  );
}

export default Topics;
