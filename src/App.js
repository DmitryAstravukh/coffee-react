// import Home from './components/HomePage/Home';
import Menu from './components/MenuPage/Menu';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; 


import LocationFrame from './components/HomePage/HomeFrames/LocationFrame';
import FormFrame from '.components/HomePage/HomeFrames/FormFrame';
import MenuFrame from '.components/HomePage/HomeFrames/MenuFrame';

import video1 from '../../content/videos/video1.mp4';
import video2 from '../../content/videos/video2.mp4';
import video3 from '../../content/videos/video3.mp4';

import menuImg from '../../content/imgs/croissant.svg';
import baristaImg from '../../content/imgs/barista.svg';
import mapImg from '../../content/imgs/map.svg';
import './App.css';
function App() {
  return (
    <Router>
    <div className="container"> 
    <MenuFrame video={video2} descr="Удивляем не только напитками, но и блюдами" img={menuImg}/>
                <FormFrame video= {video3} descr="Хочешь стать частью нашей команды?" img={baristaImg}/>
                <LocationFrame video ={video1} descr="Как нас найти?" img={mapImg}/>
      </div>

      
      <Switch>
          <Route exact path="/menu">
            <Menu />
          </Route>
        </Switch>
      
  </Router>
  );
}

export default App;
