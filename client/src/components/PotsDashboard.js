import React, { Component } from "react";
import ReactDOM from "react-dom";


import Dialog from '@material-ui/core/Dialog';
import PotDetails from "../components/potDetails"



class PotDashboard extends Component {

  state = { show: false };

  handleClick = () => {
    this.setState({show: !this.state.show})
  }

  render() {

    return (
        <main>
          <br/>
          
          <Dialog open={this.state.show} onClose={ () => {this.setState({show: false})}}>
          <PotDetails/>
          </Dialog>
          <button type="button" onClick={this.handleClick}>
            More Details
          </button>
        </main>
    );
  }
}

const container = document.createElement("div");
document.body.appendChild(container);
// ReactDOM.render(<Dashboard />, container);


export default PotDashboard



