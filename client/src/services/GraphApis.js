//------------------------------------------------------------------------------------------------------------------
// sum of all transactions for each user
//------------------------------------------------------------------------------------------------------------------
 


export function allTransactionsSum(user_id) {

    

    return fetch("http://localhost:3000/transaction_sum", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: user_id
      })
    }).then(resp => resp.json()); //
  }


//------------------------------------------------------------------------------------------------------------------
// all transactions by category
//------------------------------------------------------------------------------------------------------------------
 


export function allTransactionsCategory(user_id) {


    return fetch("http://localhost:3000/transaction_category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: user_id
      })
    }).then(resp => resp.json()); //
  }


//------------------------------------------------------------------------------------------------------------------
// sum of each year
//------------------------------------------------------------------------------------------------------------------
 


export function sumOfEachYear(user_id, year) {



    return fetch("http://localhost:3000/sum_year", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: user_id,
        selected_year: year
      })
    }).then(resp => resp.json()); //
  }



  


//------------------------------------------------------------------------------------------------------------------
// EXPORT
//------------------------------------------------------------------------------------------------------------------

export default {allTransactionsSum, allTransactionsCategory} 
