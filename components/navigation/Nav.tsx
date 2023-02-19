import { navigation } from "../../lib/common/data";
import Link from "next/link";
import { useRouter } from "next/router";

export interface INav {}

const Nav: React.FC<INav> = () => {
  const router = useRouter();
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map(({ href, name }, idx) => {
          const point = `/#${href}`;
          return (
            <li className={`hover:text-accent ${router.asPath == point ? "active" : ""}`} key={idx}>
              <Link href={point}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Nav;
