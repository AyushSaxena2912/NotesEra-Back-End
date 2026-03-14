import { useSwiper } from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./CarouselArrowBtns.module.css";

const CarouselNextBtn = () => {
  const swiper = useSwiper();
  return (
    <button
      className={`${styles.btn} ${styles.nextBtn}`}
      onClick={() => swiper.slideNext()}
    >
      <IoIosArrowForward />
    </button>
  );
};

export default CarouselNextBtn;
