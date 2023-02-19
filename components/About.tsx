import Img from "../public/img/about.png";
import Image from "next/image";

export interface IAbout {}

const About: React.FC<IAbout> = () => {
  return (
    <section className="section dark:bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <div className="h-64 w-96 relative">
            <Image className="object-cover md:mx-auto lg:mx-0 rounded-2xl" src={Img} alt="me" />
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Oxana Ermolenko
              </h2>
              <p className="mb-4 text-accent">Full Stack Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                In this portfolio, you will find a selection of my most recent projects, as well as more information about my technical skills, work experience, and education. Feel free to explore and
                contact me if you are interested in working together!
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-secondary-hover transition-all">Contact me</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
