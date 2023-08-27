import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: FaServer,
    title: "Backend Development",
    about:
      "handle database, server, api using <b>Laravel</b>,<b>MySQL</b>  & other popular frameworks",
  },
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and responsive websites using <b> HTML</b>,<b>CSS</b>,<b>JS</b>,<b>Bootstrap</b> and <b>React.js</b> ",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop RESTFULL API using <b>Laravel</b> and <b>ASP.net Web Core Api</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "Wordpress",
    about:
      "I can develop websites with control panel Dynamic using <b>Wordpress </b> ",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "PHP MYSQL",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Laravel",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "C,C++",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Html,Css,Js",
    level: "95",
  },
  
  {
    Icon: BsCircleFill,
    name: "React js",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Java",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "Asp.net",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "SQL",
    level: "90",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Git",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "SQL SERVER",
    level: "95",
  },
  
];
