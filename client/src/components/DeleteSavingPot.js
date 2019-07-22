import React, { Component } from "react";
import ReactDOM from "react-dom";


import Dialog from '@material-ui/core/Dialog';
import API from "../services/api"




class DeletePotDashboard extends Component {

  state = { show: false };

  handleClick = () => {
    this.setState({show: !this.state.show})
  }

  deletePot = () => {

        alert("deleted")

        API.deleteSavingPot(this.props.item.id)
     
  }

  render() {

    return (
        <main>
          <br/>
          
          <Dialog open={this.state.show} onClose={ () => {this.setState({show: false})}}>
          <h3>Are sure you want to delete?</h3>


          <button onClick={this.deletePot}>Yes</button>
          
          </Dialog>
          <button type="button" onClick={this.handleClick}>
            Delete
          </button>
        </main>
    );
  }
}

const container = document.createElement("div");
document.body.appendChild(container);
// ReactDOM.render(<Dashboard />, container);


export default DeletePotDashboard



