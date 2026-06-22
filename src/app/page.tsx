import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <ReviewsCarousel />
      <Gallery />
      <FAQ />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
