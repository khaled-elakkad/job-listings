import React, { useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  CardActions,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loadDetails } from "../../actions";
import { isEmpty } from "../../helpers";

const useStyles = makeStyles(theme => ({
  detailsContainer: {
    padding: "2em",
    margin: 50,
    display: "flex",
    justifyContent: "center"
  },
  card: {
    maxWidth: 1000,
    margin: 10
  },
  label: {
    fontSize: 20
  },
  value: { fontSize: 18, marginBottom: 15 },
  actions: { display: "flex", justifyContent: "center" }
}));

const JobDetails = () => {
  const classes = useStyles();
  const { goBack } = useHistory();
  const { jobId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDetails(jobId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { details } = useSelector(({ details }) => ({
    details
  }));

  if (isEmpty(details)) return <CircularProgress />;

  const { isLoading, error, jobDetails } = details;

  return (
    <>
      {jobDetails && (
        <Box className={classes.detailsContainer}>
          {isLoading && <CircularProgress />}
          {error && "error"}
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Job Title
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.value}
              >
                {jobDetails.title}
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Description
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.value}
              >
                {jobDetails.description}
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Employment Type
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.value}
              >
                {jobDetails.employment_type}
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Location
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.value}
              >
                {jobDetails.location}
              </Typography>
            </CardContent>
            <CardActions className={classes.actions}>
              <Button variant="contained" size="small" onClick={() => goBack()}>
                Back to the other jobs
              </Button>
            </CardActions>
          </Card>
        </Box>
      )}
    </>
  );
};

export default JobDetails;
