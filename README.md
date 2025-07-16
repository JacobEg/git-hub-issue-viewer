# git-hub-issue-tracker

## Description
This is a project to create a viewer for issues on GitHub. The user enters a given repo and its owner and receives a list of the open issues on GitHub
for that repo.

## TODO
- Implement pagination.
- Implement access to private repos via a Personal Access Token.
- Add more CSS to make it nicer-looking.

## Known bug(s)
- When the user clicks on the "Back to Home" button in the IssueDetails component, the state of the Home page is not maintained.

## To setup

Precondition: Have npm and electron installed on your machine.

In the project directory, you can run:

### `npm install`
Installs the required dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run electron-win` (on Windows) | `npm run electron-mac` (on macOS)

After the react server is started via `npm start`, run this command in a different terminal to start the electron desktop app.\
Note: I don't have a macOS device and as such cannot personally vouch that the Electron app runs on macOS without complications.

## Design and Implementation notes.

I divided the project into several Components and files. Each one meant to represent a core part of the app.

### Home
The home page available at `/`. This contains the `form` for getting the repo's name and owner in order to simplify passing it to `IssueList`.

### IssueList
Lists the title and author of the open issues in the repo. Each issue links to the `IssueDetails` component via the `Link` React component.

### IssueDetails
Details the issue (its title, creator, body, and last updated time/date) and lists the comments under that ticket.\
Available at /issues/:owner/:name/:id

### NotFound
The 404 page.

### fetchIssueData.js
Functions making calls to the GitHub API to get the list of issues for a particular repo, a specific issue for a particular repo, and the comments for a specific issue.