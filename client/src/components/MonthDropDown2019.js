import React from 'react'

import MonthsBarChart from "../components/MonthsReuseableBarChart"





class MonthDropDown2019 extends React.Component {

  state = {
    MonthSelected: "jan"
  }




  selectedMonth = (event) => {
    event.preventDefault()

    this.setState({MonthSelected: event.target.value})
  
  }

  MonthlyGraph = () => {

    switch (this.state.MonthSelected) {
        case "jan":
          return ( <div>
            <br/>
            <h2> 2019  JAN spending </h2>
            <MonthsBarChart   />

            {/* <MonthsBarChart TotalSpending={SUMJan2019} OtherAmounts={otherJan2019} TechAmounts={techJan2019} RetailAmounts={retailJan2019} HolidayAmounts={holidayJan2019} PhoneAmounts={phoneJan2019} TravelAmounts={travelJan2019} FoodAmounts={foodJan2019} BillsAmounts={billsJan2019} SubscriptionsAmounts={subscriptionsJan2019}  /> */}
            </div> ) 
          break;

        case"feb":
          return ( <div>
            <br/>
            <h2> 2019  FEB spending </h2>
            {/* <ReuseableBarChart TotalSpending={SUMFeb2019} OtherAmounts={otherFeb2019} TechAmounts={techFeb2019} RetailAmounts={retailFeb2019} HolidayAmounts={holidayFeb2019} PhoneAmounts={phoneFeb2019} TravelAmounts={travelFeb2019} FoodAmounts={foodFeb2019} BillsAmounts={billsFeb2019} SubscriptionsAmounts={subscriptionsFeb2019}  /> */}
            </div> )  
          break;

        case "mar":
           return ( <div>
            <br/>
            <h2> 2019  MAR spending </h2>
            {/* <ReuseableBarChart TotalSpending={SUMMar2019} OtherAmounts={otherMar2019} TechAmounts={techMar2019} RetailAmounts={retailMar2019} HolidayAmounts={holidayMar2019} PhoneAmounts={phoneMar2019} TravelAmounts={travelMar2019} FoodAmounts={foodMar2019} BillsAmounts={billsMar2019} SubscriptionsAmounts={subscriptionsMar2019}  /> */}
            </div> )  
          break;

        case "apr":
          return ( <div>
            <br/>
            <h2> 2019  APR spending </h2>
            {/* <ReuseableBarChart TotalSpending={SUMMar2019} OtherAmounts={otherMar2019} TechAmounts={techMar2019} RetailAmounts={retailMar2019} HolidayAmounts={holidayMar2019} PhoneAmounts={phoneMar2019} TravelAmounts={travelMar2019} FoodAmounts={foodMar2019} BillsAmounts={billsMar2019} SubscriptionsAmounts={subscriptionsMar2019}  /> */}
             </div> )  
          break;

        case "may":
          return ( <div>
            <br/>
            <h2> 2019  MAY spending </h2>
            {/* <ReuseableBarChart TotalSpending={SUMMay2019} OtherAmounts={otherMay2019} TechAmounts={techMay2019} RetailAmounts={retailMay2019} HolidayAmounts={holidayMay2019} PhoneAmounts={phoneMay2019} TravelAmounts={travelMay2019} FoodAmounts={foodMay2019} BillsAmounts={billsMay2019} SubscriptionsAmounts={subscriptionsMay2019}  /> */}
            </div> )  
          break;

        case "jun":
          return ( <div>
            <br/>
            <h2> 2019  JUN spending </h2>
            {/* <ReuseableBarChart TotalSpending={SUMJun2019} OtherAmounts={otherJun2019} TechAmounts={techJun2019} RetailAmounts={retailJun2019} HolidayAmounts={holidayJun2019} PhoneAmounts={phoneJun2019} TravelAmounts={travelJun2019} FoodAmounts={foodJun2019} BillsAmounts={billsJun2019} SubscriptionsAmounts={subscriptionsJun2019}  /> */}
            </div> )  
          break;

        case "jul":
          return ( <div>
            <br/>
            <h2> 2019  JUL spending </h2>
            {/* <ReuseableBarChart TotalSpending={SUMJul2019} OtherAmounts={otherJul2019} TechAmounts={techJul2019} RetailAmounts={retailJul2019} HolidayAmounts={holidayJul2019} PhoneAmounts={phoneJul2019} TravelAmounts={travelJul2019} FoodAmounts={foodJul2019} BillsAmounts={billsJul2019} SubscriptionsAmounts={subscriptionsJul2019}  /> */}
            </div> )  
          break;

        case "aug":
            return ( <div>
              <br/>
              <h2> 2019  AUG spending </h2>
            {/* <ReuseableBarChart TotalSpending={SUMAug2019} OtherAmounts={otherAug2019} TechAmounts={techAug2019} RetailAmounts={retailAug2019} HolidayAmounts={holidayAug2019} PhoneAmounts={phoneAug2019} TravelAmounts={travelAug2019} FoodAmounts={foodAug2019} BillsAmounts={billsAug2019} SubscriptionsAmounts={subscriptionsAug2019}  /> */}
           </div> )   
            break;

        case "sep":
             return ( <div>
              <br/>
              <h2> 2019  SEP spending </h2>
            {/* <ReuseableBarChart TotalSpending={SUMSep2019} OtherAmounts={otherSep2019} TechAmounts={techSep2019} RetailAmounts={retailSep2019} HolidayAmounts={holidaySep2019} PhoneAmounts={phoneSep2019} TravelAmounts={travelSep2019} FoodAmounts={foodSep2019} BillsAmounts={billsSep2019} SubscriptionsAmounts={subscriptionsSep2019}  /> */}
            </div> )  
            break;

        case "oct":
            return ( <div>
              <br/>
              <h2> 2019  OCT spending </h2>
            {/* <ReuseableBarChart TotalSpending={SUMOct2019} OtherAmounts={otherOct2019} TechAmounts={techOct2019} RetailAmounts={retailOct2019} HolidayAmounts={holidayOct2019} PhoneAmounts={phoneOct2019} TravelAmounts={travelOct2019} FoodAmounts={foodOct2019} BillsAmounts={billsOct2019} SubscriptionsAmounts={subscriptionsOct2019}  /> */}
            </div> )  
            break;

        case "nov":
            return ( <div>
              <br/>
              <h2> 2019  NOV spending </h2>
            {/* <ReuseableBarChart TotalSpending={SUMNov2019} OtherAmounts={otherNov2019} TechAmounts={techNov2019} RetailAmounts={retailNov2019} HolidayAmounts={holidayNov2019} PhoneAmounts={phoneNov2019} TravelAmounts={travelNov2019} FoodAmounts={foodNov2019} BillsAmounts={billsNov2019} SubscriptionsAmounts={subscriptionsNov2019}  /> */}
            </div> )  
            break;

        case "dec":
            return ( <div>
              <br/>
              <h2> 2019  DEC spending </h2>
            {/* <ReuseableBarChart TotalSpending={SUMDec2019} OtherAmounts={otherDec2019} TechAmounts={techDec2019} RetailAmounts={retailDec2019} HolidayAmounts={holidayDec2019} PhoneAmounts={phoneDec2019} TravelAmounts={travelDec2019} FoodAmounts={foodDec2019} BillsAmounts={billsDec2019} SubscriptionsAmounts={subscriptionsDec2019}  /> */}
            </div> )  
            break;
      }
  }




  render () {

    
    return (

    <div>
        <select onChange={this.selectedMonth} name="category">
            <option selected value="jan">Jan</option>
            <option value="feb">Feb</option>
            <option value="mar">Mar</option>
            <option value="apr">Apr</option>
            <option value="may">May</option>
            <option value="jun">Jun</option>
            <option value="jul">Jul</option>
            <option value="aug">Aug</option>
            <option value="sep">Sep</option>
            <option value="oct">Oct</option>
            <option value="nov">Nov</option>
            <option value="dev">Dec</option>
        </select>
    <div>
        {this.MonthlyGraph()}
    </div>


</div>
     
     
    )
  }
}



export default MonthDropDown2019
