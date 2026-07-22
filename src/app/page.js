import Hero from "@/components/home/Hero";
import Benefits from "@/components/home/Benefits";
import CallToAction from "@/components/home/CallToAction";
import Contact from "@/components/home/Contact";
import BestSeller from "@/components/home/BestSeller";
import Featured from "@/components/home/Featured";

  const Home = () => {
  return (
     <main>
    <Hero/>
    <Benefits/>
    <CallToAction/>
    <Featured/>
    <BestSeller/>
    <Contact/>
    </main>
  );
};

export default Home;
