import React, { Component } from "react";
// import ReactDOM from "react-dom";

// import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button'
import NewPotForm from "../components/NewPotModal"




class NewPotDashBoard extends Component {

  state = { show: false };

  handleClick = () => {
    this.setState({show: !this.state.show})
  }

  closeModal = () => {this.setState({show: false})}

  render() {

    return (
        <main>
          <br/>
          
    
          
          <Dialog open={this.state.show} onClose={this.closeModal}>
            <NewPotForm user={this.props.user} closeModal={this.closeModal} updatePots={this.props.updatePots} />
          </Dialog>
          <Button variant="outlined" color="secondary" type="button" onClick={this.handleClick}>
            Add Savings Pot
          </Button>
        </main>
    );
  }
}

const container = document.createElement("div");
document.body.appendChild(container);
// ReactDOM.render(<Dashboard />, container);


export default NewPotDashBoard
