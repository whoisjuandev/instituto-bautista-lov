
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import EducationalLevels from '../components/EducationalLevels';
import SchoolLife from '../components/SchoolLife';
import FamilyResources from '../components/FamilyResources';
import Values from '../components/Values';
import InstitutionalValues from '../components/InstitutionalValues';
import Testimonials from '../components/Testimonials';
import Preinscripciones from '../components/Preinscripciones';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutUs />
      <EducationalLevels />
      <SchoolLife />
      <FamilyResources />
      <Values />
      <InstitutionalValues />
      <Testimonials />
      <Preinscripciones />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
