import react from "react";
import { makeStyles } from "@material-ui/core";
import ImageCard from "./ImageCard";
import place from "./place";
import useWindowPosition from "../Hook/useWindowPosition";


const useStyles = makeStyles(theme => ({
    root: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
        },
    },
}));

export default function PlaceToVisit() {
  const classes = useStyles();
  const checked = useWindowPosition('header')
  return (
    <div className={classes.root} id="place-to-visit" >
      <ImageCard place={place[0]} checked={checked} />
      <ImageCard place={place[1]} checked={checked} />
    </div>
  );
}