import PrimaryLayout from "../components/layouts/PrimaryLayout";
import { NextPageWithLayout } from "./page";
import Hero from "@/components/Hero";


const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
