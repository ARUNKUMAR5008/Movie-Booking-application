import React from "react";
import './Header.css';
import logo from '../../assets/logo.svg';

class Header extends React.Component {

    render(){
        return (
            <div className="headerDiv">
               <img src={logo} className="logoImg" alt="logo" />
            </div>
        )
    }

}

export default Header;