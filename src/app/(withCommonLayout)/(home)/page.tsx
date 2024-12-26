import AboutPage from "@/src/components/HomeSection/About/AboutPage";
import Blogs from "@/src/components/HomeSection/Blogs/Blogs";
import ContactInfo from "@/src/components/HomeSection/ContactInfo/ContactInfo";
import Education from "@/src/components/HomeSection/Education/Education";
import HeroSection from "@/src/components/HomeSection/HeroSection";
import RecentProject from "@/src/components/HomeSection/RecentProject/RecentProject";
import Skills from "@/src/components/HomeSection/Skills/Skills";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutPage />
      <Education />
      <Skills />
      <RecentProject />
      <Blogs />
      <ContactInfo />
    </div>
  );
};

export default HomePage;
