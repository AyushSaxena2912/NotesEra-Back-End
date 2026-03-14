import ModuleSection from "../../../components/ModulesSection/ModuleSection";
import styles from "./RelatedModulesSection.module.css";

const RelatedModulesSection = ({ repo, slug }) => {
  return (
    <section className={`${styles.section} container overflow-hidden`}>
      {repo ? (
        <ModuleSection
          name={repo.name}
          about={repo.about}
          modules={repo.modules}
          isRelatedMods
          slug={slug}
        />
      ) : (
        ""
      )}
    </section>
  );
};

export default RelatedModulesSection;
