import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

import {allTransactionsSum} from '../services/GraphApis'
import {allTransactionsCategory} from '../services/GraphApis'



class OverAllChartsPage extends React.Component {

    
  state = {
    dataPie: {
      labels: ["Bills", "Subscriptions", "Food", "Travel", "Phone Contract", "Holidays", "Retail", "Tech", "Other"],
      datasets: [
        {
             data: [
        this.props.BillsAmounts,
        this.props.SubscriptionsAmounts,
        this.props.FoodAmounts,
        this.props.TravelAmounts,
        this.props.PhoneAmounts,
        this.props.HolidayAmounts,
        this.props.RetailAmounts,
        this.props.TechAmounts,
        this.props.OtherAmounts
      ],
          // data: [1,2,3,4,5,6,7,8,9],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#5afffc",
            "#5eff5a",
            "#a95aff",
            "#ffa95a",
            "#ff5ab0",
            "#FFF8DC",
            "#8FBC8F"
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#5afffc",
            "#5eff5a",
            "#a95aff",
            "#ffa95a",
            "#ff5ab0",
            "#FFF8DC",
            "#8FBC8F",
          ]
        }
      ]
    }
  }

  setTransactionsTotalSum = () => {
      
    allTransactionsSum(this.props.user.id)
    .then( data => {
        this.setState({spending: data})
      } )
    }


  setTransactionsTotalCategory = () => {
    
    allTransactionsCategory(this.props.user.id)
      .then( data => {
          // this.setState({total_category: data})
          this.setState({data: [data.BillsAmounts, data.SubscriptionsAmounts, data.FoodAmounts, data.TravelAmounts, data.PhoneAmounts, data.HolidayAmounts, data.RetailAmounts, data.TechAmounts, data.OtherAmounts]})
        } )

       
      }

  componentDidMount(){
       
      this.setTransactionsTotalCategory()

  }

  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Total Spending: £ {this.props.TotalSpending}.00 </h3>
        <Pie data={this.state.dataPie} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default OverAllChartsPage;
