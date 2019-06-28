//------------------------------------------------------------------------------------------------------------------
// INVENTORY
//------------------------------------------------------------------------------------------------------------------
 

import React from 'react'

import Item from '../components/Item'

//------------------------------------------------------------------------------------------------------------------
// INVENTORY CLASS
//------------------------------------------------------------------------------------------------------------------
 
class Inventory extends React.Component {

// inital state  
//------------------------------------------------------------------------------------------------------------------
  state = {
    items: [
      {
        id: 1,
        name: 'Item 1',
        description: 'Stuff'
      },
      {
        id: 2,
        name: 'Item 2',
        description: 'Stuff'
      },
      {
        id: 3,
        name: 'Item 3',
        description: 'Stuff'
      }
    ]
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

// component did mount - no user => to signin page
//------------------------------------------------------------------------------------------------------------------ 
  //empty string are fasley - so if there is no user name the "this.props.username" will show up as falsey and we want it to push to the signin page
  // this will now when the page is refeshed since there is no username found it will push back to signin page
  // componentDidMount will run after the render
  componentDidMount(){
    if (!this.props.username){
      this.props.history.push('/signin')
    }
  }

// render component
//------------------------------------------------------------------------------------------------------------------
  render () {
    const { items } = this.state

    return (
      <div style={this.style} className='user-list'>
        <h3>Here's your inventory:</h3>
        { items.length === 0 && <p>Sorry, you don't have any items.</p>}
        {
          items.map(item =>
            <Item key={item.id} item={item} />
          )
        }
      </div>
    )
  }
}

//------------------------------------------------------------------------------------------------------------------
// EXPORT
//------------------------------------------------------------------------------------------------------------------
 

export default Inventory
