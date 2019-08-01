import React from "react";
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';

import {createTransaction} from "../services/api"



// import FilledInputAdornments from "../components/TextFormTran"


    class TransactionDetails extends React.Component {

        // inital state
        //------------------------------------------------------------------------------------------------------------------  
          state = {

            userID: this.props.user.id,
        
          }
        
    
    
        
        // handle submit function 
        //------------------------------------------------------------------------------------------------------------------
        
        handleSubmit = event => {
            event.preventDefault()
            
            createTransaction(event.target.company.value, event.target.amount.value, event.target.date.value, event.target.category.value, this.state.userID )
            .then( trans => this.props.updateTransactions(trans, true))

            this.props.closeModal()
        }

     
       
        // render component
        //------------------------------------------------------------------------------------------------------------------
          render () {
            // const { name, description, goal, date} = this.state
            const { handleSubmit } = this
        
        
            return (
              <div className="sign-in-up-form">
                <h3 className="form-headers"> Add Transaction details:</h3>
        
                <form onSubmit={handleSubmit}>
                <TextField
                  id='companyname'
                  label='Company'
                //   onChange={handleChange}
                  name='company'
                  required
                />
                <br />
                <TextField
                  id='transactionamount'
                  label='Amount'
                //   onChange={handleChange}
                  margin='normal'
                  name='amount'
                  type='number'
                  required
                />
                <br /> 
                <TextField
                  id='transactiondate'
                  label=''
                //   onChange={handleChange}
                  name='date'
                  type='date'
                  required
                />
                <br /> 

                <br/>

                <select name="category">
                 <option defaultValue value="bills">Bills</option>
                 <option value="subscriptions">Subscriptions</option>
                 <option value="food">Food</option>
                 <option value="travel">Travel</option>
                 <option value="phone">Phone</option>
                 <option value="holiday">Holiday</option>
                 <option value="retail">Retail</option>
                 <option value="tech">Tech</option>
                 <option value="other">Other</option>
                </select>

                
                <br />
               <br/>
                <Button type="submit" variant='contained' color='secondary'>
                  Submit Transaction
                </Button>
        
                </form>
               
              </div>
            )
          }
        }
        
        //------------------------------------------------------------------------------------------------------------------
        // EXPORT
        //------------------------------------------------------------------------------------------------------------------
         
        
        export default TransactionDetails