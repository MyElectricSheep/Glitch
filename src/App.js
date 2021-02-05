import React from "react";
import Intro from "./Intro";
import About from "./About";
import Main from "./Main";
import { Switch, Route } from "react-router-dom";
import "./styles/app.css";

import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  Aos.init();
  return (
    <>
      <Switch>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Intro />
        </Route>
      </Switch>
    </>
  );
};

export default App;
