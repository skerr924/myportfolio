import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Page404 from "./pages/Page404";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import MobileNavBar from "./components/MobileNavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <MobileNavBar />
          <Wrapper>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/portfolio">
                <Portfolio />
              </Route>
              <Route>
                <Page404 />
              </Route>
            </Switch>
          </Wrapper>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
