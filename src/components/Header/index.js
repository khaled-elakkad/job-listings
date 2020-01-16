import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: 50,
    textAlign: "center",
    margin: 10
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Typography variant="h1" className={classes.title}>
        We want you!
      </Typography>
    </AppBar>
  );
};

export default Header;
