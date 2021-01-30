import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page_radio from "./Page_radio";
import Page_cekbox from "./Page_cekbox";
import Page_essay from "./Page_essay";
import Navbar from "./component/Navbar";
import Home from "./component/Home";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <Switch>
          <Route path="/radio">
            <Page_radio />
          </Route>
          <Route path="/cekbox">
            <Page_cekbox />
          </Route>
          <Route path="/essay">
            <Page_essay />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
