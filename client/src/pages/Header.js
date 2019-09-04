
//------------------------------------------------------------------------------------------------------------------
// IMPORTS
//------------------------------------------------------------------------------------------------------------------

import React from "react";

import { Link } from "react-router-dom";
// import Button from "@material-ui/core/Button";

// import logo from '../logo.svg'

//---------------------------------------------------------------------------------------------------------
// HEADER FUNCTION
//------------------------------------------------------------------------------------------------------------------

class Header extends React.Component {
  sessionHeader = () => {
    return this.props.username !== "" ? (
      <div>
        <div className="navbar-link">
          <Link onClick={this.props.signout} className="Homepage-link" to="/signin">
            SignOut
          </Link>
        </div>
      </div>
    ) : (
      <div>
        <div className="navbar-link">
          <Link className="Homepage-link" to="/signin">
            SignIn
          </Link>
        </div>
        <div className="navbar-link">
          <Link className="Homepage-link" to="/signup">
            SignUp
          </Link>
        </div>
      </div>
    );
  };

  render() {
    return (
      <header className="App-header">
        <nav className="navbar">
          <div className="navbar-link title">
          <Link to="/">
              <img
                src={require('./logo.jpg')}
                className="App-logo"
                alt="logo"
              />
            </Link>
          </div>
          <div className="navbar-link">{this.sessionHeader()}</div>
        </nav>
      </header>
    );
  }
}
export default Header;

