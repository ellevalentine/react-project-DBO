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
import Box from '@material-ui/core/Box';

import ReuseableBarChart from "./TypeReuseableBarChart"
import MonthsBarChart from "./MonthsReuseableBarChart"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1400,
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

export default function MonthSelector2019(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);



  //.........................................................................................................

  const AllTransactions = props.userTransactions

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


  // grab by the year
 // ------------------------------------------------------------------------------------------------------------- 
 
//2019 transactions
 const Billsof2019 = AllTransactions.filter( t => t.date.split("-")[0] === "2019" )

 // sum of transactions 2019
 const SUMof2019 = AllTransactions.filter( t => t.date.split("-")[0] === "2019" ).map( t => t.amount ).reduce((a,b) => a + b, 0)

 // sum of each month in 2019
 const SUMJan2019 = Billsof2019.filter( t => t.date.split("-")[1] == "01" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
 const SUMFeb2019 = Billsof2019.filter( t => t.date.split("-")[1] == "02" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
 const SUMMar2019 = Billsof2019.filter( t => t.date.split("-")[1] == "03" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
 const SUMApr2019 = Billsof2019.filter( t => t.date.split("-")[1] == "04" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
 const SUMMay2019 = Billsof2019.filter( t => t.date.split("-")[1] == "05" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
 const SUMJun2019 = Billsof2019.filter( t => t.date.split("-")[1] == "06" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
 const SUMJul2019 = Billsof2019.filter( t => t.date.split("-")[1] == "07" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
 const SUMAug2019 = Billsof2019.filter( t => t.date.split("-")[1] == "08" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
 const SUMSep2019 = Billsof2019.filter( t => t.date.split("-")[1] == "09" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
 const SUMOct2019 = Billsof2019.filter( t => t.date.split("-")[1] == "10" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
 const SUMNov2019 = Billsof2019.filter( t => t.date.split("-")[1] == "11" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
 const SUMDec2019 = Billsof2019.filter( t => t.date.split("-")[1] == "12" ).map( t => t.amount ).reduce((a,b) => a + b, 0)


// transactions from each month 
 const Jan2019 = Billsof2019.filter( t => t.date.split("-")[1] == "01" )
 const Feb2019 = Billsof2019.filter( t => t.date.split("-")[1] == "02" )
 const Mar2019 = Billsof2019.filter( t => t.date.split("-")[1] == "03" )
 const Apr2019 = Billsof2019.filter( t => t.date.split("-")[1] == "04" )
 const May2019 = Billsof2019.filter( t => t.date.split("-")[1] == "05" )
 const Jun2019 = Billsof2019.filter( t => t.date.split("-")[1] == "06" )
 const Jul2019 = Billsof2019.filter( t => t.date.split("-")[1] == "07" )
 const Aug2019 = Billsof2019.filter( t => t.date.split("-")[1] == "08" )
 const Sep2019 = Billsof2019.filter( t => t.date.split("-")[1] == "09" )
 const Oct2019 = Billsof2019.filter( t => t.date.split("-")[1] == "10" )
 const Nov2019 = Billsof2019.filter( t => t.date.split("-")[1] == "11" )
 const Dec2019 = Billsof2019.filter( t => t.date.split("-")[1] == "12" )

//each month spending JAN - DEC 2019

const billsJan2019 = Jan2019.filter( t => t.spendingSection === "bills" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const subscriptionsJan2019 = Jan2019.filter( t => t.spendingSection === "subscriptions" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const foodJan2019 = Jan2019.filter( t => t.spendingSection === "food" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const travelJan2019 = Jan2019.filter( t => t.spendingSection === "travel" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const phoneJan2019 = Jan2019.filter( t => t.spendingSection === "phone" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const holidayJan2019 = Jan2019.filter( t => t.spendingSection === "holiday" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const retailJan2019 = Jan2019.filter( t => t.spendingSection === "retail" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const techJan2019 = Jan2019.filter( t => t.spendingSection === "tech" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const otherJan2019 = Jan2019.filter( t => t.spendingSection === "other" ).map( t => t.amount ).reduce((a,b) => a + b, 0)

const billsFeb2019 = Feb2019.filter( t => t.spendingSection === "bills" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const subscriptionsFeb2019 = Feb2019.filter( t => t.spendingSection === "subscriptions" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const foodFeb2019 = Feb2019.filter( t => t.spendingSection === "food" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const travelFeb2019 = Feb2019.filter( t => t.spendingSection === "travel" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const phoneFeb2019 = Feb2019.filter( t => t.spendingSection === "phone" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const holidayFeb2019 = Feb2019.filter( t => t.spendingSection === "holiday" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const retailFeb2019 = Feb2019.filter( t => t.spendingSection === "retail" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const techFeb2019 = Feb2019.filter( t => t.spendingSection === "tech" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const otherFeb2019 = Feb2019.filter( t => t.spendingSection === "other" ).map( t => t.amount ).reduce((a,b) => a + b, 0)

const billsMar2019 = Mar2019.filter( t => t.spendingSection === "bills" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const subscriptionsMar2019 = Mar2019.filter( t => t.spendingSection === "subscriptions" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const foodMar2019 = Mar2019.filter( t => t.spendingSection === "food" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const travelMar2019 = Mar2019.filter( t => t.spendingSection === "travel" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const phoneMar2019 = Mar2019.filter( t => t.spendingSection === "phone" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const holidayMar2019 = Mar2019.filter( t => t.spendingSection === "holiday" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const retailMar2019 = Mar2019.filter( t => t.spendingSection === "retail" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const techMar2019 = Mar2019.filter( t => t.spendingSection === "tech" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const otherMar2019 = Mar2019.filter( t => t.spendingSection === "other" ).map( t => t.amount ).reduce((a,b) => a + b, 0)

const billsApr2019 = Apr2019.filter( t => t.spendingSection === "bills" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const subscriptionsApr2019 = Apr2019.filter( t => t.spendingSection === "subscriptions" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const foodApr2019 = Apr2019.filter( t => t.spendingSection === "food" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const travelApr2019 = Apr2019.filter( t => t.spendingSection === "travel" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const phoneApr2019 = Apr2019.filter( t => t.spendingSection === "phone" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const holidayApr2019 = Apr2019.filter( t => t.spendingSection === "holiday" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const retailApr2019 = Apr2019.filter( t => t.spendingSection === "retail" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const techApr2019 = Apr2019.filter( t => t.spendingSection === "tech" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const otherApr2019 = Apr2019.filter( t => t.spendingSection === "other" ).map( t => t.amount ).reduce((a,b) => a + b, 0)

const billsMay2019 = May2019.filter( t => t.spendingSection === "bills" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const subscriptionsMay2019 = May2019.filter( t => t.spendingSection === "subscriptions" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const foodMay2019 = May2019.filter( t => t.spendingSection === "food" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const travelMay2019 = May2019.filter( t => t.spendingSection === "travel" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const phoneMay2019 = May2019.filter( t => t.spendingSection === "phone" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const holidayMay2019 = May2019.filter( t => t.spendingSection === "holiday" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const retailMay2019 = May2019.filter( t => t.spendingSection === "retail" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const techMay2019 = May2019.filter( t => t.spendingSection === "tech" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const otherMay2019 = May2019.filter( t => t.spendingSection === "other" ).map( t => t.amount ).reduce((a,b) => a + b, 0)

const billsJun2019 = Jun2019.filter( t => t.spendingSection === "bills" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const subscriptionsJun2019 = Jun2019.filter( t => t.spendingSection === "subscriptions" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const foodJun2019 = Jun2019.filter( t => t.spendingSection === "food" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const travelJun2019 = Jun2019.filter( t => t.spendingSection === "travel" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const phoneJun2019 = Jun2019.filter( t => t.spendingSection === "phone" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const holidayJun2019 = Jun2019.filter( t => t.spendingSection === "holiday" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const retailJun2019 = Jun2019.filter( t => t.spendingSection === "retail" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const techJun2019 = Jun2019.filter( t => t.spendingSection === "tech" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const otherJun2019 = Jun2019.filter( t => t.spendingSection === "other" ).map( t => t.amount ).reduce((a,b) => a + b, 0)

const billsJul2019 = Jul2019.filter( t => t.spendingSection === "bills" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const subscriptionsJul2019 = Jul2019.filter( t => t.spendingSection === "subscriptions" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const foodJul2019 = Jul2019.filter( t => t.spendingSection === "food" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const travelJul2019 = Jul2019.filter( t => t.spendingSection === "travel" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const phoneJul2019 = Jul2019.filter( t => t.spendingSection === "phone" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const holidayJul2019 = Jul2019.filter( t => t.spendingSection === "holiday" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const retailJul2019 = Jul2019.filter( t => t.spendingSection === "retail" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const techJul2019 = Jul2019.filter( t => t.spendingSection === "tech" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const otherJul2019 = Jul2019.filter( t => t.spendingSection === "other" ).map( t => t.amount ).reduce((a,b) => a + b, 0)

const billsAug2019 = Aug2019.filter( t => t.spendingSection === "bills" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const subscriptionsAug2019 = Aug2019.filter( t => t.spendingSection === "subscriptions" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const foodAug2019 = Aug2019.filter( t => t.spendingSection === "food" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const travelAug2019 = Aug2019.filter( t => t.spendingSection === "travel" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const phoneAug2019 = Aug2019.filter( t => t.spendingSection === "phone" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const holidayAug2019 = Aug2019.filter( t => t.spendingSection === "holiday" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const retailAug2019 = Aug2019.filter( t => t.spendingSection === "retail" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const techAug2019 = Aug2019.filter( t => t.spendingSection === "tech" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const otherAug2019 = Aug2019.filter( t => t.spendingSection === "other" ).map( t => t.amount ).reduce((a,b) => a + b, 0)

const billsSep2019 = Sep2019.filter( t => t.spendingSection === "bills" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const subscriptionsSep2019 = Sep2019.filter( t => t.spendingSection === "subscriptions" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const foodSep2019 = Sep2019.filter( t => t.spendingSection === "food" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const travelSep2019 = Sep2019.filter( t => t.spendingSection === "travel" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const phoneSep2019 = Sep2019.filter( t => t.spendingSection === "phone" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const holidaySep2019 = Sep2019.filter( t => t.spendingSection === "holiday" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const retailSep2019 = Sep2019.filter( t => t.spendingSection === "retail" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const techSep2019 = Sep2019.filter( t => t.spendingSection === "tech" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const otherSep2019 = Sep2019.filter( t => t.spendingSection === "other" ).map( t => t.amount ).reduce((a,b) => a + b, 0)

const billsOct2019 = Oct2019.filter( t => t.spendingSection === "bills" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const subscriptionsOct2019 = Oct2019.filter( t => t.spendingSection === "subscriptions" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const foodOct2019 = Oct2019.filter( t => t.spendingSection === "food" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const travelOct2019 = Oct2019.filter( t => t.spendingSection === "travel" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const phoneOct2019 = Oct2019.filter( t => t.spendingSection === "phone" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const holidayOct2019 = Oct2019.filter( t => t.spendingSection === "holiday" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const retailOct2019 = Oct2019.filter( t => t.spendingSection === "retail" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const techOct2019 = Oct2019.filter( t => t.spendingSection === "tech" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const otherOct2019 = Oct2019.filter( t => t.spendingSection === "other" ).map( t => t.amount ).reduce((a,b) => a + b, 0)

const billsNov2019 = Nov2019.filter( t => t.spendingSection === "bills" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const subscriptionsNov2019 = Nov2019.filter( t => t.spendingSection === "subscriptions" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const foodNov2019 = Nov2019.filter( t => t.spendingSection === "food" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const travelNov2019 = Nov2019.filter( t => t.spendingSection === "travel" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const phoneNov2019 = Nov2019.filter( t => t.spendingSection === "phone" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const holidayNov2019 = Nov2019.filter( t => t.spendingSection === "holiday" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const retailNov2019 = Nov2019.filter( t => t.spendingSection === "retail" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const techNov2019 = Nov2019.filter( t => t.spendingSection === "tech" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const otherNov2019 = Nov2019.filter( t => t.spendingSection === "other" ).map( t => t.amount ).reduce((a,b) => a + b, 0)

const billsDec2019 = Dec2019.filter( t => t.spendingSection === "bills" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const subscriptionsDec2019 = Dec2019.filter( t => t.spendingSection === "subscriptions" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const foodDec2019 = Dec2019.filter( t => t.spendingSection === "food" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const travelDec2019 = Dec2019.filter( t => t.spendingSection === "travel" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const phoneDec2019 = Dec2019.filter( t => t.spendingSection === "phone" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const holidayDec2019 = Dec2019.filter( t => t.spendingSection === "holiday" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const retailDec2019 = Dec2019.filter( t => t.spendingSection === "retail" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const techDec2019 = Dec2019.filter( t => t.spendingSection === "tech" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const otherDec2019 = Dec2019.filter( t => t.spendingSection === "other" ).map( t => t.amount ).reduce((a,b) => a + b, 0)

// all transactins from 2018
 const Billsof2018 = AllTransactions.filter( t => t.date.split("-")[0] === "2018" )

 // sum of 2018 transactins 
 const SUMof2018 = AllTransactions.filter( t => t.date.split("-")[0] === "2018" ).map( t => t.amount ).reduce((a,b) => a + b, 0)

 // sum of each month in 2018 
 const SUMJan2018 = Billsof2018.filter( t => t.date.split("-")[1] == "01" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
 const SUMFeb2018 = Billsof2018.filter( t => t.date.split("-")[1] == "02" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
 const SUMMar2018 = Billsof2018.filter( t => t.date.split("-")[1] == "03" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
 const SUMApr2018 = Billsof2018.filter( t => t.date.split("-")[1] == "04" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
 const SUMMay2018 = Billsof2018.filter( t => t.date.split("-")[1] == "05" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
 const SUMJun2018 = Billsof2018.filter( t => t.date.split("-")[1] == "06" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
 const SUMJul2018 = Billsof2018.filter( t => t.date.split("-")[1] == "07" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
 const SUMAug2018 = Billsof2018.filter( t => t.date.split("-")[1] == "08" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
 const SUMSep2018 = Billsof2018.filter( t => t.date.split("-")[1] == "09" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
 const SUMOct2018 = Billsof2018.filter( t => t.date.split("-")[1] == "10" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
 const SUMNov2018 = Billsof2018.filter( t => t.date.split("-")[1] == "11" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
 const SUMDec2018 = Billsof2018.filter( t => t.date.split("-")[1] == "12" ).map( t => t.amount ).reduce((a,b) => a + b, 0)

 // transactions from each month in 2018
 const Jan2018 = Billsof2018.filter( t => t.date.split("-")[1] == "01" )
 const Feb2018 = Billsof2018.filter( t => t.date.split("-")[1] == "02" )
 const Mar2018 = Billsof2018.filter( t => t.date.split("-")[1] == "03" )
 const Apr2018 = Billsof2018.filter( t => t.date.split("-")[1] == "04" )
 const May2018 = Billsof2018.filter( t => t.date.split("-")[1] == "05" )
 const Jun2018 = Billsof2018.filter( t => t.date.split("-")[1] == "06" )
 const Jul2018 = Billsof2018.filter( t => t.date.split("-")[1] == "07" )
 const Aug2018 = Billsof2018.filter( t => t.date.split("-")[1] == "08" )
 const Sep2018 = Billsof2018.filter( t => t.date.split("-")[1] == "09" )
 const Oct2018 = Billsof2018.filter( t => t.date.split("-")[1] == "10" )
 const Nov2018 = Billsof2018.filter( t => t.date.split("-")[1] == "11" )
 const Dec2018 = Billsof2018.filter( t => t.date.split("-")[1] == "12" )


//each month spending JAN - DEC 2019

const billsJan2018 = Jan2018.filter( t => t.spendingSection === "bills" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const subscriptionsJan2018 = Jan2018.filter( t => t.spendingSection === "subscriptions" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const foodJan2018 = Jan2018.filter( t => t.spendingSection === "food" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const travelJan2018 = Jan2018.filter( t => t.spendingSection === "travel" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const phoneJan2018 = Jan2018.filter( t => t.spendingSection === "phone" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const holidayJan2018 = Jan2018.filter( t => t.spendingSection === "holiday" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const retailJan2018 = Jan2018.filter( t => t.spendingSection === "retail" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const techJan2018 = Jan2018.filter( t => t.spendingSection === "tech" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const otherJan2018 = Jan2018.filter( t => t.spendingSection === "other" ).map( t => t.amount ).reduce((a,b) => a + b, 0)

const billsFeb2018 = Feb2018.filter( t => t.spendingSection === "bills" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const subscriptionsFeb2018 = Feb2018.filter( t => t.spendingSection === "subscriptions" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const foodFeb2018 = Feb2018.filter( t => t.spendingSection === "food" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const travelFeb2018 = Feb2018.filter( t => t.spendingSection === "travel" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const phoneFeb2018 = Feb2018.filter( t => t.spendingSection === "phone" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const holidayFeb2018 = Feb2018.filter( t => t.spendingSection === "holiday" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const retailFeb2018 = Feb2018.filter( t => t.spendingSection === "retail" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const techFeb2018 = Feb2018.filter( t => t.spendingSection === "tech" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const otherFeb2018 = Feb2018.filter( t => t.spendingSection === "other" ).map( t => t.amount ).reduce((a,b) => a + b, 0)

const billsMar2018 = Mar2018.filter( t => t.spendingSection === "bills" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const subscriptionsMar2018 = Mar2018.filter( t => t.spendingSection === "subscriptions" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const foodMar2018 = Mar2018.filter( t => t.spendingSection === "food" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const travelMar2018 = Mar2018.filter( t => t.spendingSection === "travel" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const phoneMar2018 = Mar2018.filter( t => t.spendingSection === "phone" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const holidayMar2018 = Mar2018.filter( t => t.spendingSection === "holiday" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const retailMar2018 = Mar2018.filter( t => t.spendingSection === "retail" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const techMar2018 = Mar2018.filter( t => t.spendingSection === "tech" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const otherMar2018 = Mar2018.filter( t => t.spendingSection === "other" ).map( t => t.amount ).reduce((a,b) => a + b, 0)

const billsApr2018 = Apr2018.filter( t => t.spendingSection === "bills" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const subscriptionsApr2018 = Apr2018.filter( t => t.spendingSection === "subscriptions" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const foodApr2018 = Apr2018.filter( t => t.spendingSection === "food" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const travelApr2018 = Apr2018.filter( t => t.spendingSection === "travel" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const phoneApr2018 = Apr2018.filter( t => t.spendingSection === "phone" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const holidayApr2018 = Apr2018.filter( t => t.spendingSection === "holiday" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const retailApr2018 = Apr2018.filter( t => t.spendingSection === "retail" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const techApr2018 = Apr2018.filter( t => t.spendingSection === "tech" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const otherApr2018 = Apr2018.filter( t => t.spendingSection === "other" ).map( t => t.amount ).reduce((a,b) => a + b, 0)

const billsMay2018 = May2018.filter( t => t.spendingSection === "bills" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const subscriptionsMay2018 = May2018.filter( t => t.spendingSection === "subscriptions" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const foodMay2018 = May2018.filter( t => t.spendingSection === "food" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const travelMay2018 = May2018.filter( t => t.spendingSection === "travel" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const phoneMay2018 = May2018.filter( t => t.spendingSection === "phone" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const holidayMay2018 = May2018.filter( t => t.spendingSection === "holiday" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const retailMay2018 = May2018.filter( t => t.spendingSection === "retail" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const techMay2018 = May2018.filter( t => t.spendingSection === "tech" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const otherMay2018 = May2018.filter( t => t.spendingSection === "other" ).map( t => t.amount ).reduce((a,b) => a + b, 0)

const billsJun2018 = Jun2018.filter( t => t.spendingSection === "bills" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const subscriptionsJun2018 = Jun2018.filter( t => t.spendingSection === "subscriptions" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const foodJun2018 = Jun2018.filter( t => t.spendingSection === "food" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const travelJun2018 = Jun2018.filter( t => t.spendingSection === "travel" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const phoneJun2018 = Jun2018.filter( t => t.spendingSection === "phone" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const holidayJun2018 = Jun2018.filter( t => t.spendingSection === "holiday" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const retailJun2018 = Jun2018.filter( t => t.spendingSection === "retail" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const techJun2018 = Jun2018.filter( t => t.spendingSection === "tech" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const otherJun2018 = Jun2018.filter( t => t.spendingSection === "other" ).map( t => t.amount ).reduce((a,b) => a + b, 0)

const billsJul2018 = Jul2018.filter( t => t.spendingSection === "bills" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const subscriptionsJul2018 = Jul2018.filter( t => t.spendingSection === "subscriptions" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const foodJul2018 = Jul2018.filter( t => t.spendingSection === "food" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const travelJul2018 = Jul2018.filter( t => t.spendingSection === "travel" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const phoneJul2018 = Jul2018.filter( t => t.spendingSection === "phone" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const holidayJul2018 = Jul2018.filter( t => t.spendingSection === "holiday" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const retailJul2018 = Jul2018.filter( t => t.spendingSection === "retail" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const techJul2018 = Jul2018.filter( t => t.spendingSection === "tech" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const otherJul2018 = Jul2018.filter( t => t.spendingSection === "other" ).map( t => t.amount ).reduce((a,b) => a + b, 0)

const billsAug2018 = Aug2018.filter( t => t.spendingSection === "bills" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const subscriptionsAug2018 = Aug2018.filter( t => t.spendingSection === "subscriptions" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const foodAug2018 = Aug2018.filter( t => t.spendingSection === "food" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const travelAug2018 = Aug2018.filter( t => t.spendingSection === "travel" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const phoneAug2018 = Aug2018.filter( t => t.spendingSection === "phone" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const holidayAug2018 = Aug2018.filter( t => t.spendingSection === "holiday" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const retailAug2018 = Aug2018.filter( t => t.spendingSection === "retail" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const techAug2018 = Aug2018.filter( t => t.spendingSection === "tech" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const otherAug2018 = Aug2018.filter( t => t.spendingSection === "other" ).map( t => t.amount ).reduce((a,b) => a + b, 0)

const billsSep2018 = Sep2018.filter( t => t.spendingSection === "bills" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const subscriptionsSep2018 = Sep2018.filter( t => t.spendingSection === "subscriptions" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const foodSep2018 = Sep2018.filter( t => t.spendingSection === "food" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const travelSep2018 = Sep2018.filter( t => t.spendingSection === "travel" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const phoneSep2018 = Sep2018.filter( t => t.spendingSection === "phone" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const holidaySep2018 = Sep2018.filter( t => t.spendingSection === "holiday" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const retailSep2018 = Sep2018.filter( t => t.spendingSection === "retail" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const techSep2018 = Sep2018.filter( t => t.spendingSection === "tech" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const otherSep2018 = Sep2018.filter( t => t.spendingSection === "other" ).map( t => t.amount ).reduce((a,b) => a + b, 0)

const billsOct2018 = Oct2018.filter( t => t.spendingSection === "bills" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const subscriptionsOct2018 = Oct2018.filter( t => t.spendingSection === "subscriptions" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const foodOct2018 = Oct2018.filter( t => t.spendingSection === "food" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const travelOct2018 = Oct2018.filter( t => t.spendingSection === "travel" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const phoneOct2018 = Oct2018.filter( t => t.spendingSection === "phone" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const holidayOct2018 = Oct2018.filter( t => t.spendingSection === "holiday" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const retailOct2018 = Oct2018.filter( t => t.spendingSection === "retail" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const techOct2018 = Oct2018.filter( t => t.spendingSection === "tech" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const otherOct2018 = Oct2018.filter( t => t.spendingSection === "other" ).map( t => t.amount ).reduce((a,b) => a + b, 0)

const billsNov2018 = Nov2018.filter( t => t.spendingSection === "bills" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const subscriptionsNov2018 = Nov2018.filter( t => t.spendingSection === "subscriptions" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const foodNov2018 = Nov2018.filter( t => t.spendingSection === "food" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const travelNov2018 = Nov2018.filter( t => t.spendingSection === "travel" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const phoneNov2018 = Nov2018.filter( t => t.spendingSection === "phone" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const holidayNov2018 = Nov2018.filter( t => t.spendingSection === "holiday" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const retailNov2018 = Nov2018.filter( t => t.spendingSection === "retail" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const techNov2018 = Nov2018.filter( t => t.spendingSection === "tech" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const otherNov2018 = Nov2018.filter( t => t.spendingSection === "other" ).map( t => t.amount ).reduce((a,b) => a + b, 0)

const billsDec2018 = Dec2018.filter( t => t.spendingSection === "bills" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const subscriptionsDec2018 = Dec2018.filter( t => t.spendingSection === "subscriptions" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const foodDec2018 = Dec2018.filter( t => t.spendingSection === "food" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const travelDec2018 = Dec2018.filter( t => t.spendingSection === "travel" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const phoneDec2018 = Dec2018.filter( t => t.spendingSection === "phone" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const holidayDec2018 = Dec2018.filter( t => t.spendingSection === "holiday" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const retailDec2018 = Dec2018.filter( t => t.spendingSection === "retail" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const techDec2018 = Dec2018.filter( t => t.spendingSection === "tech" ).map( t => t.amount ).reduce((a,b) => a + b, 0)
const otherDec2018 = Dec2018.filter( t => t.spendingSection === "other" ).map( t => t.amount ).reduce((a,b) => a + b, 0)


//--------------------




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
      icon: <AddIcon />,
      label: 'Add',
    },
    {
      color: 'secondary',
      className: classes.fab,
      icon: <EditIcon />,
      label: 'Edit',
    },
    {
      color: 'inherit',
      className: clsx(classes.fab, classes.fabGreen),
      icon: <UpIcon />,
      label: 'Expand',
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Jan" {...a11yProps(0)} />
          <Tab label="Feb" {...a11yProps(1)} />
          <Tab label="Mar" {...a11yProps(2)} />
          <Tab label="Apr" {...a11yProps(3)} />
          <Tab label="May" {...a11yProps(4)} />
          <Tab label="Jun" {...a11yProps(5)} />
          <Tab label="Jul" {...a11yProps(6)} />
          <Tab label="Aug" {...a11yProps(7)} />
          <Tab label="Sep" {...a11yProps(8)} />
          <Tab label="Oct" {...a11yProps(9)} />
          <Tab label="Nov" {...a11yProps(10)} />
          <Tab label="Dec" {...a11yProps(11)} />
          
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <hr/>
            <h2> 2019  JAN spending </h2>
            <ReuseableBarChart TotalSpending={SUMJan2019} OtherAmounts={otherJan2019} TechAmounts={techJan2019} RetailAmounts={retailJan2019} HolidayAmounts={holidayJan2019} PhoneAmounts={phoneJan2019} TravelAmounts={travelJan2019} FoodAmounts={foodJan2019} BillsAmounts={billsJan2019} SubscriptionsAmounts={subscriptionsJan2019}  />
            <br/>
            

        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <hr/>
            <h2> 2019  FEB spending </h2>
            <ReuseableBarChart TotalSpending={SUMFeb2019} OtherAmounts={otherFeb2019} TechAmounts={techFeb2019} RetailAmounts={retailFeb2019} HolidayAmounts={holidayFeb2019} PhoneAmounts={phoneFeb2019} TravelAmounts={travelFeb2019} FoodAmounts={foodFeb2019} BillsAmounts={billsFeb2019} SubscriptionsAmounts={subscriptionsFeb2019}  />
            
            
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <br/>
            <hr/>
            <h2> 2019  MAR spending </h2>
            <ReuseableBarChart TotalSpending={SUMMar2019} OtherAmounts={otherMar2019} TechAmounts={techMar2019} RetailAmounts={retailMar2019} HolidayAmounts={holidayMar2019} PhoneAmounts={phoneMar2019} TravelAmounts={travelMar2019} FoodAmounts={foodMar2019} BillsAmounts={billsMar2019} SubscriptionsAmounts={subscriptionsMar2019}  />
            
            
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        <br/>
            <hr/>
            <h2> 2019  APR spending </h2>
            <ReuseableBarChart TotalSpending={SUMMar2019} OtherAmounts={otherMar2019} TechAmounts={techMar2019} RetailAmounts={retailMar2019} HolidayAmounts={holidayMar2019} PhoneAmounts={phoneMar2019} TravelAmounts={travelMar2019} FoodAmounts={foodMar2019} BillsAmounts={billsMar2019} SubscriptionsAmounts={subscriptionsMar2019}  />
            
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
        <br/>
            <hr/>
            <h2> 2019  MAY spending </h2>
            <ReuseableBarChart TotalSpending={SUMMay2019} OtherAmounts={otherMay2019} TechAmounts={techMay2019} RetailAmounts={retailMay2019} HolidayAmounts={holidayMay2019} PhoneAmounts={phoneMay2019} TravelAmounts={travelMay2019} FoodAmounts={foodMay2019} BillsAmounts={billsMay2019} SubscriptionsAmounts={subscriptionsMay2019}  />
            
            
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
        <br/>
            <hr/>
            <h2> 2019  JUN spending </h2>
            <ReuseableBarChart TotalSpending={SUMJun2019} OtherAmounts={otherJun2019} TechAmounts={techJun2019} RetailAmounts={retailJun2019} HolidayAmounts={holidayJun2019} PhoneAmounts={phoneJun2019} TravelAmounts={travelJun2019} FoodAmounts={foodJun2019} BillsAmounts={billsJun2019} SubscriptionsAmounts={subscriptionsJun2019}  />
            
            
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
        <br/>
            <hr/>
            <h2> 2019  JUL spending </h2>
            <ReuseableBarChart TotalSpending={SUMJul2019} OtherAmounts={otherJul2019} TechAmounts={techJul2019} RetailAmounts={retailJul2019} HolidayAmounts={holidayJul2019} PhoneAmounts={phoneJul2019} TravelAmounts={travelJul2019} FoodAmounts={foodJul2019} BillsAmounts={billsJul2019} SubscriptionsAmounts={subscriptionsJul2019}  />
            
           
        </TabPanel>
        <TabPanel value={value} index={7} dir={theme.direction}>
        <br/>
            <hr/>
            <h2> 2019  AUG spending </h2>
            <ReuseableBarChart TotalSpending={SUMAug2019} OtherAmounts={otherAug2019} TechAmounts={techAug2019} RetailAmounts={retailAug2019} HolidayAmounts={holidayAug2019} PhoneAmounts={phoneAug2019} TravelAmounts={travelAug2019} FoodAmounts={foodAug2019} BillsAmounts={billsAug2019} SubscriptionsAmounts={subscriptionsAug2019}  />
            
            
        </TabPanel>
        <TabPanel value={value} index={8} dir={theme.direction}>
        <br/>
            <hr/>
            <h2> 2019  SEP spending </h2>
            <ReuseableBarChart TotalSpending={SUMSep2019} OtherAmounts={otherSep2019} TechAmounts={techSep2019} RetailAmounts={retailSep2019} HolidayAmounts={holidaySep2019} PhoneAmounts={phoneSep2019} TravelAmounts={travelSep2019} FoodAmounts={foodSep2019} BillsAmounts={billsSep2019} SubscriptionsAmounts={subscriptionsSep2019}  />
            
           
        </TabPanel>
        <TabPanel value={value} index={9} dir={theme.direction}>
        <br/>
            <hr/>
            <h2> 2019  OCT spending </h2>
            <ReuseableBarChart TotalSpending={SUMOct2019} OtherAmounts={otherOct2019} TechAmounts={techOct2019} RetailAmounts={retailOct2019} HolidayAmounts={holidayOct2019} PhoneAmounts={phoneOct2019} TravelAmounts={travelOct2019} FoodAmounts={foodOct2019} BillsAmounts={billsOct2019} SubscriptionsAmounts={subscriptionsOct2019}  />
            
        </TabPanel>
        <TabPanel value={value} index={10} dir={theme.direction}>
          
        <br/>
            <hr/>
            <h2> 2019  NOV spending </h2>
            <ReuseableBarChart TotalSpending={SUMNov2019} OtherAmounts={otherNov2019} TechAmounts={techNov2019} RetailAmounts={retailNov2019} HolidayAmounts={holidayNov2019} PhoneAmounts={phoneNov2019} TravelAmounts={travelNov2019} FoodAmounts={foodNov2019} BillsAmounts={billsNov2019} SubscriptionsAmounts={subscriptionsNov2019}  />
            
            
        </TabPanel>
        <TabPanel value={value} index={11} dir={theme.direction}>
        <br/>
            <hr/>
            <h2> 2019  DEC spending </h2>
            <ReuseableBarChart TotalSpending={SUMDec2019} OtherAmounts={otherDec2019} TechAmounts={techDec2019} RetailAmounts={retailDec2019} HolidayAmounts={holidayDec2019} PhoneAmounts={phoneDec2019} TravelAmounts={travelDec2019} FoodAmounts={foodDec2019} BillsAmounts={billsDec2019} SubscriptionsAmounts={subscriptionsDec2019}  />

        </TabPanel>
      </SwipeableViews>
      {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
          }}
          unmountOnExit
        >
          <Fab aria-label={fab.label} className={fab.className} color={fab.color}>
            {fab.icon}
          </Fab>
        </Zoom>
      ))}
    </div>
  );
}