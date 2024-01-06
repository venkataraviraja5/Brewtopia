import React, { useState, useEffect } from "react";
import Styles from "./scrolltoTop.module.css";
import { GrLinkTop } from "react-icons/gr";
const GoTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`${Styles.goTop} ${showButton ? "" : Styles.inactive}`}
      onClick={() => scrollToTop()}
    >
        <GrLinkTop />
    </div>
  );
};

export default GoTop;
