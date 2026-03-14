import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Keyboard,
  FreeMode,
  Pagination,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";
import CarouselPrevBtn from "./CarouselPrevBtn";
import CarouselNextBtn from "./CarouselNextBtn";

const Carousel = ({
  children,
  showArrows = false,
  className = "",
  slideClasses = "",
  activeSlideClasses = "",
  inactiveSlideClasses = "",
  ...props
}) => {
  return (
    <div className={`${className}`}>
      <Swiper
        {...props}
        modules={[Autoplay, Keyboard, FreeMode, Pagination, Navigation]}
      >
        {children.map((child, index) => {
          return (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`${
                    isActive ? activeSlideClasses : inactiveSlideClasses
                  } ${slideClasses}`}
                >
                  {child}
                </div>
              )}
            </SwiperSlide>
          );
        })}
        {showArrows ? (
          <div className="swiper-custom-buttons-wrapper">
            <div className="swiper-custom-buttons">
              <CarouselPrevBtn />
              <CarouselNextBtn />
            </div>
          </div>
        ) : (
          ""
        )}
      </Swiper>
    </div>
  );
};

export default Carousel;
