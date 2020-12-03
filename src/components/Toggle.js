import { useState } from "react";
// Animations
import { motion } from "framer-motion";
import { toggleMotion } from "../animation";
import { useAnimation } from "framer-motion";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  const controls = useAnimation(); // property to start animate

  if (toggle) {
    // if click toggle is true then animate the element
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return (
    <motion.div
      layout // Layout is for AnimateSharedLayout when toggle (motion.div is needed)
      className="question"
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      <motion.h4
        layout
        variants={toggleMotion}
        animate={controls} // set the controls property
        initial="hidden"
      >
        {title}
      </motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
