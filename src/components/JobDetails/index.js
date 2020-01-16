import React from "react";
import { useParams, useHistory } from "react-router-dom";

const JobDetails = () => {
  const { goBack } = useHistory();
  const { jobId } = useParams();
  return (
    <div>
      <h3>Job ID is: {jobId}</h3>
      <button onClick={goBack}>back to list of jobs</button>
    </div>
  );
};

export default JobDetails;
