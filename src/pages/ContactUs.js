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
      <StyledContactForm>
        <StyledTitle>
          <StyledHide>
            <motion.h2>Contact Us</motion.h2>
          </StyledHide>
        </StyledTitle>
        <div>
          <StyledHide>
            <StyledSocial variants={titleAnim}>
              <input type="text" placeholder="Name" />
            </StyledSocial>
          </StyledHide>
          <StyledHide>
            <StyledSocial variants={titleAnim}>
              <input type="text" placeholder="Email" />
            </StyledSocial>
          </StyledHide>
          <StyledHide>
            <StyledSocial variants={titleAnim}>
              <textarea
                rows="4"
                cols="60"
                name="comment"
                placeholder="Comments"
              ></textarea>
            </StyledSocial>
          </StyledHide>
        </div>
        <ScrollToTop />
      </StyledContactForm>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  background-color: white;
  padding: 5rem 10rem;
  min-height: 90vh;
  color: #353535;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1274px) {
    padding: 5rem;
    font-size: 1rem;
  }
`;

const StyledContactForm = styled(motion.div)`
  background-color: white;
  min-width: 450px;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  h2 {
  }
  input {
    height: 56px;
    width: 100%;
    border-radius: 6px;
    padding: 0px 10px;
    border: 1px solid #e7e7e7;
    font-size: 24px;
    transition: 0.3s all;
    margin: 10px 0px;
  }
  input:focus {
    outline: none;
  }
  textarea {
    border-radius: 6px;
    padding: 10px 10px;
    border: 1px solid #e7e7e7;
    font-size: 24px;
    transition: 0.3s all;
    margin: 10px 0px;
  }
  textarea:focus {
    outline: none;
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
/* const StyledCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #353535;
`; */
const StyledSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
