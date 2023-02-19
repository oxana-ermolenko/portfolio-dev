import { social } from "../../lib/common/data";

export interface ISocials {}

const Socials: React.FC<ISocials> = () => {
  return (
    <ul className="flex space-x-6">
      {social.map((item, index) => {
        return (
          <li className="flex justify-center items-center text-accent" key={index}>
            <a className="text-base" href={item.href}>
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default Socials;
