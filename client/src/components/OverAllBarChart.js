import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class OverAllBarChart extends React.Component {
  state = {
    dataBar: {
      labels: ["Bills", "Subscriptions", "Food", "Travel", "Phone Contract", "Holidays", "Retail", "Tech", "Other"],
      datasets: [
        {
          label: "Total Spending (£)",
          data: [ this.props.BillsAmounts, this.props.SubscriptionsAmounts, this.props.FoodAmounts, this.props.TravelAmounts, this.props.PhoneAmounts, this.props.HolidayAmounts, this.props.RetailAmounts, this.props.TechAmounts,  this.props.OtherAmounts   ],
          backgroundColor: [
            "rgba(255, 134,159,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(255, 218, 128,0.4)",
            "rgba(113, 205, 205,0.4)",
            "rgba(170, 128, 252,0.4)",
            "rgba(255, 177, 101,0.4)",
            "rgba(123, 205, 205,0.4)",
            "rgba(200, 128, 252,0.4)",
            "rgba(170, 177, 101,0.4)"
          ],
          borderWidth: 2,
          borderColor: [
            "rgba(255, 134, 159, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(255, 218, 128, 1)",
            "rgba(113, 205, 205, 1)",
            "rgba(170, 128, 252, 1)",
            "rgba(255, 177, 101, 1)",
            "rgba(113, 205, 205, 1)",
            "rgba(170, 128, 252, 1)",
            "rgba(255, 177, 101, 1)"
          ]
        }
      ]
    },
    barChartOptions: {
      // responsive: false,
      // maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  }


  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Total Spending: £ {this.props.TotalSpending}.00 </h3>
        <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
      </MDBContainer>
    );
  }
}

export default OverAllBarChart;
