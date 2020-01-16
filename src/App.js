import React from "react";
import { Provider } from "react-redux";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./components/Header";
import JobsSection from "./components/JobsSection";

import configureStore from "./store";

const store = configureStore();

const useStyles = makeStyles(theme => ({
  container: {
    background: "#e8eaf6",
    minHeight: "100vh"
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Box className={classes.container}>
        <Header />
        <JobsSection />
      </Box>
    </Provider>
  );
};

export default App;
