import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import PotDashboard from "../components/PotsDashboard"

const useStyles = makeStyles({
  card: {
    maxWidth: 280,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="20"
          image="https://camblab.info/wp/wp-content/uploads/2017/02/pool-water.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.item.name}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
          {props.item.description}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
          {props.item.goal}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
          {props.item.date}
          </Typography>



        </CardContent>
      </CardActionArea>
      <CardActions>
        
      <PotDashboard />
   
      </CardActions>
    </Card>
  );
}