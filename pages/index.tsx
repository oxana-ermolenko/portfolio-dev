import PrimaryLayout from "@/components/layouts/PrimaryLayout";
import { NextPageWithLayout } from "./page";
import Hero from "@/components/Hero";
import Skills from "@/components/brands/Skills";
import About from "@/components/About";
import Portfolio from "@/components/work/Portfolio";
import Contact from "@/components/Contact";


const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <Skills />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
