import React from "react";
import { createProject } from "../../api";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../router";

function NewProject() {
  const initialState = {
    name: "",
    description: "",
    task: "",
  };

  const [state, setState] = React.useState(initialState);
  const history = useHistory();
  const handleChange = ({ target }) => {
    const { value, name } = target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createProject(state);
    history.push(ROUTES.projects);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input required name="name" value={state.name} onChange={handleChange} />
      <label htmlFor="description">Description</label>
      <input
        required
        name="description"
        value={state.description}
        onChange={handleChange}
      />
      <label htmlFor="task">task</label>
      <input
        required
        name="task"
        value={state.task}
        onChange={handleChange}
      />
      <button type="submit">Create Project</button>
    </form>
  );
}

export default NewProject;