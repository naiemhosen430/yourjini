import AboutUsSection from "./Components/AboutUsSection";
import FeaturedItemSection from "./Components/FeaturedItemSection";
import Hero from "./Components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import TopBar from "./Components/Shared/Components/TopBar";
import Menu from "./Components/Shared/Menu";
import Footer from "./Components/Shared/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Menu />
      <Hero />
      <FeaturedItemSection />
      <AboutUsSection />
      <Footer />
    </>
  );
}
