import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroTwoSection.module.css";
import mission_img from "../../assets/Icon/Mission_svg.svg";
import vision_img from "../../assets/Icon/Vision_img.png";
import topimg from "../../assets/Icon/goal-finish-svgrepo-com.svg";

const HeroTwoSection = () => {
  //Rendering the HeroTwo section
  return (
    <section id="why">
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>About Us</h2>
            </div>
          </Col>
        </Row>

        <Row className={classes.row_cards}>
          <Col
            lg={4}
            className={classes.first_col}
            data-aos="zoom-in"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="100"
          >
            <div className={`${classes.card_one} ${classes.card}`}>
              <div className={classes.card_content}>
                <div className={classes.card_image_div}>
                  <img src={mission_img} alt="Mission" width="60" height="65"/>
                </div>
                <div className={classes.card_text_div}>
                <h3>Mission</h3>
              <p>
              This platform helps them to network with-in their community across the globe which in-turn opens-up to match with the best opportunities available.
              It targets Chefs, Chef-Assistants, Business Owners and Food Lovers.
            </p>
                </div>
              </div>
            </div>
          </Col>

          <Col
            lg={4}
            data-aos="zoom-in"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="200"
          >
            <div className={`${classes.card_two} ${classes.card}`}>
              <div className={classes.card_content}>
                <div className={classes.card_image_div}>
                  <img src={vision_img} alt="Vision" width="60" height="65"/>
                </div>
                <div className={classes.card_text_div}>
                <h3>Vision</h3>
                <p>
                  It empowers and upscale them through the knowledgeable content available on the platform. 
                </p>
                </div>
              </div>
            </div>
          </Col>

          <Col
            lg={4}
            className={classes.last_col}
            data-aos="zoom-in"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="300"
          >
            <div className={`${classes.card_three} ${classes.card}`}>
              <div className={classes.card_content}>
                <div className={classes.card_image_div}>
                  <img src={topimg} alt="Thumbs up"></img>
                </div>
                <div className={classes.card_text_div}>
                <h5>Goal</h5>
                <p>
                  The goal is to provide recognition to their profession in their industry. 
               </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
  //END
};

export default HeroTwoSection;
