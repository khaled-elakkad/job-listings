# Job Listings Project

This web app display job posts to a user.
The app has two routes:

- **All Jobs:** Lists all jobs.

- **Job Details:** Displays details about a certain job.

Each book in both pages has a selector for reclassifying that book.

## Running the Web App

To run and use the app:

1. install [`json-server`](#https://www.npmjs.com/package/json-server) globally `yarn global add json-server`

2. clone the repo with `git@github.com:khaled-elakkad/job-listings.git`

3. navigate into the project directory with `cd job-listings`

4. install all project dependencies with `yarn`

5. run locally in development mode `yarn dev`

## What You're Getting

```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
└── src
    ├── App.js # The root of the app. Encapsulates the app in the Redux Provider
    ├── actions # Redux actions
    ├── constants # Contains constants across the app.
    ├── helpers.js # Contains functions used by various components to provide different functionalities .
    ├── components # contains the child componets of the routes
    |   ├── ErrorMsg
    |   ├── Header
    │   ├── JobDetails
    |   ├── JobItem
    |   ├── JobsContainer
    |   └── JobsSection
    ├── reducers # contains the redux state reducers
    ├── sagas # contains the redux sagas that does async state update
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering only.
```

## API

To simplify your development process, we've provided a backend server for you to develop against. The provided [`api`](src/api) contains the methods you will need to perform necessary operations on the backend:

- [`fetchJobs`](#fetchJobs)
- [`fetchDetails`](#fetchDetails)

### `fetchJobs`

Method Signature:

```js
fetchJobs(page);
```

- page: `<String>` contains the page number of jobs list.
- Returns a Promise which resolves to a JSON object containing a collection of 6 jobs for the page passed.

### `fetchDetails`

Method Signature:

```js
fetchDetails(id);
```

- id: `<String>` containing the `id` of the job fetch.
- Returns a Promise which resolves to a JSON object containing the job details of the id passed.

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Backend

- data item shape

```js
{
    "id": 9,
    "title": "HR Specialist",
    "description": "Experienced with HR policies and systems.",
    "employment_type": "Full time",
    "location": "Alexandria"
}
```

- fake API package is [`json-server`](#https://www.npmjs.com/package/json-server)

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
