import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./Menu.scss";

class Menu extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <nav>
          <ul className="menuNavLinks">
            <NavLink exact to="/menu/coffeeAndTea" className="menuLink">
                Кофе и чай
              </NavLink>
              <NavLink to="/menu/breakfasts" className="menuLink">
                Завтраки
              </NavLink>
              <NavLink to="/menu/mainMenu" className="menuLink">
                Что-то посерьезнее
              </NavLink>
              <NavLink to="/menu/desserts" className="menuLink">
                Десерты
              </NavLink>
              <NavLink to="/menu/otherDrinks" className="menuLink">
                Другие напитки
              </NavLink>
            
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
