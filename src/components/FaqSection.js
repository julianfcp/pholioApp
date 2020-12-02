//styeld
import styled from "styled-components";
import { StyledAbout } from "../styles";
import Toggle from "./Toggle";
// Animation
import { AnimateSharedLayout } from "framer-motion"; // this allows to animate the toggle when onClick
import { scrollShow } from "../animation";
import { useScroll } from "./useScroll";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledFaq
      ref={element}
      variants={scrollShow}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              architecto consequatur error a beatae debitis reprehenderit,
              asperiores ullam est, doloremque voluptatem possimus sequi vero
              qui magnam repellendus! Harum, quam a!
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              architecto consequatur error a beatae debitis reprehenderit,
              asperiores ullam est, doloremque voluptatem possimus sequi vero
              qui magnam repellendus! Harum, quam a!
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              architecto consequatur error a beatae debitis reprehenderit,
              asperiores ullam est, doloremque voluptatem possimus sequi vero
              qui magnam repellendus! Harum, quam a!
            </p>
          </div>
        </Toggle>
        <Toggle title="What products do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              architecto consequatur error a beatae debitis reprehenderit,
              asperiores ullam est, doloremque voluptatem possimus sequi vero
              qui magnam repellendus! Harum, quam a!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 2rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
