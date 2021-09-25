import React, { useEffect } from "react";
import Home from "../views/Home";
import { Switch, Route } from "react-router-dom";
import Team from "../views/Team";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function AppRouter() {
  const page = useSelector((state) => state.page.value);

  const history = useHistory();
  useEffect(() => {
    switch (page) {
      case 1:
        history.push("/");
        break;
      case 2:
        history.push("/team");
        break;
      default:
        history.push("/");
    }
  }, [page]);
  return (
    <>
      <Switch>
        <Route path="/team" exact>
          <Team />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default AppRouter;
