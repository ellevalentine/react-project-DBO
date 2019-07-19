//------------------------------------------------------------------------------------------------------------------
// INVENTORY
//------------------------------------------------------------------------------------------------------------------
 

import React from 'react'

import Item from '../components/Item'

import {getInventory} from '../services/api'

import FloatingActionButtonZoom from '../components/accountButtons'

//---------------------



//------------------------------------------------------------------------------------------------------------------
// INVENTORY CLASS
//------------------------------------------------------------------------------------------------------------------
 
class Inventory extends React.Component {

// inital state  
//------------------------------------------------------------------------------------------------------------------
  state = {
    inventory: [],
    userTransaction: this.props.transactions
  }
//------------------------------------------------------------------------------------------------------------------

// adding style
//------------------------------------------------------------------------------------------------------------------
  style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap'
  }


// set the state for the inventory
//------------------------------------------------------------------------------------------------------------------ 

  setInventory = () => {
    getInventory()
    .then( data => {
      if (data.error){
        alert (data.error)
      } else {
        this.setState({inventory: data})
      }
     } )
    }

// component did mount - no user => to signin page
//------------------------------------------------------------------------------------------------------------------ 


  //empty string are fasley - so if there is no user name the "this.props.username" will show up as falsey and we want it to push to the signin page
  // this will now when the page is refeshed since there is no username found it will push back to signin page
  // componentDidMount will run after the render
  componentDidMount(){
    if (!this.props.username){
      this.props.history.push('/signin')
    } else {
      this.setInventory()
    }
  }

// render component
//------------------------------------------------------------------------------------------------------------------
  render () {
    const { inventory, userTransaction} = this.state

    return (



      <div style={this.style} className='user-list'>
        <h3>Welcome back, {this.props.username}!</h3>

        <FloatingActionButtonZoom userTransaction={userTransaction} userPots={this.props.savingPots}/>

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
 

export default Inventory
