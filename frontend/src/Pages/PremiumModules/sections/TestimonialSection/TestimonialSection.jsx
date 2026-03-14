import Carousel from "../../../../components/Carousel/Carousel";
import ReviewCard from "./ReviewCard";
import styles from "./TestimonialSection.module.css";
import reviews from "./reviews";

const TestimonialSection = () => {
  return (
    <section className={`${styles.section} container d-flex flex-column mb-5`}>
      <header
        className={`${styles.header} d-flex flex-column align-items-center mb-4`}
      >
        <h1>Testimonials</h1>
        <h2>What Our Customer Say About Us</h2>
      </header>
      <main>
        <Carousel
          loop
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          spaceBetween={30}
          pagination={{ clickable: true }}
          centeredSlides={true}
          showArrows
          breakpoints={{
            1000: { slidesPerView: 3 },
          }}
          keyboard={{ enabled: true, onlyInViewport: true }}
          slideClasses={styles.inactiveCard}
          activeSlideClasses={styles.activeCard}
        >
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              imgSrc={review.imgSrc}
              imgAlt={review.name}
              name={review.name}
              about={review.about}
              rating={review.rating}
              review={review.review}
            />
          ))}
        </Carousel>
      </main>
    </section>
  );
};

export default TestimonialSection;
