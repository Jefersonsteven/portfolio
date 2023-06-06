"use client";
import styles from "./projects.module.scss";
import {
  BsFillArrowUpSquareFill,
  BsFillArrowDownSquareFill,
} from "react-icons/bs";
import { AppContext } from "@/context/AppContext";
import { useContext, useRef } from "react";
import ProjectCard from "@/components/Project/ProjectCard";

function Projects() {
  const { language } = useContext(AppContext);
  const sliderContainerRef = useRef(null);

  const handleScrollUp = () => {
    sliderContainerRef.current.scrollTo({
      top:
        sliderContainerRef.current.scrollTop -
        sliderContainerRef.current.clientHeight -
        30,
      behavior: "smooth",
    });
  };

  const handleScrollDown = (e) => {
    sliderContainerRef.current.scrollTo({
      top:
        sliderContainerRef.current.scrollTop +
        sliderContainerRef.current.clientHeight +
        20,
      behavior: "smooth",
    });
  };

  return (
    <main className={styles.main}>
      <h1>
        <b>{language.projects.title}</b>
      </h1>
      <section className={styles.container}>
        <section className={styles.sliderContainer} ref={sliderContainerRef}>
          <section className={styles.slider}>
            {language.projects.projects?.map((project) => {
              return (
                <ProjectCard
                  id={project.id}
                  key={project.id}
                  title={project.title}
                  image={project.image}
                  technologies={project.technologies}
                />
              );
            })}
          </section>
        </section>
        <section className={styles.navigation}>
          <BsFillArrowUpSquareFill onClick={handleScrollUp} />
          <BsFillArrowDownSquareFill onClick={handleScrollDown} />
        </section>
      </section>
    </main>
  );
}

export default Projects;
