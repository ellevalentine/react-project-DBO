import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class OverAllChartsPage extends React.Component {

 
    
  state = {
    dataPie: {
      labels: ["Bills", "Subscriptions", "Food", "Travel", "Phone Contract", "Holidays", "Retail", "Tech", "Other"],
      datasets: [
        {
          data: [ this.props.BillsAmounts, this.props.SubscriptionsAmounts, this.props.FoodAmounts, this.props.TravelAmounts, this.props.PhoneAmounts, this.props.HolidayAmounts, this.props.RetailAmounts, this.props.TechAmounts,  this.props.OtherAmounts   ],
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
