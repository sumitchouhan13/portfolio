import { FaGithub, FaLinkedin, FaSteam } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const sideNavLinks = [
  {
    id: 1,
    linkTo: "https://www.linkedin.com/in/sumit-chouhan-7b6586181/",
    name: "Linkedin",
    icon: <FaLinkedin size={30} />,
    backgroundColor: "blue-600",
  },
  {
    id: 2,
    linkTo: "https://github.com/sumitchouhan13",
    name: "Github",
    icon: <FaGithub size={30} />,
    backgroundColor: "[#333333]",
  },
  {
    id: 3,
    linkTo: "https://steamcommunity.com/profiles/76561198875614102/",
    name: "Steam",
    icon: <FaSteam size={30} />,
    backgroundColor: "blue-900",
  },
  {
    id: 4,
    linkTo: "mailto:sumitchouhan8933@gmail.com",
    name: "Email",
    icon: <HiOutlineMail size={30} />,
    backgroundColor: "[#6fc2b0]",
  },
  {
    id: 5,
    linkTo:
      "https://drive.google.com/file/d/11Ovghyke_ZshexmDNuGCEU0JPDkxhM9s/view?usp=sharing",
    name: "Resume",
    icon: <BsFillPersonLinesFill size={30} />,
    backgroundColor: "[#565f69]",
  },
];
