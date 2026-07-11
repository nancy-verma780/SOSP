import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import About from "@/components/home/About";
import Features from "@/components/home/Features";
import Timeline from "@/components/home/Timeline";
import Sponsors from "@/components/home/Sponsors";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
      <>
        <Navbar />
        <Hero />
        <Stats />
        <About />
        <Features />
        <Timeline />
        <Sponsors />
        <FAQ />
        <CTA />
        <Footer />
      </>
      );
}