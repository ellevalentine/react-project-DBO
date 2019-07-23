import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button'


import ReactVirtualizedTable from '../components/eachTransaction'
import TranDashboard from "../components/TranDashboard";
import OverAllChartsPage from "../components/TransPieChart"
import MapPots from "../components/mapPots"
import NewPotDashBoard from "../components/NewPotDashBoard";
import SimpleCard from "../components/stockCard"
import PortfolioDashBoard from "../components/PortfolioDashboard"



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
    width: 1000,
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

// TotalSpending
// ------------------------------------------------------------------------------------------------------------- 
    const AllTransactions = props.userTransaction

    const arrayOfAmounts = AllTransactions.map( t => t.amount )

    const sumOfAmounts = arrayOfAmounts.reduce((a, b) => a + b, 0)

  // category spending
 // ------------------------------------------------------------------------------------------------------------- 
  
 const ArrayOfBills = AllTransactions.filter( t => t.spendingSection === "bills" )
 const ArrayOfSubscriptions = AllTransactions.filter( t => t.spendingSection === "subscriptions" )
 const ArrayOfFood = AllTransactions.filter( t => t.spendingSection === "food" )
 const ArrayOfTravel = AllTransactions.filter( t => t.spendingSection === "travel" )
 const ArrayOfPhone = AllTransactions.filter( t => t.spendingSection === "phone" )
 const ArrayOfHoliday = AllTransactions.filter( t => t.spendingSection === "holiday" )
 const ArrayOfRetail = AllTransactions.filter( t => t.spendingSection === "retail" )
 const ArrayOfTech = AllTransactions.filter( t => t.spendingSection === "tech" )
 const ArrayOfOther = AllTransactions.filter( t => t.spendingSection === "other" )


  // grab(map) the amounts from each category and sum(reduce) them  
 // ------------------------------------------------------------------------------------------------------------- 
  
 const BillsAmounts = ArrayOfBills.map( t => t.amount ).reduce((a, b) => a + b, 0)
 const SubscriptionsAmounts = ArrayOfSubscriptions.map( t => t.amount ).reduce((a, b) => a + b, 0)
 const FoodAmounts = ArrayOfFood.map( t => t.amount ).reduce((a, b) => a + b, 0)
 const TravelAmounts = ArrayOfTravel.map( t => t.amount ).reduce((a, b) => a + b, 0)
 const PhoneAmounts = ArrayOfPhone.map( t => t.amount ).reduce((a, b) => a + b, 0)
 const HolidayAmounts = ArrayOfHoliday.map( t => t.amount ).reduce((a, b) => a + b, 0)
 const RetailAmounts = ArrayOfRetail.map( t => t.amount ).reduce((a, b) => a + b, 0)
 const TechAmounts = ArrayOfTech.map( t => t.amount ).reduce((a, b) => a + b, 0)
 const OtherAmounts = ArrayOfOther.map( t => t.amount ).reduce((a, b) => a + b, 0)




  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: 'primary',
      className: classes.fab,
      icon: "",
      label: 'Add',
    },
    {
      color: 'secondary',
      className: classes.fab,
      icon: "",
      label: 'Edit',
    },
    {
      color: 'inherit',
      className: clsx(classes.fab, classes.fabGreen),
      icon: "",
      label: 'Expand',
    },
  ];

  


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
          <Tab label="Current" />
          <Tab label="Savings" />
          <Tab label="Portfolio" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
   
        <TabContainer dir={theme.direction}> 
            <div className='addButton'>
            <TranDashboard user={props.user} /> <br/>
            </div>
            Transactions:
            <br/>

         <ReactVirtualizedTable transactions={props.userTransaction} rows={props.userTransaction}/>
           
            <br/>
            <hr/>
            <OverAllChartsPage TotalSpending={sumOfAmounts} OtherAmounts={OtherAmounts} TechAmounts={TechAmounts} RetailAmounts={RetailAmounts} HolidayAmounts={HolidayAmounts} PhoneAmounts={PhoneAmounts} TravelAmounts={TravelAmounts} FoodAmounts={FoodAmounts} BillsAmounts={BillsAmounts} SubscriptionsAmounts={SubscriptionsAmounts}  />
      

          </TabContainer>

        <TabContainer dir={theme.direction}>
        
    
    <div className='addButton'>
      <NewPotDashBoard user={props.user}/>
      <br/>
      <br/>
      </div>
    <hr/>
    <div>
      <MapPots userPots={props.userPots || []} />
      
    </div>
          

          </TabContainer>

        <TabContainer dir={theme.direction}>
        Stocks Account
        <div className='addButton'> 
           <PortfolioDashBoard />
           <br/>
           <br/>
        </div> 


        {props.allstocks.map( stock => <SimpleCard stock={stock} /> ) }

        </TabContainer>

      </SwipeableViews>
    
    </div>
  );
}