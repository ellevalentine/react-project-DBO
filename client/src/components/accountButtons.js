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

    const amount = props.userTransaction

    const allPots  = props.userPots

    


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
            <TranDashboard/> <br/>
            </div>
            Transactions:
            <br/>
         <ReactVirtualizedTable rows={props.userTransaction}/>
           
            <br/>
            <hr/>
            <OverAllChartsPage />
      

          </TabContainer>

        <TabContainer dir={theme.direction}>
        
    
    <div className='addButton'>
      <NewPotDashBoard/>
      <br/>
      <br/>
      </div>
    <hr/>
    <div>
      <MapPots userPots={props.userPots} />
      
    </div>
          

          </TabContainer>

        <TabContainer dir={theme.direction}>Stocks Account</TabContainer>

      </SwipeableViews>
    
    </div>
  );
}