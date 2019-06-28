//------------------------------------------------------------------------------------------------------------------
// IMPORTS
//------------------------------------------------------------------------------------------------------------------
 
import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { signin } from '../services/api'

//------------------------------------------------------------------------------------------------------------------
// SIGN IN FORM CLASS
//------------------------------------------------------------------------------------------------------------------
 
class SignInForm extends React.Component {

// inital state
//------------------------------------------------------------------------------------------------------------------  
  state = {
    username: '',
    password: ''
  }

// handle submit function (signin)
//------------------------------------------------------------------------------------------------------------------
  handleSubmit = () => {
    signin(this.state.username, this.state.password) // this signin function will return a promise
    .then( data => {
      if (data.error){
        alert(data.error)
      } else { 
        // debugger - use to check what data was been passed
        this.props.signin(data)
      }
    })
    // console.log(this.state)
  }

// handle chaneg function 
//------------------------------------------------------------------------------------------------------------------
//change the state to the users name that has just logged in 
handleChange = event =>
    this.setState({ [event.target.name]: event.target.value })

// render component
//------------------------------------------------------------------------------------------------------------------
  render () {
    const { username, password } = this.state
    const { handleChange, handleSubmit } = this

    return (
      <div>
        <TextField
          id='usernameInput'
          label='Username'
          value={username}
          onChange={handleChange}
          margin='normal'
          name='username'
        />
        <br />
        <TextField
          id='passwordInput'
          label='Password'
          value={password}
          onChange={handleChange}
          margin='normal'
          name='password'
          type='password'
        />
        <br />
        <Button onClick={handleSubmit} variant='contained' color='primary'>
          SUBMIT
        </Button>
      </div>
    )
  }
}

//------------------------------------------------------------------------------------------------------------------
// EXPORT
//------------------------------------------------------------------------------------------------------------------
 

export default SignInForm
