import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Projects() {
    const api = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        withCredentials: true,
      });

    async function getProjects() {
      const { data } = await api.get('/');
      setProjects(data);
    }
    const [projects, setProjects] = React.useState([]);
    console.log(projects);
    React.useEffect(() => {
      getProjects();
    }, []);
    return (
      <div>
        <h1>Projects</h1>
        {projects.map((project) => {
          return (
            <div key={project._id}>
              <Link to={`/projects/${project._id}`}>{project.name}
              </Link>
              <p>{project.description}</p>
              <p>{project.task}</p>
            </div>
          );
        })}
      </div>
    );
  }

export default Projects;

