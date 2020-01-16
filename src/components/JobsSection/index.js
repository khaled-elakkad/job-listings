import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { loadJobs } from "../../actions";
import JobsContainer from "../JobsContainer";
import JobDetails from "../JobDetails";

const JobsSection = () => {
  const { isLoading, jobs, error } = useSelector(
    ({ isLoading, jobs, error }) => ({
      isLoading,
      jobs,
      error
    })
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadJobs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <JobsContainer data={{ jobs, isLoading, error }} />
          </Route>
          <Route path={`/:jobId`}>
            <JobDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default JobsSection;
