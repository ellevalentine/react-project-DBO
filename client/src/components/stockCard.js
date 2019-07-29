import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import BuyStockDashboard from "../components/BuyStockDashboard"

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className="stockCards">
      <CardContent>
        
        <Typography variant="h5" component="h2">
          
          {bull}
          {props.stock.name}
          {bull}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {props.stock.sector}

        </Typography>
        <Typography variant="body2" component="p">
        {props.stock.ticker}

        </Typography>

        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {props.stock.price}

        </Typography>

      </CardContent>
      <CardActions>
         <BuyStockDashboard/>
      </CardActions>
    </Card>
  );
}