import "./Testimonials.css";

import { person1, person2, person3 } from "../../assets";

function Testimonials() {
  return (
    <section id="testimonials" className="dark-grey">
      <div className="wrapper">
        <h2>What our students say?</h2>
        <div className="content-wrapper">
          <div className="people-wrapper">
            <div className="testimonial">
              <img src={person1} />
              <div className="info-wrapper">
                <div className="person-name">Peter Adams</div>
                <div className="person-says">
                  This is a great course. I got to learn alot.
                </div>
              </div>
            </div>

            <div className="testimonial">
              <img src={person2} />
              <div className="info-wrapper">
                <div className="person-name">Robert Fox</div>
                <div className="person-says">
                  I got to learn a lot about Music Production with this course.
                  Thanks :)
                </div>
              </div>
            </div>

            <div className="testimonial">
              <img src={person3} />
              <div className="info-wrapper">
                <div className="person-name">Emily Smith</div>
                <div className="person-says">Awesome! Great job!!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
