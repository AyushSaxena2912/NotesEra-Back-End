import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import HeroSection from "./sections/HeroSection/HeroSection";
import Footer from "../components/Footer/Footer";
import RelatedModulesSection from "./sections/RelatedModulesSection/RelatedModulesSection";
import { fetchRepo } from "../../../utils/modules";
import styles from "./ModulePage.module.css";

const ModulePage = () => {
  const { repoId, moduleSlug } = useParams();
  const [repo, setRepo] = useState(null);

  const fetchAndSetRepo = useCallback(async () => {
    const data = await fetchRepo(repoId);
    setRepo(data.body.data);
  }, [repoId]);

  useEffect(() => {
    fetchAndSetRepo();
  }, [fetchAndSetRepo]);

  return (
    <div className={`${styles.container} overflow-hidden`}>
      <Header />
      <main className="overflow-hidden">
        {repo ? (
          <>
            <HeroSection
              className="mb-5"
              module={repo.modules.find((module) => module.slug === moduleSlug)}
            />
            <RelatedModulesSection repo={repo} slug={moduleSlug} />
          </>
        ) : (
          ""
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ModulePage;
