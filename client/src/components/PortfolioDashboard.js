import React, { Component } from "react";
// import ReactDOM from "react-dom";

// import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';


import Button from '@material-ui/core/Button'





class PortfolioDashBoard extends Component {

  state = { show: false };

  handleClick = () => {
    this.setState({show: !this.state.show})
  }

  render() {

    return (
        <main>
          <br/>
          
    
          
          <Dialog open={this.state.show} onClose={ () => {this.setState({show: false})}}>
            <p> helloooooooooooo </p>
          </Dialog>
          <Button variant="outlined" type="button" onClick={this.handleClick}>
            View Portfolio 
          </Button>
          <br/>
          <br/>
          <hr/>
        </main>
    );
  }
}

const container = document.createElement("div");
document.body.appendChild(container);
// ReactDOM.render(<Dashboard />, container);


export default PortfolioDashBoard
