
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
        {/* <div className="navbar-link">
          <Link className="Homepage-link" to="/inventory">
            My Account
          </Link>
        </div> */}
        <div className="navbar-link">
          <Link onClick={this.props.signout} className="Homepage-link" to="/">
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
          {/* <div className="navbar-link">
            <Link className="Homepage-link" to="/">
              Home Page
            </Link>
          </div> */}
       
          <div className="navbar-link">{this.sessionHeader()}</div>
        </nav>
      </header>
    );
  }
}
export default Header;


// //------------------------------------------------------------------------------------------------------------------
// // IMPORTS
// //------------------------------------------------------------------------------------------------------------------
 
// import React from 'react'

// import { Link } from 'react-router-dom'
// import Button from '@material-ui/core/Button'

// // import logo from '../logo.svg'




// //---------------------------------------------------------------------------------------------------------
// // HEADER FUNCTION
// //------------------------------------------------------------------------------------------------------------------
 
// const Header = props =>
//   <header className='App-header'>

//   <nav className="navbar navbar-default navbar-fixed-top">
// 			<div className="container">
// 				<div className="navbar-header">
// 					<div className="navbar-brand">
          
//           <Link to='/'><img src={require('./logo.jpg')}  className='App-logo' alt='logo'  /></Link>
// <br/>
//           <Link className="Homepage-link" to='/' >Home Page</Link> 
//           <Link className="Homepage-link" to='/signin' >SignIn</Link>
//           <Link className="Homepage-link" to='/signup' >SignUp</Link>
          
//           </div>
          
// 				</div>
// 			</div>
// 		</nav>

//     <h1 className='App-title'>
//       {/* {
//         props.username
//         ? `Welcome back, ${props.username}!`
//         : 'Welcome!'
//       } */}
//       <br/>
//       {
//        props.username && 
         
//           <Button onClick={props.signout} variant='contained' color='secondary'>
//              SIGN OUT   
//           </Button>
//       }
//     </h1>
//   </header>

// //------------------------------------------------------------------------------------------------------------------
// // EXPORT
// //------------------------------------------------------------------------------------------------------------------
 
// export default Header


// // if user name is not false then reuturn welcome back ..... => if it is falsey then return welcome to react.