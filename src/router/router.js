import React from "react";
import { Switch, Route } from "react-router-dom";
import { AppRoute, GuestRoute } from ".";
import { Auth } from "../pages/Auth";
import { Main } from "../pages/Main";
import { Projects } from "../pages/Projects";
import { Project } from "../pages/Project";
import { NewProject } from "../pages/NewProject";
import { ROUTES } from ".";

function AppRouter() {
  return (
    <Switch>
      <GuestRoute path="/login" exact>
        <Auth isLogin={true} />
      </GuestRoute>
      <GuestRoute path="/signup" exact>
        <Auth />
      </GuestRoute>
      {/* <AppRoute exact path="/private">
        <div>
          
        </div>
      </AppRoute> */}
      <AppRoute exact path="/">
        <Main />
      </AppRoute>

      <Route exact path="/projects" element={<Projects />} />

         
          {/* <Route path={ROUTES.root}>
            <Projects />
          </Route>
          <Route path={ROUTES.project}>
            <Project />
          </Route>

          <Route path={ROUTES.newProject}>
            <NewProject />
          </Route> */}
    </Switch>

/* <Routes>
<Route exact path=“/” element={<Home />} />
<Route exact path=“/beers” element={<Beers />} />
<Route path=“/random-beers” element={<RandomBeer />} />
<Route path=“/new-beer” element={<NewBeer />} />
<Route path=“/beers/:id” element={<DetailedBeer />} />
</Routes> */
  )
}

export default AppRouter;
