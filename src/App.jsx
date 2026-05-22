import "./App.css";
import AboutUS from "./components/AboutUS";
import DiningEvents from "./components/DiningEvents";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import OurSpeciality from "./components/OurSpeciality";
import SpecialMenu from "./components/SpecialMenu";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SpecialMenu />
      <OurSpeciality />
      <DiningEvents />
      <AboutUS/>
      <Footer/>
    </>
  );
}

export default App;
