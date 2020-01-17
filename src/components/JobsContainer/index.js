import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { loadJobs } from "../../actions";
import JobItem from "../JobItem";
import ErrorMsg from "../ErrorMsg";

const useStyles = makeStyles(theme => ({
  jobsList: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap"
  },
  controls: { display: "flex", justifyContent: "center", margin: "2em" }
}));

const JobsContainer = ({ data: { jobs, isLoading, error } }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { lastPage } = useSelector(({ lastPage }) => ({
    lastPage
  }));

  return (
    <Box p={3}>
      <Box className={classes.jobsList}>
        {jobs &&
          jobs.map(jobItem => <JobItem key={jobItem.id} data={jobItem} />)}
      </Box>
      {error && <ErrorMsg error={error} />}
      <Box className={classes.controls}>
        {lastPage ? (
          "No more jobs for you!"
        ) : isLoading ? (
          <CircularProgress />
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(loadJobs())}
            disabled={isLoading}
          >
            load more jobs
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default JobsContainer;
