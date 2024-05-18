import React from "react";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";
export const Projects = () => {
    return <section className={styles.container}>
        <h2 className={styles.title}><u>Projects</u></h2>
        <div className={styles.project}>
            {
                projects.map((project,id) => {
                    return (
                        <div key={id} className={styles.projectCard}>
                            <img src ={getImageUrl(project.imageSrc)}></img>
                            <div className={styles.description}>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                            <ul>
                                {
                                    project.skills.map((skill, id)=> {
                                        <li key={id}>{skill}</li>
                                    })
                                }
                            </ul>
                            <div>
                                <a href={project.source}>Source</a>
                            </div>
                    </div>
                    )
                }
            )}
        </div>
    </section>
}