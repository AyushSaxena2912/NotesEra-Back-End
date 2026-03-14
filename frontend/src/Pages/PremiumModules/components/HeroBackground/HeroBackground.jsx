import styles from "./HeroBackground.module.css";

const HeroBackground = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <NestedRings className={styles.nestedRings1} />
      <NestedRings className={styles.nestedRings2} />
      <GreenGradient className={styles.greenGradient1} />
      <GreenGradient className={styles.greenGradient2} />
      <div>{children}</div>
    </div>
  );
};

const NestedRings = ({ className }) => {
  return (
    <div className={`${styles.nestedRings} ${styles.nestedRing} ${className}`}>
      <div className={`${styles.nestedRing}`}>
        <div className={`${styles.nestedRing}`}>
          <div className={`${styles.nestedRing}`} />
        </div>
      </div>
      <div className={styles.ringsEllipse} />
    </div>
  );
};

const GreenGradient = ({ className }) => {
  return (
    <div className={`${styles.gradientContainer} ${className}`}>
      <div className={`${styles.greenGradBox}`} />{" "}
      <div className={`${styles.gradientBoxBlur}`} />
    </div>
  );
};

export default HeroBackground;
