//------------------------------------------------------------------------------------------------------------------
// INVENTORY
//------------------------------------------------------------------------------------------------------------------
 

import React from 'react'

import Item from '../components/Item'

import ImgMediaCard from "../components/savingsCard"


// import {getInventory} from '../services/api'

//------------------------------------------------------------------------------------------------------------------
// INVENTORY CLASS
//------------------------------------------------------------------------------------------------------------------
 
class MapPots extends React.Component {

    // style = {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     alignItems: 'spaceAround',
    //     flexWrap: 'wrap',
    //     border: 10
    //   }




  render () {
  

    return (
      <div className="potCards">
        {
          this.props.userPots.map(item =>
            <ImgMediaCard item={item} />
          )
        }
      </div>
    )
  }
}

//------------------------------------------------------------------------------------------------------------------
// EXPORT
//------------------------------------------------------------------------------------------------------------------
 

export default MapPots
