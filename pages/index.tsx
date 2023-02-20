import PrimaryLayout from "@/components/layouts/PrimaryLayout";
import { NextPageWithLayout } from "./page";
import Hero from "@/components/Hero";
import Skills from "@/components/brands/Skills";
import About from "@/components/About";
// import Portfolio from "@/components/work/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";


const Home: NextPageWithLayout = () => {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <About />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
