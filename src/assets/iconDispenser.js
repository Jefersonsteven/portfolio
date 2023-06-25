import {
  SiPrisma,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiCss3,
  SiRedux,
  SiReact,
  SiSass,
  SiExpress,
  SiSequelize,
  SiTypescript,
  SiHtml5,
  SiJavascript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export default function iconDispenser(technology) {
  switch (technology) {
    case "prisma":
      return <SiPrisma />;

    case "nextjs":
      return <SiNextdotjs />;

    case "postgresql":
      return <SiPostgresql />;

    case "css":
      return <SiCss3 />;

    case "redux":
      return <SiRedux />;

    case "react":
      return <SiReact />;

    case "sass":
      return <SiSass />;

    case "tailwind":
      return <SiTailwindcss />;

    case "express":
      return <SiExpress />;

    case "sequelize":
      return <SiSequelize />;

    case "typescript":
      return <SiTypescript />;

    case "html":
      return <SiHtml5 />;

    case "api":
      return <TbApi />;

    case "javascript":
      return <SiJavascript />;

    default:
      return;
  }
}
