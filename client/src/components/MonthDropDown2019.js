import React from 'react'

import ReuseableBarChart from "../components/TypeReuseableBarChart"

// import CircularIndeterminate from "../components/Spinner"


class MonthDropDown2019 extends React.Component {

  state = {
    MonthSelected: "jan"
  }

  selectedMonth = (event) => {
    event.preventDefault()
    this.setState({MonthSelected: event.target.value})
  }


  render () {

    
    return (

    <div>
        <select onChange={this.selectedMonth} name="category">
            <option defaultValue value="jan">Jan</option>
            <option value="feb">Feb</option>
            <option value="mar">Mar</option>
            <option value="apr">Apr</option>
            <option value="may">May</option>
            <option value="jun">Jun</option>
            <option value="jul">Jul</option>
            <option value="aug">Aug</option>
            <option value="sep">Sep</option>
            <option value="oct">Oct</option>
            <option value="nov">Nov</option>
            <option value="dec">Dec</option>
        </select>
    <div>
    
              <h2> 2019  {this.state.MonthSelected} spending </h2>

            {!this.props.month_sum_2019.jan?
            console.log("Loading Data"):
            <ReuseableBarChart 
            total={this.props.month_sum_2019[this.state.MonthSelected]}
            allData={this.props.month_categories_2019[this.state.MonthSelected]} 
             />
              }

    </div>
</div>
    
    )
  }
}



export default MonthDropDown2019
