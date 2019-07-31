//------------------------------------------------------------------------------------------------------------------
// IMPORTS
//------------------------------------------------------------------------------------------------------------------
 
import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { createPot } from '../services/api'

// import { Link } from 'react-router-dom'


//------------------------------------------------------------------------------------------------------------------
// FORM CLASS
//------------------------------------------------------------------------------------------------------------------
 
class NewPotForm extends React.Component {

// inital state
//------------------------------------------------------------------------------------------------------------------  
  state = {
    userID: this.props.user.id
  }



// handle submit function 
//------------------------------------------------------------------------------------------------------------------

handleSubmit = event => {
    event.preventDefault()
      
    createPot(event.target.name.value, event.target.description.value, event.target.goal.value, event.target.date.value, this.state.userID )
    .then(pots => this.props.updatePots(pots))
    this.props.closeModal()
    
}

// render component
//------------------------------------------------------------------------------------------------------------------
  render () {
    // const { name, description, goal, date} = this.state
    const { handleSubmit } = this


    return (
      <div className="sign-in-up-form">
        <h3 className="form-headers"> New Pot Details:</h3>

        <form onSubmit={handleSubmit}>
        <TextField
          id='potName'
          label='Pot Name'
        //   onChange={handleChange}
          name='name'
          required
        />
        <br />
        <TextField
          id='potDescription'
          label='Description'
        //   onChange={handleChange}
          margin='normal'
          name='description'
          type='text'
          required
        />
        <br /> 
        <TextField
          id='potGoal'
          label='Goal (£)'
        //   onChange={handleChange}
          name='goal'
          type='number'
          required
        />
        <br /> <br/>
        Money rasied by:
        <br /> <br/>

        <TextField
          id='potDate'
          label=''
        //   onChange={handleChange}
          name='date'
          type='date'
          required
        />
        <br />
       <br/>
        <Button type="submit" variant='contained' color='secondary'>
          Create Pot
        </Button>

        </form>
       
      </div>
    )
  }
}

//------------------------------------------------------------------------------------------------------------------
// EXPORT
//------------------------------------------------------------------------------------------------------------------
 

export default NewPotForm
