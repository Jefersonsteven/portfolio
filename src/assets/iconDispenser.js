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
} from "react-icons/si";

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

    default:
      return;
  }
}
