import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Specials from "@/components/Specials";
import DateNightGiftSection from "@/components/DateNightGiftSection";
import BookingPolicy from "@/components/BookingPolicy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TestimonialsSchema from "@/components/TestimonialsSchema";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TestimonialsSchema />
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Specials />
      <DateNightGiftSection />
      <BookingPolicy />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
