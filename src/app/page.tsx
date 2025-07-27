import Header from '../components/Header';
import Hero from '../components/Hero';
import MissionSection from '../components/MissionSection';
import StartBuildingSection from '../components/StartBuildingSection';
import FeaturedProjects from '../components/FeaturedProjects';
import TestimonialsSection from '../components/TestimonialsSection';
import PartnersSection from '../components/PartnersSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen theme-transition">
      <Header/>
      <Hero/>
      <MissionSection/>
      <StartBuildingSection/>
      <FeaturedProjects/>
      <TestimonialsSection/>
      <PartnersSection/>
      <Footer/>
    </main>
  );
}