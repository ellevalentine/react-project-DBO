import React from 'react';
import PropTypes from 'prop-types';
// import clsx from 'clsx';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
// import Zoom from '@material-ui/core/Zoom';
// import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
// import EditIcon from '@material-ui/icons/Edit';
// import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { green } from '@material-ui/core/colors';
// import Button from '@material-ui/core/Button'


import ReactVirtualizedTable from '../components/eachTransaction'
import TranDashboard from "../components/TranDashboard";
import OverAllChartsPage from "../components/TransPieChart"
import MapPots from "../components/mapPots"
import NewPotDashBoard from "../components/NewPotDashBoard";
import SimpleCard from "../components/stockCard"
import PortfolioDashBoard from "../components/PortfolioDashboard"
// import OverAllBarChart from "../components/OverAllBarChart"
// import ReuseableBarChart from "./TypeReuseableBarChart"
// import MonthsBarChart from "../components/MonthsReuseableBarChart"


// import CarouselPage from "../components/Carousel"
import GraphSelector from "../components/GraphSelector"

import LineChart from "../homePageComponents/compareGraph"





function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "80%",
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
}));

export default function FloatingActionButtonZoom(props) {

    
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);


  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  // const transitionDuration = {
  //   enter: theme.transitions.duration.enteringScreen,
  //   exit: theme.transitions.duration.leavingScreen,
  // };

  // const fabs = [
  //   {
  //     color: 'primary',
  //     className: classes.fab,
  //     icon: "",
  //     label: 'Add',
  //   },
  //   {
  //     color: 'secondary',
  //     className: classes.fab,
  //     icon: "",
  //     label: 'Edit',
  //   },
  //   {
  //     color: 'inherit',
  //     className: clsx(classes.fab, classes.fabGreen),
  //     icon: "",
  //     label: 'Expand',
  //   },
  // ];

  


  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
        >
          <Tab label="Overview" />
          <Tab label="Current" />
          <Tab label="Savings" />
          {/* <Tab label="Portfolio" /> */}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >



      <TabContainer dir="" >
      <div className="HomepageCarousel">

        <LineChart total_2019={props.total_2019} total_2018={props.total_2018} month_sum_2018={props.month_sum_2018} month_sum_2019={props.month_sum_2019} />
        <hr/>
        {/* <CarouselPage TotalSpending={sumOfAmounts} OtherAmounts={OtherAmounts} TechAmounts={TechAmounts} RetailAmounts={RetailAmounts} HolidayAmounts={HolidayAmounts} PhoneAmounts={PhoneAmounts} TravelAmounts={TravelAmounts} FoodAmounts={FoodAmounts} BillsAmounts={BillsAmounts} SubscriptionsAmounts={SubscriptionsAmounts}  /> */}
      </div>
      </TabContainer>


   
      <TabContainer dir={theme.direction}> 
            <div className='addButton'>
            <TranDashboard user={props.user} updateTransactions={props.updateTransactions} /> <br/>
            </div>
            Transactions:
            <br/>

         <ReactVirtualizedTable transactions={props.userTransaction} rows={props.userTransaction}/>
      
            <br>

            </br>
            <hr/>
            <OverAllChartsPage user={props.user} TotalSpending={props.totalSum.sum_of_all_amounts} OtherAmounts={props.totalCategory.other} TechAmounts={props.totalCategory.tech} RetailAmounts={props.totalCategory.retail} HolidayAmounts={props.totalCategory.holiday} PhoneAmounts={props.totalCategory.phone} TravelAmounts={props.totalCategory.travel} FoodAmounts={props.totalCategory.food} BillsAmounts={props.totalCategory.bills} SubscriptionsAmounts={props.totalCategory.sub}  />
            <br/>
            <hr/>
            {/* <h2> overall spending </h2> */}
            {/* <OverAllBarChart TotalSpending={props.totalSum.sum_of_all_amounts} OtherAmounts={props.totalCategory.other} TechAmounts={props.totalCategory.tech} RetailAmounts={props.totalCategory.retail} HolidayAmounts={props.totalCategory.holiday} PhoneAmounts={props.totalCategory.phone} TravelAmounts={props.totalCategory.travel} FoodAmounts={props.totalCategory.food} BillsAmounts={props.totalCategory.bills} SubscriptionsAmounts={props.totalCategory.sub}  /> */}
            <br/>
            <h3>Select Year:</h3>
            <GraphSelector month_sum_2018={props.month_sum_2018}  month_categories_2018={props.month_categories_2018}  month_categories_2019={props.month_categories_2019} total_2019={props.total_2019} total_2018={props.total_2018} month_sum_2019={props.month_sum_2019} />
            <br/>
       </TabContainer>





        <TabContainer dir={theme.direction}>
        
             <div className='addButton'>
               <NewPotDashBoard user={props.user} updatePots={props.updatePots}/>
               <br/>
               <br/>
                </div>
             <hr/>
             <div>
               <MapPots deleteSavingPot={props.deleteSavingPot} userPots={props.userPots || []} />

             </div>


                   </TabContainer>

                 {/* <TabContainer dir={theme.direction}>
                 Stocks Account
                 <div className='addButton'> 
                    <PortfolioDashBoard />
                    <br/>
                    <br/>
                 </div> 


                  {props.allstocks.map( stock => <SimpleCard key={stock.id} stock={stock} /> ) }

        </TabContainer> */}

      </SwipeableViews>
    
    </div>
  );
}