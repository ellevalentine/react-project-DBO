//------------------------------------------------------------------------------------------------------------------
// IMPORTS
//------------------------------------------------------------------------------------------------------------------
 
import React from 'react'

import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

import logo from '../logo.svg'

//------------------------------------------------------------------------------------------------------------------
// HEADER FUNCTION
//------------------------------------------------------------------------------------------------------------------
 
const Header = props =>
  <header className='App-header'>
    <Link to='/'><img src={logo} className='App-logo' alt='logo' /></Link>
    <h1 className='App-title'>
      {
        props.username
        ? `Welcome back, ${props.username}!`
        : 'Welcome!.'
      }
      {
       props.username && 
          <Button onClick={props.signout} variant='contained' color='primary'>
             SIGN OUT   
          </Button>
      }
    </h1>
  </header>

//------------------------------------------------------------------------------------------------------------------
// EXPORT
//------------------------------------------------------------------------------------------------------------------
 
export default Header


// if user name is not false then reuturn welcome back ..... => if it is falsey then return welcome to react.