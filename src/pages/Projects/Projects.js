import React from "react";
// import { getProjects } from "../../api";
// import { useFetch } from "../../hooks/useFetch";
// import { Suspense } from "../../components/Suspense";
import { Link } from "react-router-dom";
import axios from "axios";


// function Projects() {
//   const { data, loading, error } = useFetch(getProjects);

//   return (
//     <Suspense noData={!data && !loading} error={error} loading={loading}>
//       <h2>Projects</h2>
//       <div>
//         {data?.map((project) => (
//           <div key={project._id}>
//             <p>{project.title}</p>
//             <Link to={`/projects/${project._id}`}>show more</Link>
//           </div>
//         ))}
//       </div>
//     </Suspense>
//   );
// }

// export default Projects;

const api = axios.create({ baseURL: "http://localhost:4000/api" });

function Projects() {
  async function getProjects() {
    const { data } = await api.get("/projects");
    setProjects(data);
  }
  const [projects, setProjects] = React.useState([]);
  React.useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project) => {
        return (
          <div key={project.title}>
            <p>Project {project.title}</p>
            <p>{project.description}</p>
            <Link to={`/project/${project._id}`}>Details</Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Projects;