import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import MonthCard from "./MonthCard";

class LineChart extends React.Component {
  state = {
    dataLine: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "2019 Spending (£)",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(225, 204,230, .3)",
          borderColor: "rgb(205, 130, 158)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(205, 130,1 58)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [this.props.month_sum_2019.jan, this.props.month_sum_2019.feb, this.props.month_sum_2019.mar, this.props.month_sum_2019.apr, this.props.month_sum_2019.may, this.props.month_sum_2019.jun, this.props.month_sum_2019.jul, this.props.month_sum_2019.aug, this.props.month_sum_2019.sep, this.props.month_sum_2019.oct, this.props.month_sum_2019.nov, this.props.month_sum_2019.dec]
        },
        {
          label: "2018 Spending (£)",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(184, 185, 210, .3)",
          borderColor: "rgb(35, 26, 136)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(35, 26, 136)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [this.props.month_sum_2018.jan, this.props.month_sum_2018.feb, this.props.month_sum_2018.mar, this.props.month_sum_2018.apr, this.props.month_sum_2018.may, this.props.month_sum_2018.jun, this.props.month_sum_2018.jul, this.props.month_sum_2018.aug, this.props.month_sum_2018.sep, this.props.month_sum_2018.oct, this.props.month_sum_2018.nov, this.props.month_sum_2018.dec]
        }
      ]
    }
  };

  render() {



    return (
      <MDBContainer>
        <h3 className="mt-5">Overview of Spending</h3>
        <hr/>
        <p> Total Spending 2019: £{this.props.total_2019.sum_of_year}.00 | Total Spending 2018: £{this.props.total_2018.sum_of_year}.00 </p>
        
        <Line 
        data={
            {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [
                  {
                    label: "2019 Spending (£)",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(225, 204,230, .3)",
                    borderColor: "rgb(205, 130, 158)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(205, 130,1 58)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [this.props.month_sum_2019.jan, this.props.month_sum_2019.feb, this.props.month_sum_2019.mar, this.props.month_sum_2019.apr, this.props.month_sum_2019.may, this.props.month_sum_2019.jun, this.props.month_sum_2019.jul, this.props.month_sum_2019.aug, this.props.month_sum_2019.sep, this.props.month_sum_2019.oct, this.props.month_sum_2019.nov, this.props.month_sum_2019.dec]
                  },
                  {
                    label: "2018 Spending (£)",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(184, 185, 210, .3)",
                    borderColor: "rgb(35, 26, 136)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(35, 26, 136)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [this.props.month_sum_2018.jan, this.props.month_sum_2018.feb, this.props.month_sum_2018.mar, this.props.month_sum_2018.apr, this.props.month_sum_2018.may, this.props.month_sum_2018.jun, this.props.month_sum_2018.jul, this.props.month_sum_2018.aug, this.props.month_sum_2018.sep, this.props.month_sum_2018.oct, this.props.month_sum_2018.nov, this.props.month_sum_2018.dec]
                  }
                ]
              }
        }
        options={{ responsive: true }} />

        <br/>
        <hr/>
        <br/>


        <div>

        <p> <u>Difference in Spending from previous year:</u> </p>
        <strong>2018-2019:</strong> { Math.round( (((this.props.total_2019.sum_of_year) - (this.props.total_2018.sum_of_year)) / (this.props.total_2018.sum_of_year))*10000)/100} %
            <br/>
            <hr/>

        <p> <u>Difference in Spending from previous year by month:</u ></p>
            <div className="month-card-container">
                {
                  ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug'].map(month => {
                    return (
                      <MonthCard sum18={this.props.month_sum_2018[month]} sum19={this.props.month_sum_2019[month]} month={month} key={month} />
                    )
                  })
                }
  
            </div>


        </div>

      </MDBContainer>
    );
  }
}

export default LineChart;
