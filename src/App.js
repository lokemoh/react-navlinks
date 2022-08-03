import "./App.css";
import HomePage from "./HomePage";
import NotFound from "./NotFound";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about" exact>
          <AboutPage/>
        </Route>
        <Route path="/contact" exact>
          <ContactPage />
        </Route>
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
