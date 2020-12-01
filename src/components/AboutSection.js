// Styled
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../styles";
// images
import home1 from "../img/home1.png";
// Framer motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
// wave
import Wave from "../components/Wave";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>true</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img
          // initial and animate takes the element off from staggerChildren and starts right the way
          //initial="hidden"
          //animate="show"
          variants={photoAnim}
          src={home1}
          alt="Camera"
        />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

export default AboutSection;
