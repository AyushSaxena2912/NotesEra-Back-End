import { useState, useEffect, useCallback } from "react";
import ModuleSection from "../../components/ModulesSection/ModuleSection.jsx";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { IoArrowForward } from "react-icons/io5";
import styles from "./PremiumModulesSection.module.css";
import { fetchAllRepos } from "../../../../utils/modules.js";

const PremiumModulesSection = () => {
  const [repos, setRepos] = useState([]);
  const fetchAndSetData = useCallback(async () => {
    const data = await fetchAllRepos();
    if (!data.isErr) {
      setRepos(data.body);
    }
  }, []);

  useEffect(() => {
    fetchAndSetData();
  }, [fetchAndSetData]);

  return (
    <section
      className={`${styles.container} container d-flex flex-column gap-3`}
    >
      {repos && repos.length
        ? repos.map((repo, index) => (
            <ModuleSection
              key={index}
              name={repo.name}
              about={repo.about}
              modules={repo.modules}
            />
          ))
        : ""}
      <div className="d-flex justify-content-center">
        <PrimaryButton>
          <p>Explore More Colleges</p>
          <IoArrowForward />
        </PrimaryButton>
      </div>
    </section>
  );
};

export default PremiumModulesSection;
