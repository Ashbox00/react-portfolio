import React from "react";

export const ProjectCard = ({ project }) => {
    return (
        <div>
        <img src ={getImageUrl(project.imageSrc)}></img>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
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
    );
};