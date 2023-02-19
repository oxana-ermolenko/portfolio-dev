//  icons
import { FiYoutube, FiInstagram, FiGithub, FiDribbble, FiMail, FiMapPin } from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "../../public/img/brands/freelancer.png";
import UpworkBrandIcon from "../../public/img/brands/upwork.png";
import FiverBrandIcon from "../../public/img/brands/fiverr.png";
import BehanceBrandIcon from "../../public/img/brands/behance.png";
import DribbbleBrandIcon from "../../public/img/brands/dribbble.png";

// projects images
import Project1 from "../../public/img/projects/p6.png";
import Project2 from "../../public/img/projects/p2.png";
import Project3 from "../../public/img/projects/p4.png";
import Project4 from "../../public/img/projects/p4.png";
import Project5 from "../../public/img/projects/p2.png";
import Project6 from "../../public/img/projects/p6.png";

// skills images
import SkillImg1 from "../../public/img/skills/html5.png";
import SkillImg2 from "../../public/img/skills/css3.png";
import SkillImg3 from "../../public/img/skills/js.png";
import SkillImg4 from "../../public/img/skills/reactjs.png";
import SkillImg5 from "../../public/img/skills/nextjs.png";
import SkillImg6 from "../../public/img/skills/nodejs.png";
import SkillImg7 from "../../public/img/skills/git.png";
import SkillImg8 from "../../public/img/skills/figma.png";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "my work",
    href: "portfolio",
  },
  {
    name: "blog",
    href: "blog",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: "",
  },
  {
    icon: <FiInstagram />,
    href: "",
  },
  {
    icon: <FiGithub />,
    href: "",
  },
  {
    icon: <FiDribbble />,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "project name 1",
    category: "UI/UX design",
  },
  {
    id: "2",
    image: Project2,
    name: "project name 2",
    category: "web development",
  },
  {
    id: "3",
    image: Project3,
    name: "project name 3",
    category: "UI/UX design",
  },
  {
    id: "4",
    image: Project4,
    name: "project name 4",
    category: "branding",
  },
  {
    id: "5",
    image: Project5,
    name: "project name 5",
    category: "web development",
  },
  {
    id: "6",
    image: Project6,
    name: "project name 6",
    category: "web development",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "UI/UX Design",
  },
  {
    name: "web development",
  },
  {
    name: "branding",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// skills
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at hello@youremail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Bucharest, Romania",
    description: "Serving clients worldwide",
  },
];
