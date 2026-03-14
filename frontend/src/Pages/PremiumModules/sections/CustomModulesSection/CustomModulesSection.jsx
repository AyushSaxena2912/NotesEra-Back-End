import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import styles from "./CustomModulesSection.module.css";

const CustomModulesSection = () => {
  return (
    <section className={`${styles.section}`}>
      <div
        className={`container d-flex align-items-center justify-content-between`}
      >
        <div className={`${styles.textContainer} d-flex flex-column gap-4`}>
          <header className="d-flex flex-column gap-1">
            <h1>"Your College, Your Syllabus : Customized Modules"</h1>
            <h2>Custom Modules for Your College</h2>
          </header>
          <p>
            <strong>Facing Problems</strong> in college: Not getting{" "}
            <strong>proper notes</strong> and study material? Send us a module
            request, and we will prepare modules for your college.
          </p>
          <p>
            "Get <strong>personalized study modules</strong> for your college.
            Submit your details, and we'll create custom notes aligned with your
            syllabus". <strong>Submit Your Module Request</strong>
          </p>
          <div className="d-flex justify-content-center mt-3">
            <PrimaryButton>Modules Request Form !</PrimaryButton>
          </div>
        </div>
        <div className={`${styles.imgContainer}`}>
          <img
            src="/Assets2/Premium-Modules/custom-modules.png"
            alt="Notes-Era custom modules section asset"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomModulesSection;
