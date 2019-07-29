import React from 'react'

import ReuseableBarChart from "../components/TypeReuseableBarChart"





class MonthDropDown2019 extends React.Component {

  state = {
    MonthSelected: ""
  }




  selectedMonth = (event) => {
    event.preventDefault()

    this.setState({MonthSelected: event.target.value})
  
  }

  MonthlyGraph = () => {

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
