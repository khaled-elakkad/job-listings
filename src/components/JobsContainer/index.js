import React from "react";
import { useDispatch } from "react-redux";
import { Box, Button, CircularProgress } from "@material-ui/core";

import { loadJobs } from "../../actions";
import JobItem from "../JobItem";

const JobsContainer = ({ data: { jobs, isLoading, error } }) => {
  const dispatch = useDispatch();

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-around" flexWrap="wrap">
        {jobs &&
          jobs.map(jobItem => <JobItem key={jobItem.id} data={jobItem} />)}
      </Box>
      {error && "error"}

      <Box display="flex" justifyContent="center" m={2}>
        {isLoading ? (
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
