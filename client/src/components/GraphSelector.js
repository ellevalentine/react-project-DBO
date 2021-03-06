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
// import ReuseableBarChart from "./TypeReuseableBarChart"
import MonthsBarChart from "../components/MonthsReuseableBarChart"

// import MonthSelector2019 from "../components/MonthSelector2019"
// import MonthSelector2018 from "../components/MonthSelector2018"

import MonthDropDown2019 from "../components/MonthDropDown2019"
import MonthDropDown2018 from "../components/MonthDropDown2018"



function TabPanel(props) {

  const { children, value, index, userTransactions, ...other } = props;

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
    width: "100%",
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

export default function GraphSelector(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);


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
          <Tab label="2019" {...a11yProps(0)} />
          <Tab label="2018" {...a11yProps(1)} />
          {/* <Tab label="2017" {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >


        <TabPanel value={value} index={0} dir={theme.direction}>
        <hr/>
            <h1> 2019 spending </h1>
            {/* add categories */}
            <MonthsBarChart total={props.total_2019.sum_of_year} jan={props.month_sum_2019.jan} feb={props.month_sum_2019.feb} mar={props.month_sum_2019.mar} apr={props.month_sum_2019.apr} may={props.month_sum_2019.may} jun={props.month_sum_2019.jun} jul={props.month_sum_2019.jul} aug={props.month_sum_2019.aug} sep={props.month_sum_2019.sep} oct={props.month_sum_2019.oct} nov={props.month_sum_2019.nov} dec={props.month_sum_2019.dec} month_sum_2019={props.month_sum_2019} />
            <hr/>
            <MonthDropDown2019 month_categories_2019={props.month_categories_2019} total_2019={props.total_2019} month_sum_2019={props.month_sum_2019} category={props.month_sum_2019}/>
        </TabPanel>




        <TabPanel value={value} index={1} dir={theme.direction}>
        <br/>
            <hr/>
           
            <h1> 2018 spending </h1>
            <MonthsBarChart total={props.total_2018.sum_of_year} jan={props.month_sum_2018.jan} feb={props.month_sum_2018.feb} mar={props.month_sum_2018.mar} apr={props.month_sum_2018.apr} may={props.month_sum_2018.may} jun={props.month_sum_2018.jun} jul={props.month_sum_2018.jul} aug={props.month_sum_2018.aug} sep={props.month_sum_2018.sep} oct={props.month_sum_2018.oct} nov={props.month_sum_2018.nov} dec={props.month_sum_2018.dec} month_sum_2018={props.month_sum_2018} />
            <hr/>
            <MonthDropDown2018 month_categories_2018={props.month_categories_2018} total_2018={props.total_2018} month_sum_2018={props.month_sum_2018} category={props.month_sum_2018}/>
        </TabPanel>


        {/* <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel> */}


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