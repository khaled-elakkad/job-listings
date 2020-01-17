import { getLastPage } from "../helpers";

const URL = `http://localhost:5000/jobs`;

const fetchJobs = async page => {
  const response = await fetch(`${URL}?_limit=6&_page=${page}`);

  const lastPage = getLastPage(response.headers.get("Link"));
  console.log("lastPage", lastPage);

  const data = await response.json();

  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

const fetchDetails = async id => {
  const response = await fetch(`${URL}/${id}`);
  const data = await response.json();

  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export { fetchJobs, fetchDetails };
