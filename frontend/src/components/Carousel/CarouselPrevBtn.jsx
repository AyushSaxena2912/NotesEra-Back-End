import { useSwiper } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import styles from "./CarouselArrowBtns.module.css";

const CarouselPrevBtn = () => {
  const swiper = useSwiper();
  return (
    <button
      className={`${styles.btn} ${styles.prevBtn}`}
      onClick={() => swiper.slidePrev()}
    >
      <IoIosArrowBack />
    </button>
  );
};

export default CarouselPrevBtn;
