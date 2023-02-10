// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Homepage from './Homepage';
import Gallery from "./Gallery";
import Header from "./Header";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* <Route path="/detail/:id">
            <Detail />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
