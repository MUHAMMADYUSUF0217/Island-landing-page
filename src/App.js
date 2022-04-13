import react from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
import Header from "./Components/Header";
import PlaceToVisit from "./Components/PlaceToVisit";

const useStyles = makeStyles(theme => ({
root: {
  minHeight: "100vh",
  backgroundImage: `url(${process.env.PUBLIC_URL}/Asset/bgc.jpg)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}

}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <PlaceToVisit/>
    </div>
  );
}
