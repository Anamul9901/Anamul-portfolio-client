import AboutPage from "@/src/components/HomeSection/About/AboutPage";
import HeroSection from "@/src/components/HomeSection/HeroSection";
import RecentProject from "@/src/components/HomeSection/RecentProject/RecentProject";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutPage />
      <RecentProject />
    </div>
  );
};

export default HomePage;
