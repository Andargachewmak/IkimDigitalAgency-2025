// import CTA from "./components/CTA";
// import Features from "./components/Features";
import AboutUsSection from "./components/About";
import StatsSection from "./components/Counter";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Project";
import Services from "./components/Services";


export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header/>
      <Hero />
      <AboutUsSection />
      <Services/>
      <StatsSection/>
      <Projects/>
      <CTA/>
      <Footer />
    </div>
  );
}
