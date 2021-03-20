import Menu from "./pages/MenuPage/MenuPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";

import Breakfasts from './components/MenuComponents/Breakfasts.jsx';
import CoffeAndTea from './components/MenuComponents/CoffeeAndTea.jsx';
import MainMenu from './components/MenuComponents/MainMenu.jsx';
import Desserts from './components/MenuComponents/Desserts.jsx';
import OtherDrinks from './components/MenuComponents/OtherDrinks.jsx';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route
              path="/menu"
              component={Menu}
              render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/coffeAndTea`} component={CoffeAndTea} exact />
                  <Route path={`${url}/breakfasts`} component={Breakfasts} />
                  <Route path={`${url}/mainMenu`} component={MainMenu} />
                  <Route path={`${url}/desserts`} component={Desserts} />
                  <Route path={`${url}/otherDrinks`} component={OtherDrinks} />
                </>
              )}
            />
      </Switch>
    </Router>
  );
}

export default App;
