import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 }); // when the element is visible on scroll... the 50% of it.. view is true

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return [element, controls];
};
