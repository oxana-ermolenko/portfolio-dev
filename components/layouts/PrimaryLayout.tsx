import Head from "next/head";
import Footer from "../navigation/Footer";
import Header from "../navigation/Header";
import { ReactNode } from "react";

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, ...divProps }) => {
  return (
    <>
      <Head>
        <title>NextJs Fullstack App</title>
      </Head>
      <div {...divProps} className="bg-white relative">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
