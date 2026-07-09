
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import About from "@/components/home/About";
import Features from "@/components/home/Features";
import Timeline from "@/components/home/Timeline";
import FAQ from "@/components/home/FAQ";
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
      <FAQ />
      <Footer/>
    </>
  );
}