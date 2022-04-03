import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/Homepage";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
//React-Router-Dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ResearchPage from "./components/ResearchPage/ResearchPage";
import Journals from "./components/Journals";
import PeoplePage from "./components/People page/Peoplepage";
import Projects from "./components/Projects";
function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/people" component={PeoplePage} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/research" component={ResearchPage} />
          <Route exact path="/journals" component={Journals} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
