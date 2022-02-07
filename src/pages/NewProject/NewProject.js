import React from "react";
import { createProject } from "../../api";
import { useHistory } from "react-router-dom";

function NewProject() {
  const [state, setState] = React.useState({ title: "", description: ""});
  const history = useHistory();
  const handleSubmit = async (event) => {
    
    event.preventDefault();
    const { data } = await createProject(state);
    console.log("data", data);
    history.push("/projects");
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        name="title"
        required
        onChange={handleChange}
        value={state.title}
      />
      <label htmlFor="description">Description</label>
      <input
        name="description"
        required
        onChange={handleChange}
        value={state.description}
      />
      <button type="submit">Create Project</button>
    </form>
  );
}

export default NewProject;