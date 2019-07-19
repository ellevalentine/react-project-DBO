 
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
 

export function getSavingPots(){ 

    return fetch('http://localhost:3000/savingpots', {
         headers: {
            'Content-Type': 'application/json'
            }
        }).then(r => r.json())

}

//------------------------------------------------------------------------------------------------------------------
// EXPORT
//------------------------------------------------------------------------------------------------------------------

 export default {signin, validate, getInventory, getTransactions, getSavingPots} 

 // we will be able to import validate by name or we can impoet the who api.js - this just gives us more options