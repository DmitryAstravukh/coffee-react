import React from "react";
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  Redirect
} from "react-router-dom";
import MenuComponentsSwitcher from "./../../components/MenuComponents/MenuComponentsSwitcher";

import "./Menu.scss";

const Menu = () => {
    let { path, url } = useRouteMatch();
    
    return (
      <div className="wrapper">
        <nav>
          <ul className="menuNavLinks">
            <NavLink to={`${url}/coffeeAndTea`} className="menuLink">
              Кофе и чай
            </NavLink>
            <NavLink to={`${url}/breakfasts`} className="menuLink">
              Завтраки
            </NavLink>
            <NavLink to={`${url}/mainMenu`} className="menuLink">
              Что-то посерьезнее
            </NavLink>
            <NavLink to={`${url}/desserts`} className="menuLink">
              Десерты
            </NavLink>
            <NavLink to={`${url}/otherDrinks`} className="menuLink">
              Другие напитки
            </NavLink>
            
          </ul>
        </nav>
        
        {/* Если захочешь почитать про вложенные роуты */}
        {/* https://reactrouter.com/web/example/nesting */}

        {/* мой гит если захочешь что-то подсмотреть
        https://github.com/DmitryAstravukh 
        Удачи :)
        */}

        <Switch>
          <Route exact path={path}>
            {/* Либо выставляем заглушку и просим выбрать меню */}
            {/* <h3>Please select a menu item</h3> */}

            {/* либо можно редеректить сразу на какой-то компонент */}
            <Redirect from={path} to={`${url}/coffeeAndTea`} />
          </Route>
          <Route path={`${path}/:menuItem`}>
            <MenuComponentsSwitcher />
          </Route>
        </Switch>

      </div>
    );
 
}

export default Menu;
