import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button'


const ranges = [
  {
    value: 'bills',
    label: 'Bills',
  },
  {
    value: 'subscriptions',
    label: 'Subscriptions',
  },
  {
    value: 'food',
    label: 'Food',
  },
  {
    value: 'travel',
    label: 'Travel',
  },
  {
    value: 'phone',
    label: 'Phone Contract',
  },
  {
    value: 'holiday',
    label: 'Holiday',
  },
  {
    value: 'other',
    label: 'Other',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    flexBasis: 200,
  },
}));

export default function FilledInputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
           
    <div >

<img
              alt="oh no!"
              className="ui medium circular image bordered"
              src="data:image/jpeg;base64,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ieeX5W8h9VrixynuzPlTx4tJKy2w9HS1rSZIABJ3MDcrZpHJZRdCkcizGkJCyimgEREAREQBERAEREAREQBERAEREAREQBERAcK7HLS/MY3XI0sTWnYr3Wx5AvuuP2Oz0R0NbNBzVbic2HElc/VxTnWa0lRK2DqOBmytfsdfRIzXtGJ0Uw57jsB+pXP4/JMwxO+lrd9IJ9J5q07N0m06zte52J5cQF3DMdSA2AI2K0j+i3WPX8ily04qnTa19K4Fy24681sdmjmvFi215tddBhsza5sqDmeKY6zo9Vk3ei90aznA07rn8RUNSoH3mfCBuSdl6rtYDaw5f0X07sJktOnQZWdTAqPuHOu4NPwxO1lrixdmebNyOsSZ2Myp9CgO9AFR51OA4Dg32+qv0RdCMVFUjmTk5NthERWKhERAEREAREQBERAEREAREQBERAEREAREQBERAfGsTjiTDRZaWMDrloPW6uMs7E4mqJeRSafzXP8AKP1V7T+z1rRbE1J4y1seg3+a5fwTltI6q5EIumzlHVGNGwCgPql8hosu6P2fNO+Id5+FqtMF2NwtOJDn/wCc29hAUrjZH5EuXj+j5ll/Z2pXdFNhcRueA6u2ldlkPYAgTiqmr/ps26F+/su6pUmtAa0AAbACB7L2vXDjpednjycqUv8AOjla/YXDn4H1GdHT/wCQWun9n2GG76rurh+y65Ff4YejP5sns57Bdi8FTcHClqI4vcXX6EwugAWUWiil4M3JvyERFJAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH//2Q=="
            />

    <div className="TransactionModal">
        <h1>New Transaction:</h1>
        <br/>
    </div>

    <br/>
      <hr/>

<from>
      <TextField
        id="filled-simple-start-adornment"
        className={clsx(classes.margin, classes.textField)}
        variant="filled"
        label="Company Name"
        InputProps={{
          startAdornment: <InputAdornment position="start"> </InputAdornment>,
        }}
      />
      <br/>
      <TextField
        select
        className={clsx(classes.margin, classes.textField)}
        variant="filled"
        label="Category"
        value={values.weightRange}
        onChange={handleChange('weightRange')}
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
      >
        {ranges.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <br/>

      <TextField
        id="filled-adornment-amount"
        className={clsx(classes.margin, classes.textField)}
        variant="filled"
        label="Amount"
        value={values.amount}
        onChange={handleChange('amount')}
        InputProps={{
          startAdornment: <InputAdornment position="start">£</InputAdornment>,
        }}
      />
            <br/>

      <TextField
        id="filled-adornment-weight"
        className={clsx(classes.margin, classes.textField)}
        variant="filled"
        label="Date of Transaction"
        value={values.weight}
        onChange={handleChange('weight')}
        helperText="DD/MM/YYYY"
        InputProps={{
          endAdornment: <InputAdornment position="end"></InputAdornment>,
        }}  
      />
      <br/>
      <Button variant="outlined" color="secondary" type="button">
          Submit Transaction
      </Button>
      <br/>
      <hr/>
      <br/>
      </from>
    </div>
  );
}