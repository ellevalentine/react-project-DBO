 
//------------------------------------------------------------------------------------------------------------------
// urls
//------------------------------------------------------------------------------------------------------------------

const baseURL = 'http://localhost:3000'
const signinURL = baseURL + '/signin'

//------------------------------------------------------------------------------------------------------------------
// sign in post request 
//------------------------------------------------------------------------------------------------------------------
 
 export function signin (username, password) {
     return fetch(signinURL, {
         method: 'POST',
         headers: {'content-type': 'application/json'},
         body: JSON.stringify({username, password})
    }).then(resp => resp.json())
 }


 //------------------------------------------------------------------------------------------------------------------
// validate get request 
//------------------------------------------------------------------------------------------------------------------
 
 export function validate () {
    return fetch('http://localhost:3000/validate', {
         headers: { 'Authorisation': localStorage.token}
     }).then( resp => resp.json())
 }

//------------------------------------------------------------------------------------------------------------------
// inventory get request 
//------------------------------------------------------------------------------------------------------------------
 

export function getInventory(){ 

    return fetch('http://localhost:3000/inventory', {
         headers: {'Authorisation': localStorage.token}
        }).then(r => r.json())

}

//------------------------------------------------------------------------------------------------------------------
// create user
//------------------------------------------------------------------------------------------------------------------
 

export function createUser(username, password){ 
    

     return fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }).then(resp => resp.json()) //

}

//------------------------------------------------------------------------------------------------------------------
// Transactions get request 
//------------------------------------------------------------------------------------------------------------------
 

export function getTransactions(){ 

    return fetch('http://localhost:3000/transactions', {
         headers: {
            'Content-Type': 'application/json'
            }
        }).then(r => r.json())

}

//------------------------------------------------------------------------------------------------------------------
// Saving pots get request 
//------------------------------------------------------------------------------------------------------------------
 

export function getUsers(id){ 

    return fetch(`http://localhost:3000/users/${id}`, {
         headers: {
            'Content-Type': 'application/json'
            }
        }).then(r => r.json())

}

//------------------------------------------------------------------------------------------------------------------
// Stocks all get request 
//------------------------------------------------------------------------------------------------------------------
 

export function getAllStocks(){ 

    return fetch('http://localhost:3000/allstocks', {
         headers: {
            'Content-Type': 'application/json'
            }
        }).then(r => r.json())

}

//------------------------------------------------------------------------------------------------------------------
// create transcation 
//------------------------------------------------------------------------------------------------------------------
 

export function createTransaction(company, amount, date, category, id) {
    return fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        company: company,
        amount: amount,
        date: date,
        category: category,
        user_id: id
      })
    }).then(resp => resp.json())
  
  }

  //------------------------------------------------------------------------------------------------------------------
// create pot
//------------------------------------------------------------------------------------------------------------------

export function createPot(name, description, goal, date, id) {

    return fetch("http://localhost:3000/savingpots", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        description: description,
        goal: goal,
        date: date,
        user_id: id
      })
    }).then(resp => resp.json()); //
  }


//------------------------------------------------------------------------------------------------------------------
// delete pot
//------------------------------------------------------------------------------------------------------------------


    export function deleteSavingPot(id) {

    const commentURL = `http://localhost:3000/savingpots/${id}`

    return fetch(commentURL, {
        method: 'DELETE'
    }).then(resp => resp.json())
}

//------------------------------------------------------------------------------------------------------------------
// EXPORT
//------------------------------------------------------------------------------------------------------------------

 export default {signin, validate, getInventory, getTransactions, getUsers, getAllStocks, createTransaction, deleteSavingPot} 

 // we will be able to import validate by name or we can impoet the who api.js - this just gives us more options