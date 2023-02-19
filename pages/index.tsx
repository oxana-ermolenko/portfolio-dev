import PrimaryLayout from "@/components/layouts/PrimaryLayout";
import { NextPageWithLayout } from "./page";
import Hero from "@/components/Hero";
import Skills from "@/components/brands/Skills";
import About from "@/components/About";
import Portfolio from "@/components/work/Portfolio";


const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <Skills />
      <About />
      <Portfolio />
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
