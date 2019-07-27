import React from 'react'





class MonthDropDown2019 extends React.Component {

  state = {
    MonthSelected: "jan"
  }




  selectedMonth = (event) => {
    event.preventDefault()

    this.setState({MonthSelected: event.target.value})
  
  }

  MonthlyGraph = () => {

    switch (this.state.MonthSelected) {
        case "jan":
          return ("jan") 
          break;
        case"feb":
          return ("feb") 
          break;
        case "mar":
           return ("mar") 
          break;
        case "apr":
          return ("apr") 
          break;
        case "may":
          return ("may") 
          break;
        case "jun":
          return ("jun") 
          break;
        case "jul":
          return ("july") 
          break;
        case "aug":
            return ("aug") 
            break;
        case "sep":
             return ("sep") 
            break;
        case "oct":
            return ("oct") 
            break;
        case "nov":
            return ("nov") 
            break;
        case "dec":
            return ("dec") 
            break;
      }
  }




  render () {

    
    return (

    <div>
        <select onChange={this.selectedMonth} name="category">
            <option selected value="jan">Jan</option>
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
            <option value="dev">Dec</option>
        </select>
    <div>
        {this.MonthlyGraph()}
    </div>


</div>
     
     
    )
  }
}



export default MonthDropDown2019
