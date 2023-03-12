import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import LinkIcon from "@material-ui/icons/Link";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Description:</b> {project.description} <br/>
        <b>Skills:</b> {project.skills}
      </p>
      <a href={project.link} target="_blank"><LinkIcon /></a>
    </div>
  );
}

export default ProjectDisplay;
