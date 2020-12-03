// Styled components
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";

export const StyledAbout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1274px) {
    display: block;
    padding: 3rem 3rem;
  }
`;
export const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  z-index: 2;
  @media (max-width: 1274px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;
export const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  z-index: 2;
`;

export const StyledHide = styled.div`
  overflow: hidden;
`;
