import React from "react";
import { Switch } from "react-router-dom";
import { AppRoute, GuestRoute } from ".";
import { Auth } from "../pages/Auth";
import { Main } from "../pages/Main";

function AppRouter() {
  return (
    <Switch>
      <GuestRoute path="/login" exact>
        <Auth isLogin={true} />
      </GuestRoute>
      <GuestRoute path="/signup" exact>
        <Auth />
      </GuestRoute>
      <AppRoute exact path="/private">
        <div>
          <h2>Private</h2>
          <p>Should only render if user is logged in</p>
        </div>
      </AppRoute>
      <AppRoute exact path="/">
        <Main />
      </AppRoute>
    </Switch>
  );
}

export default AppRouter;
