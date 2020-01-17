import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center"
  },
  message: {
    color: theme.palette.error.main,
    border: `1px solid ${theme.palette.error.main}`,
    padding: "1.5em"
  }
}));

export default function ErrorMsg({ error }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.message}>{error}</Box>
    </Box>
  );
}
