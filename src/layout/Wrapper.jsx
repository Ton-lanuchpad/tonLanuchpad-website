import { useEffect } from "react";
import AOS from "aos";
import { animationCreate } from "../utils/utils";

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => {

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    // animation
    const timer = setTimeout(() => {
      animationCreate();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {children}
    </>
  );
};

export default Wrapper;