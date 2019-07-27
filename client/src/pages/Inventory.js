//------------------------------------------------------------------------------------------------------------------
// INVENTORY
//------------------------------------------------------------------------------------------------------------------
 

import React from 'react'

import Item from '../components/Item'

import {getInventory} from '../services/api'

import FloatingActionButtonZoom from '../components/accountButtons'


import {allTransactionsSum} from '../services/GraphApis'
import {allTransactionsCategory} from '../services/GraphApis'
import {sumOfEachYear} from '../services/GraphApis'










//---------------------



//------------------------------------------------------------------------------------------------------------------
// INVENTORY CLASS
//------------------------------------------------------------------------------------------------------------------
 
class Inventory extends React.Component {

// inital state  
//------------------------------------------------------------------------------------------------------------------
  state = {
    inventory: [], 
    total_sum: "",
    total_category: [],
    year_sum_2019: "",
    year_sum_2018: ""
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
      // if (data.error){
      //   alert (data.error)
      // } else {
        this.setState({inventory: data})
      // }
     } )
    }


    setTransactionsTotalSum = () => {
      
      allTransactionsSum(this.props.user.id)
      .then( data => {
          this.setState({total_sum: data})
       } )
      }


    setTransactionsTotalCategory = () => {
      
      allTransactionsCategory(this.props.user.id)
        .then( data => {
            this.setState({total_category: data})
         } )
        }

      set2019Sum = () => {
      
          sumOfEachYear(this.props.user.id, "2019")
            .then( data => {
                this.setState({year_sum_2019: data})
              } )
           }

      set2018Sum = () => {
      
          sumOfEachYear(this.props.user.id, "2018")
             .then( data => {
                  this.setState({year_sum_2018: data})
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
      
      this.setTransactionsTotalSum()
      this.setTransactionsTotalCategory()
      this.set2019Sum()
      this.set2018Sum()
      
    }
  }

// render component
//------------------------------------------------------------------------------------------------------------------
  render () {
    // const { inventory, userTransaction} = this.state

    return (



      <div style={this.style} className='user-list'>
      <br/>
      <br/>
        <h3>Welcome back, {this.props.username}!</h3>
        <br/>
      <br/>

        {/* <AllStats/> */}
        <br/>

        <FloatingActionButtonZoom totalSum={this.state.total_sum} totalCategory={this.state.total_category} user={this.props.user} userTransaction={this.props.transactions} userPots={this.props.savingPots} allstocks={this.props.allstocks}/>

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
