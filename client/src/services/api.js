 
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
// EXPORT
//------------------------------------------------------------------------------------------------------------------

 export default {signin, validate} 

 // we will be able to import validate by name or we can impoet the who api.js - this just gives us more options