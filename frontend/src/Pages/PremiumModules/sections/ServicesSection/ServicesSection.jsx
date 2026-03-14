import Carousel from "../../../../components/Carousel/Carousel";
import Card from "./Card";
import styles from "./ServicesSection.module.css";

const ServicesSection = () => {
  return (
    <section
      className={`${styles.section} container d-flex flex-column gap-3 text-center mb-5`}
    >
      <header className="d-flex flex-column align-items-center gap-2 mb-3">
        <h1 className="text-center">Our Services</h1>
        <h2 className="text-center">
          Elevate Learning - Premium Modules, Roadmaps, Videos, Blogs.
        </h2>
      </header>
      <div className="mb-5">
        <Carousel
          activeSlideClasses={styles.activeSlide}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          loop
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            989: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          keyboard={{ enabled: true, onlyInViewport: true }}
        >
          <Card
            imgSrc="/Assets2/Premium-Modules/premium-modules-icon.svg"
            imgAlt="Premium Modules icon"
            heading="Premium Modules"
            para="Detailed, Precise, PYQs Integrated, IMP Questions, Simple Language"
            cardStyle={styles.cardGreen}
          />
          <Card
            imgSrc="/Assets2/Premium-Modules/blog-section-icon.svg"
            imgAlt="Blog Section icon"
            heading="Blog Section"
            para="Dive into knowledge, research, and captivating reads. Join our blogging world!"
          />
          <Card
            imgSrc="/Assets2/Premium-Modules/video-section-icon.svg"
            imgAlt="Video Section icon"
            heading="Video Section"
            para="User Interface Design courses that cover the most recent trends."
          />

          {/* Fix for less number of slides; generally number of slides should be >= 2 * slidesPerView */}
          <Card
            imgSrc="/Assets2/Premium-Modules/premium-modules-icon.svg"
            imgAlt="Premium Modules icon"
            heading="Premium Modules"
            para="Detailed, Precise, PYQs Integrated, IMP Questions, Simple Language"
          />
          <Card
            imgSrc="/Assets2/Premium-Modules/blog-section-icon.svg"
            imgAlt="Blog Section icon"
            heading="Blog Section"
            para="Dive into knowledge, research, and captivating reads. Join our blogging world!"
          />
          <Card
            imgSrc="/Assets2/Premium-Modules/video-section-icon.svg"
            imgAlt="Video Section icon"
            heading="Video Section"
            para="User Interface Design courses that cover the most recent trends."
          />
        </Carousel>
      </div>
    </section>
  );
};

export default ServicesSection;
