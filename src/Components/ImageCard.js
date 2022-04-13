import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import place from './place';
import { Collapse } from '@mui/material';


const useStyles = makeStyles(theme => ({
    root: {
        width: 505,
        background: 'rgba(0, 0, 0, 0.5)',
        margin: '20px',
    },
    media: {
      height: 440,
      // background: 'red',
    }, 
    title: {
        fontFamily: "Nunito",
        fontWeight: "bold",
        fontSize: "2rem",
        // color: "#fff",
    },
    desc: {
        fontFamily: "Nunito",
        fontSize: "1.5rem",
        fontWeight: "bold",
    },
}));

export default function ImageCard({place, checked}) {
  const classes = useStyles();
  return (
    <Collapse in={checked}  {...(checked ? { timeout: 2000 } : {})} >
    <Card className={classes.root} >
      <CardMedia
        //  component={'img'}
        className={classes.media}
        image={place.imageUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography 
        gutterBottom 
        variant="h5"
        component="h1"
        className={classes.title}
         >
          {place.title}
        </Typography>
        <Typography 
        variant="body2"
        color="textSecondary"
        component="p"
       className={classes.desc} >
         {place.description}
        </Typography>
      </CardContent>
    </Card>
    </Collapse>
  );
}