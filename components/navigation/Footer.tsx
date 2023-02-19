import { social } from "../../lib/common/data";

export interface IFooter extends React.ComponentPropsWithoutRef<"footer"> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer {...footerProps} className={`dark:bg-tertiary py-12 ${className}`}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className="text-accent text-base" href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          <p className="text-paragraph opacity-80 text-[15px]">&copy; 2022 Oxana Ermolenko. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
