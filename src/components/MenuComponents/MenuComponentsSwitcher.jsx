import React from 'react';
import { useParams } from "react-router-dom";
import CoffeeAndTea from "./CoffeeAndTea";
import Breakfasts from "./Breakfasts";
import MainMenu from "./MainMenu";
import Desserts from "./Desserts";
import OtherDrinks from "./OtherDrinks";

const MenuComponentsSwitcher = () => {
    let { menuItem } = useParams();
    switch (menuItem) {       
        case "coffeeAndTea":return <CoffeeAndTea />      
        case "breakfasts":return <Breakfasts />
        case "mainMenu":return <MainMenu />
        case "desserts":return <Desserts />
        case "otherDrinks":return <OtherDrinks />
        default: return <h3>Выберите пункт меню</h3>
    }
}

export default MenuComponentsSwitcher;