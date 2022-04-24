import React from "react";
import './Header.css';
import logo from '../../assets/logo.svg';
import Button from "@material-ui/core/Button";

class Header extends React.Component {
    render() {
      return (
        <div className="headerDiv">
          <img
            src={logo}
            alt="logo"
            className="logoImg"
          />
  
          {this.props.showBookShowButton === "true" ? (
            <div className="bookshow-button">
              <Button variant="contained" color="primary">
                Book Show
              </Button>
            </div>
          ) : (
            ""
          )}
        </div>
      );
    }
  }

export default Header;