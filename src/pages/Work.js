// Styled
import styled from "styled-components";
// Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
// React Router
import { Link } from "react-router-dom";
// Components
import ScrollToTop from "../components/ScrollToTop";
// animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";
import { useScroll } from "../components/useScroll";

const Work = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <StyedWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={sliderContainer}>
        <StyledFrame1 variants={slider}></StyledFrame1>
        <StyledFrame2 variants={slider}></StyledFrame2>
        <StyledFrame3 variants={slider}></StyledFrame3>
        <StyledFrame4 variants={slider}></StyledFrame4>
      </motion.div>

      <StyledMovie>
        <motion.h2 variants={fade}> The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <StyledHide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </StyledHide>
        </Link>
      </StyledMovie>
      <StyledMovie
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
      >
        <motion.h2>The Racer</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <StyledHide>
            <motion.img variants={photoAnim} src={theracer} alt="theracer" />
          </StyledHide>
        </Link>
      </StyledMovie>
      <StyledMovie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <motion.h2>Good Times</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <StyledHide>
            <motion.img variants={photoAnim} src={goodtimes} alt="goodtimes" />
          </StyledHide>
        </Link>
      </StyledMovie>
      <ScrollToTop />
    </StyedWork>
  );
};

const StyedWork = styled(motion.div)`
  background-color: white;
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const StyledMovie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const StyledHide = styled.div`
  overflow: hidden;
`;
const StyledFrame1 = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 10%;
  left: 0;
  background-color: #fffebf;
  z-index: 2;
`;
const StyledFrame2 = styled(StyledFrame1)`
  background-color: #ff8efb;
`;
const StyledFrame3 = styled(StyledFrame1)`
  background-color: #8ed2ff;
`;
const StyledFrame4 = styled(StyledFrame1)`
  background-color: #8effa0;
`;
export default Work;
