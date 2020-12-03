// animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
// styled
import styled from "styled-components";
// Components
import ScrollToTop from "../components/ScrollToTop";

const ContactUs = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledTitle>
        <StyledHide>
          <motion.h2>Contact Us</motion.h2>
        </StyledHide>
      </StyledTitle>
      <div>
        <StyledHide>
          <StyledSocial variants={titleAnim}>
            <StyledCircle></StyledCircle>
            <h2>Send us an Email</h2>
          </StyledSocial>
        </StyledHide>
        <StyledHide>
          <StyledSocial variants={titleAnim}>
            <StyledCircle></StyledCircle>
            <h2>Send a Message</h2>
          </StyledSocial>
        </StyledHide>
        <StyledHide>
          <StyledSocial variants={titleAnim}>
            <StyledCircle></StyledCircle>
            <h2>Send your socials</h2>
          </StyledSocial>
        </StyledHide>
      </div>
      <ScrollToTop />
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  background-color: white;
  padding: 5rem 10rem;
  min-height: 90vh;
  color: #353535;
  @media (max-width: 1274px) {
    padding: 5rem;
    font-size: 1rem;
  }
`;

const StyledTitle = styled(motion.div)`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1274px) {
    margin-top: 2rem;
  }
`;

const StyledHide = styled(motion.div)`
  overflow: hidden;
`;
const StyledCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #353535;
`;
const StyledSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
