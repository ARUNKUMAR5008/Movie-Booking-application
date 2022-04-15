import React from "react";
import './Home.css';
import Header from '../../common/header/Header';
import GridUpcoming from "./GridUpcoming";
import GridReleased from "./GridReleased";

class Home extends React.Component {

    render(){
        return (
            <div className="homeDiv">
                <Header />
                <span className="heading">Upcoming Movies</span>
                <GridUpcoming />
                <div className="flex-container">
                    <div className="left"><GridReleased /></div>
                    <div className="right"></div>
                    
                </div>
            </div>
        )
    }

}


export default Home;