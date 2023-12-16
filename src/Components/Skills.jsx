import meter1 from "../Assets/img/meter1.svg";
import meter2 from "../Assets/img/meter2.svg";
import meter3 from "../Assets/img/meter3.svg";
import meter4 from "../Assets/img/meter4.svg";
import meter5 from "../Assets/img/meter5.svg";
import meter6 from "../Assets/img/meter6.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../Assets/img/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>Node JS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="" />
                  <h5>CSS(Bootstrap, Tailwind CSS, Material UI) </h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="" />
                  <h5>JavaScript</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};

export default Skills;
