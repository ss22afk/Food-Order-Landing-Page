import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroThreeSection.module.css";
import Img1 from "../../assets/image/Blog_Images/Mobile_app_Image_1.png";
import Img2 from "../../assets/image/Blog_Images/Mobile_app_Image_2.png";
import Img3 from "../../assets/image/Blog_Images/Mobile_app_Image_3.png";
import Img4 from "../../assets/image/Blog_Images/Mobile_app_Image_4.png";
import Img5 from "../../assets/image/Blog_Images/Mobile_app_Image_5.png";
import HeroThreeContent from "../SectionComponents/HeroThreeContent";

const HeroThreeSection = () => {
  //Rendering the Hero Three section
  return (
    <section id="mobileAppimages">
          <div className={classes.header_div}>
              <h2>Blog</h2>
              <div class="container">
  <div class="row">
    <div class="col">
      <img src={Img1} alt="Mobile_app_Image_1"/>
    </div>
    <div class="col">
      <img src={Img2} alt="Mobile_app_Image_2"/>
    </div>
    <div class="col">
    <img src={Img3} alt="Mobile_app_Image_3"/>
    </div>
    <div class="col">
    <img src={Img4} alt="Mobile_app_Image_4"/>
    </div>
    <div class="col">
    <img src={Img5} alt="Mobile_app_Image_5"/>
    </div>
  </div>
</div>
</div>
    </section>
  );
};

export default HeroThreeSection;
