import Bot from "../components/tree/Bot";

export interface IHero {}

const Hero: React.FC<IHero> = () => {
  return (
    <section id="home" className="lg:h-[85vh] flex items-center dark:bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              Building
              <br /> beautiful web experiences.
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">Let&apos;s work together to bring your ideas to life and create impactful web solutions..</p>
            <button className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all">Work with me</button>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <Bot />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
