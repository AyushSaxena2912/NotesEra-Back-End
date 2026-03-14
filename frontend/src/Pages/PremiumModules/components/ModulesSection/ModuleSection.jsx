import { useState, useEffect } from "react";
import Carousel from "../../../../components/Carousel/Carousel";
import ModuleCard from "../ModuleCard/ModuleCard";
// import classes from "./modulesection.module.css";
const ModuleSection = ({
  name,
  about,
  modules,
  isRelatedMods = false,
  slug,
}) => {
  const [sectionModules, setSectionModules] = useState(modules);

  useEffect(() => {
    if (isRelatedMods) {
      const relatedMods = modules.filter((mod) => mod.slug !== slug);
      setSectionModules(relatedMods);
    }
  }, [modules, isRelatedMods, slug]);

  return sectionModules.length ? (
    <div className={``}>
      <header className={` d-flex flex-column gap-1 mb-4`}>
        <h1>Premium Modules</h1>
        <h2>{`Explore ${name} Modules Repository`}</h2>
        <p>{about}</p>
      </header>
      <Carousel
        className="px-2 mb-5"
        loop
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        centeredSlides={true}
        breakpoints={{
          989: { slidesPerView: 2, centeredSlides: false },
          1200: { slidesPerView: 3, centeredSlides: false },
        }}
        keyboard={{ enabled: true, onlyInViewport: true }}
      >
        {sectionModules.map((module, index) => (
          <ModuleCard
            key={index}
            imgSrc={module.thumbnailSrc}
            link={`/premium-modules/${module.repoId}/${module.slug}`}
            name={module.name}
            about={module.about}
            oldPrice={49}
            price={module.softCopyPrice}
            rating={module.rating}
            totalRatings={module.totalRatings}
          />
        ))}
      </Carousel>
    </div>
  ) : (
    ""
  );
};

export default ModuleSection;
