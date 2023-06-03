"use client";
import styles from "./projects.module.scss";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import ProjectCard from "@/components/Project/ProjectCard";

function Projects() {
  const { language } = useContext(AppContext);
  return (
    <main>
      <h1>{language.projects.title}</h1>
      <section>
        <section className={styles.sliderContainer}>
          <section className={styles.slider}>
            {language.projects.projects?.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  technologies={project.technologies}
                />
              );
            })}
          </section>
        </section>
        <section className={styles.navigation}>
          <BsFillArrowLeftSquareFill />
          <BsFillArrowRightSquareFill />
        </section>
      </section>
    </main>
  );
}

export default Projects;
