import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class OverAllChartsPage extends React.Component {

 
    
  state = {
    dataPie: {
      labels: ["Bills", "Subscriptions", "Food", "Travel", "Phone Contract", "Holidays", "Other"],
      datasets: [
        {
          data: [ 10, 20, 30, 5, 20, 40, 10 ],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#5afffc",
            "#5eff5a",
            "#a95aff",
            "#ffa95a",
            "#ff5ab0"
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#5afffc",
            "#5eff5a",
            "#a95aff",
            "#ffa95a",
            "#ff5ab0"
          ]
        }
      ]
    }
  }

  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Total Spending: £ 0.00</h3>
        <Pie data={this.state.dataPie} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default OverAllChartsPage;
