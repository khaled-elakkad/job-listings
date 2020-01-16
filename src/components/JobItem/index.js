import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography
} from "@material-ui/core";

import { truncate } from "../../helpers";

const useStyles = makeStyles({
  card: {
    width: 380,
    margin: 10
  },
  label: {
    fontSize: 14
  },
  value: {
    marginBottom: 10
  }
});

const JobItem = ({ data: { id, title, description, employment_type } }) => {
  const classes = useStyles();
  const { push } = useHistory();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Job Title
        </Typography>
        <Typography variant="body2" component="p" className={classes.value}>
          {title}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Description
        </Typography>
        <Typography variant="body2" component="p">
          {truncate(description)}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => push(`/${id}`)}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobItem;
