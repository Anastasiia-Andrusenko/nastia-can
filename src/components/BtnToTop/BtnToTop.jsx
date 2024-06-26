import React, { useState, useEffect } from "react";
import { FiArrowUpCircle } from "react-icons/fi";
import css from './BtnToTop.module.css';

const BtnToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Функція для перевірки позиції скролу
  const toggleVisibility = () => {
    if (window.pageYOffset > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Функція для плавного скролу до верху
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={`${css.btnWrapper} ${isVisible ? css.visible : ''}`} onClick={scrollToTop}>
      <div className={css.btn} onClick={scrollToTop}>
        <FiArrowUpCircle className={css.icon} />
      </div>
    </div>
  );
};

export default BtnToTop;

