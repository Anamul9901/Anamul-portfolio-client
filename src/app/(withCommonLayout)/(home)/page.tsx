import AboutPage from "@/src/components/HomeSection/About/AboutPage";
import Blogs from "@/src/components/HomeSection/Blogs/Blogs";
import HeroSection from "@/src/components/HomeSection/HeroSection";
import RecentProject from "@/src/components/HomeSection/RecentProject/RecentProject";
import Skills from "@/src/components/HomeSection/Skills/Skills";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutPage />
      <Skills />
      <RecentProject />
      <Blogs />
    </div>
  );
};

export default HomePage;
