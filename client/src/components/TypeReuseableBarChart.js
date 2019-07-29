import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ReuseableBarChart extends React.Component {
  state = {
    dataBar: {
      labels: ["Bills", "Subscriptions", "Food", "Travel", "Phone Contract", "Holidays", "Retail", "Tech", "Other"],
      datasets: [
        {
          label: "Total Spending (£)",
          data:[this.props.allData.bills, this.props.allData.sub , this.props.allData.food,this.props.allData.travel, this.props.allData.phone, this.props.allData.holiday, this.props.allData.retail, this.props.allData.tech, this.props.allData.other],
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

  updateMonth = () => {
    switch (this.state.MonthSelected) {
      case "jan":
        return ( <div>
          <br/>
          <h2> 2019  JAN spending </h2>
          <ReuseableBarChart 
          total={this.props.month_sum_2019.jan}
          allData={this.props.month_categories_2019.jan} 
           />
          </div> ) 
        break;

      case"feb":
        return ( <div>
          <br/>
          <h2> 2019  FEB spending </h2>
          <ReuseableBarChart 
          total={this.props.month_sum_2019.feb}
          allData={this.props.month_categories_2019.feb} 

           />
          </div> )  
        break;

      case "mar":
         return ( <div>
          <br/>
          <h2> 2019  MAR spending </h2>
          <ReuseableBarChart 
          total={this.props.month_sum_2019.mar}
          allData={this.props.month_categories_2019.mar} 
           />            </div> )  
        break;

      case "apr":
        return ( <div>
          <br/>
          <h2> 2019  APR spending </h2>
          <ReuseableBarChart
          total={this.props.month_sum_2019.apr}
          allData={this.props.month_categories_2019.apr} 

           />             </div> )  
        break;

      case "may":
        return ( <div>
          <br/>
          <h2> 2019  MAY spending </h2>
          <ReuseableBarChart
          total={this.props.month_sum_2019.may}
          allData={this.props.month_categories_2019.may} 

           />            </div> )  
        break;

      case "jun":
        return ( <div>
          <br/>
          <h2> 2019  JUN spending </h2>
          <ReuseableBarChart 
          total={this.props.month_sum_2019.jun}
          allData={this.props.month_categories_2019.jun} 
           />            </div> )  
        break;

      case "jul":
        return ( <div>
          <br/>
          <h2> 2019  JUL spending </h2>
          <ReuseableBarChart 
          total={this.props.month_sum_2019.jul}
          allData={this.props.month_categories_2019.jul} 
           />            </div> )  
        break;

      case "aug":
          return ( <div>
            <br/>
            <h2> 2019  AUG spending </h2>
            <ReuseableBarChart 
            total={this.props.month_sum_2019.aug}
            allData={this.props.month_categories_2019.aug} 
           />           </div> )   
          break;

      case "sep":
           return ( <div>
            <br/>
            <h2> 2019  SEP spending </h2>
            <ReuseableBarChart 
            total={this.props.month_sum_2019.sep}
            allData={this.props.month_categories_2019.sep} 

           />            </div> )  
          break;

      case "oct":
          return ( <div>
            <br/>
            <h2> 2019  OCT spending </h2>
            <ReuseableBarChart 
            total={this.props.month_sum_2019.oct}
            allData={this.props.month_categories_2019.oct} 

           />            </div> )  
          break;

      case "nov":
          return ( <div>
            <br/>
            <h2> 2019  NOV spending </h2>
            <ReuseableBarChart 
            total={this.props.month_sum_2019.nov}
            allData={this.props.month_categories_2019.nov} 

           />            </div> )  
          break;

      case "dec":
          return ( <div>
            <br/>
            <h2> 2019  DEC spending </h2>
            <ReuseableBarChart 
            total={this.props.month_sum_2019.dec}
            allData={this.props.month_categories_2019.dec} 
           />            </div> )  
          break;
          default:
          return( <div>
            <br/>
            <h2> 2019  JAN spending </h2>
            <ReuseableBarChart 
            total={this.props.month_sum_2019.jan}
            allData={this.props.month_categories_2019.jan} 
           />            </div> )  
    }

  }


  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Total Spending: £ {this.props.total}.00 </h3>
        <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
      </MDBContainer>
    );
  }
}

export default ReuseableBarChart;