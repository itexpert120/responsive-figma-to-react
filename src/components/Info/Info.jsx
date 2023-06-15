import "./Info.css";

import { StudentIcon, IconFile, BGElementTwo } from "../../assets";

function Info() {
  return (
    <section id="info" className="dark-grey">
      <div className="wrapper">
        <div className="content-container">
          <div className="info-content">
            <img src={StudentIcon} />
            <div className="amount">23,000+</div>
            <div className="type">Students</div>
          </div>

          <div className="info-content">
            <img src={IconFile} />
            <div className="amount">26 Hrs</div>
            <div className="type">Video Content</div>
          </div>
        </div>
        <img className="bg-element" src={BGElementTwo} />
      </div>
    </section>
  );
}

export default Info;
