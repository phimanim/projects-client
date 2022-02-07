import React from "react";
import { Switch} from "react-router-dom";
import { AppRoute, GuestRoute } from ".";
import { Auth } from "../pages/Auth";
import { Main } from "../pages/Main";
import { Projects } from "../pages/Projects";
import { Project } from "../pages/Project";
import { NewProject } from "../pages/NewProject";

function AppRouter() {
  return (
    <Switch>
      <GuestRoute path="/login" exact>
        <Auth isLogin={true} />
      </GuestRoute>
      <GuestRoute path="/signup" exact>
        <Auth />
      </GuestRoute>
      <AppRoute exact path="/">
        <Main />
      </AppRoute>
      <AppRoute exact path="/projects">
        <Projects/>
      </AppRoute>
      <AppRoute exact path="/new-project">
        <NewProject/>
      </AppRoute>
      <AppRoute exact path="/project/:projectId">
        <Project/>
      </AppRoute>
    </Switch>
  );
}

export default AppRouter;
