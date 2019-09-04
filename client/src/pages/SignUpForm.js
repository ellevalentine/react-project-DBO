//------------------------------------------------------------------------------------------------------------------
// IMPORTS
//------------------------------------------------------------------------------------------------------------------
 
import React from 'react'
import Button from '@material-ui/core/Button'
import { createUser } from '../services/api'



//------------------------------------------------------------------------------------------------------------------
// SIGN IN FORM CLASS
//------------------------------------------------------------------------------------------------------------------
 
class SignUpForm extends React.Component {

// inital state
//------------------------------------------------------------------------------------------------------------------  
  state = {
    username: '',
    password: ''
  }

  handleSubmit = event => {
  event.preventDefault()

  createUser(event.target.username.value, event.target.password.value)
     
  }


// render component
//------------------------------------------------------------------------------------------------------------------
  render () {
    const { handleSubmit } = this
    return (
      <div className="signInform" >
        <h3>Sign Up:</h3> <br/>
        <hr/>
        <p>Please enter a Username:</p>

        <form onSubmit={handleSubmit}>
        <input
          margin='normal'
          name='username'
        />
        <hr/>
        <br />
        <hr/>
        <p>Please enter a Password:</p>
        <input
          name='password'
          type='password'
        />

        <hr/>
        <br />
        <Button type="submit" variant='contained' color='primary'>
          SUBMIT
        </Button>

        </form>

        <img
              alt="oh no!"
              className="signInPicture"
              src="http://www.drinkingwaterfountains.co.uk/wp/wp-content/uploads/2018/04/installation-service.jpg"
            />
      
    
      </div>
    )
  }
}

//------------------------------------------------------------------------------------------------------------------
// EXPORT
//------------------------------------------------------------------------------------------------------------------
 

export default SignUpForm