import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import PotDashboard from "../components/PotsDashboard"
import DeletePotDashboard from "../components/DeleteSavingPot"

import API from "../services/api"



import swal from 'sweetalert';




const useStyles = makeStyles({
  card: {
    maxWidth: "30%",
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  const deletePot = () => {

    swal({
      title: "Are you sure you want to remove this Savings Pot?",
      icon: "warning",
      buttons: true,
      dangerMode: true
      }).then(
        willDelete => {

          if (willDelete) {
            API.deleteSavingPot(props.item.id)
  
            swal("The Saving Pot has been removed.", {
              icon: "success",
              timer: 1500
            }).then(props.deleteSavingPot() )
          }else {
        swal("The Saving Pot has not been removed.", {
          timer: 1500
        });
      }
    });

     

  };

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="20"
          image={require('../components/water1.png')}
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
        
      <PotDashboard item={props.item} />
      <DeletePotDashboard deleteSavingPot={props.deleteSavingPot} item={props.item} />


      {/* <button onClick={deletePot}> Delete </button> */}

   
      </CardActions>
    </Card>
  );
}