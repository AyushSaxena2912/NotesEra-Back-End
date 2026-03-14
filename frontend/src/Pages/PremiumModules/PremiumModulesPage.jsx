import Header from "./components/Header/Header";
import HeroSection from "./sections/HeroSection/HeroSection";
import ServicesSection from "./sections/ServicesSection/ServicesSection";
import PremiumModulesSection from "./sections/PremiumModulesSection/PremiumModulesSection";
import CustomModulesSection from "./sections/CustomModulesSection/CustomModulesSection";
import TestimonialSection from "./sections/TestimonialSection/TestimonialSection";
import JoinSection from "./sections/JoinSection/JoinSection";
import Footer from "./components/Footer/Footer";
import styles from "./PremiumModulesPage.module.css";

const PremiumModulesPage = () => {
  return (
    <div className={`${styles.container} fs-6 lh-1 overflow-hidden`}>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <PremiumModulesSection />
        <CustomModulesSection />
        <TestimonialSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
};

export default PremiumModulesPage;
