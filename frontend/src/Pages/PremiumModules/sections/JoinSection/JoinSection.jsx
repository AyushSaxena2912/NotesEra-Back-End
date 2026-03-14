import Card from "./Card";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import styles from "./JoinSection.module.css";

const JoinSection = () => {
  return (
    <section className={`${styles.section}`}>
      <div className={` container d-flex flex-column gap-4 position-relative`}>
        <header
          className={`${styles.header} d-flex flex-column align-items-center`}
        >
          <h1>Join The Notes-Era Team !</h1>
          <p>Contribute, and Be a Part of This Era.</p>
        </header>
        <main
          className={`${styles.main} d-flex gap-5 flex-wrap justify-content-between`}
        >
          <Card
            styles={styles}
            imgSrc="/Assets2/Premium-Modules/JoinSection/graphics-designer.png"
            imgAlt="Graphics Designer"
            heading="Graphics Designer and Video Editor"
            about="Create Stunning graphics for content and promotion and edit dynamic reels and promotion videos for Notes-Era"
          />
          <Card
            styles={styles}
            imgSrc="/Assets2/Premium-Modules/JoinSection/social-marketing.png"
            imgAlt="Social Media And Marketing Manager"
            heading="Social Media and Marketing Managers"
            about="Generate new ideas, write articles, prepare slides, script, and generate informative content for social media presence"
          />
          <Card
            styles={styles}
            imgSrc="/Assets2/Premium-Modules/JoinSection/content-creator.png"
            imgAlt="Content Creator"
            heading="Content Creators"
            about="Generate new ideas, write articles, prepare slides, script, and generate informative content for social media presence"
          />
          <Card
            styles={styles}
            imgSrc="/Assets2/Premium-Modules/JoinSection/notes-maker.png"
            imgAlt="Notes Maker"
            heading="Notes-Makers"
            about="Create new notes and customized notes for the Notes-Era premium modules"
          />
        </main>
        <footer className="d-flex justify-content-center">
          <PrimaryButton>Apply Now !</PrimaryButton>
        </footer>
        <div className={`${styles.dotsGroup} ${styles.dotsGroup1}`}>
          <img
            src="/Assets2/Premium-Modules/dots-group.svg"
            alt="design asset"
          />
        </div>
        <div className={`${styles.dotsGroup} ${styles.dotsGroup2}`}>
          <img
            src="/Assets2/Premium-Modules/dots-group.svg"
            alt="design asset"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
