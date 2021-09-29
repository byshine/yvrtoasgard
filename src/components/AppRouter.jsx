import React, { useEffect } from "react";
import Home from "../views/Home";
import { Switch, Route } from "react-router-dom";
import Team from "../views/Team";
import Album from "../views/Album";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../features/page/pageSlice";

function AppRouter() {
  const page = useSelector((state) => state.page.value);
  const history = useHistory();

  useEffect(() => {
    switch (page) {
      case 1:
        history.push("/");
        break;
      case 2:
        history.push("/album");
        break;
      case 3:
        history.push("/team");
        break;
      default:
        history.push("/");
    }
  }, [page]);

  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    const pathName = location.pathname;
    switch (pathName) {
      case "/":
        dispatch(setPage(1));
        break;
      case "/album":
        dispatch(setPage(2));
        break;
      case "/team":
        dispatch(setPage(3));
        break;
      default:
        dispatch(setPage(1));
        break;
    }
  }, []);

  return (
    <>
      <Switch>
        <Route path="/team" exact>
          <Team />
        </Route>
        <Route path="/album" exact>
          <Album />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default AppRouter;
