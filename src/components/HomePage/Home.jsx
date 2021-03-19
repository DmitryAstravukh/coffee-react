import React from 'react';
import {Link} from "react-router-dom";



import '../../App.css';


export default class Home extends React.Component {
    render(){
        return(
            <>
            
                <MenuFrame video={video2} descr="Удивляем не только напитками, но и блюдами" img={menuImg}/>
                <FormFrame video= {video3} descr="Хочешь стать частью нашей команды?" img={baristaImg}/>
                <LocationFrame video ={video1} descr="Как нас найти?" img={mapImg}/>
    
            </>
        );
    }
}