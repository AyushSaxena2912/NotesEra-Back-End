import ActionButton from "../../components/ActionButton/ActionButton";
import HeroBackground from "../../components/HeroBackground/HeroBackground";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={`${styles.section} mb-5`}>
      <HeroBackground>
        <div className={`${styles.wrapper} container d-flex flex-column gap-3`}>
          <div className={`${styles.mainContainer}`}>
            <div
              className={`${styles.mainTextContainer} d-flex flex-column gap-3`}
            >
              <h1>
                Your Ultimate Source For All Educational Requirements Online
              </h1>
              <p>
                Welcome to Notes-Era - Your Ultimate Online Hub for Educational
                Resources. We offer free study materials and premium Exam
                Modules to boost your skills, knowledge, and placement
                preparation. Elevate your learning journey with Notes-Era.
              </p>
              <div className="d-flex flex-wrap align-items-center gap-4">
                <ActionButton>Premium Modules</ActionButton>
                <div className="position-relative">
                  <SecondaryButton isLink href="/courses">
                    Free Notes
                  </SecondaryButton>
                  <div className={styles.greenEllipse} />
                </div>
              </div>
            </div>
            <div className={styles.mainImgWrapper}>
              <div className={`${styles.mainImgContainer}`}>
                <img
                  src="/Assets2/Premium-Modules/hero-img.png"
                  alt="Notes-Era Hero Section asset"
                />
              </div>
              <div className={styles.darkBorderEllipse} />
              <div
                className={`${styles.imgInfoBox} ${styles.imgUsers} shadow-lg d-flex align-items-center`}
              >
                <img
                  src="/Assets2/Premium-Modules/users-icon.svg"
                  alt="Notes-Era Users Icon"
                  width={50}
                  height={50}
                />
                <div className="d-flex flex-column gap-1">
                  <strong>5k Users</strong>
                  <p>Active</p>
                </div>
              </div>
              <div
                className={`${styles.imgInfoBox} ${styles.imgViews} shadow-lg d-flex flex-column align-items-center`}
              >
                <img
                  src="/Assets2/Premium-Modules/views-icon.svg"
                  alt="Notes-Era view icon"
                  width={80}
                  height={80}
                />
                <div className="d-flex flex-column align-items-center gap-1">
                  <strong>200K+</strong>
                  <p>Views</p>
                </div>
              </div>
              <div
                className={`${styles.imgInfoBox} ${styles.imgTutors} shadow-lg d-flex`}
              >
                <img
                  src="/Assets2/Premium-Modules/tutors-icon.svg"
                  alt="Notes-Era view icon"
                  width={50}
                  height={50}
                />
                <div className="d-flex flex-column gap-1">
                  <p>Tutors</p>
                  <strong>250+</strong>
                </div>
              </div>
              <div className={styles.darkEllipse} />
              <div className={styles.yellowEllipse} />
            </div>
          </div>
          <div
            className={`${styles.highlightsContainer} d-flex flex-wrap gap-3 align-items-center mt-4`}
          >
            <div className="d-flex align-items-center gap-2">
              <img
                src="/Assets2/Premium-Modules/public-speaking-icon.svg"
                alt="Notes-Era public speaking icon"
                width={32}
              />
              <strong>Public Speaking</strong>
            </div>
            <div className="d-flex align-items-center gap-2">
              <img
                src="/Assets2/Premium-Modules/career-oriented-icon.svg"
                alt="Notes-Era public career oriented"
                width={32}
              />
              <strong>Career Oriented</strong>
            </div>
            <div className="d-flex align-items-center gap-2">
              <img
                src="/Assets2/Premium-Modules/creative-thinking-icon.svg"
                alt="Notes-Era public creative thinking"
                width={32}
              />
              <strong>Creative Thinking</strong>
            </div>
          </div>
          <div className={`${styles.brandsContainer} d-flex gap-3 mt-5`}>
            <div
              className={`${styles.collabContainer} d-flex align-items-center`}
            >
              <strong>250+</strong>
              <p>Collaboration</p>
            </div>
            <div className="d-flex flex-wrap gap-4 align-items-center justify-content-center">
              <div>
                <img
                  src="/Assets2/Premium-Modules/duolingo.png"
                  alt="Duolingo logo"
                />
              </div>
              <div>
                <img
                  src="/Assets2/Premium-Modules/codecov.png"
                  alt="Codecov logo"
                />
              </div>
              <div>
                <img
                  src="/Assets2/Premium-Modules/usertesting.png"
                  alt="User Testing logo"
                />
              </div>
              <div>
                <img
                  src="/Assets2/Premium-Modules/magicleap.png"
                  alt="Magic Leap logo"
                />
              </div>
            </div>
          </div>
        </div>
      </HeroBackground>
    </section>
  );
};

export default HeroSection;
