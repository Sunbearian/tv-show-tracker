# TV Show Tracker

This is a little side project I want to work on that will be useful for myself and my partner. It is deployed here https://tvshowtracker.onrender.com/

I would like to practice making a full stack application. It's essentially a simple list app of what TV shows you've watched, which series you got to and a simple rating. I would like to bring in an API to add extra functionality like where to watch and a search feature but I'm focusing on the first key features.

These are things I would like to practice with this project:

- Frontend React app with lots of reuseable components
- Backend with Express and routes/ models to a database to store the information
- Using Authentication to bring up the a users own information

## Working on next...

I want to go back over the tests as I've discoverd MSW which means I can write more meaningful unit tests requiring an API response. Also going to write some integration tests for the backend and get that added to the CI pipeline.

## Progress so far

- I started by setting up a simple monorepo and mapped out the workflow of the app and looking at the data and component tree.

- I protected the main branch from having code pushed directly to main. Looking to add GitHub actions with automated testing when I get to the tests.

- Worked on creating a simple navbar component.

- Created the TV Show input component, working through what the object type will look like and making sure data is stored in state correctly. Not worrying about the backend for the moment.

- Now I can capture data, I started working on a basic card component to display the TV shows. I had some issues with displaying the date and tweaked the object type

- Worked on CSS for all the current components, trying to make sure they are responsive and are uniformed in nature no mater the data displayed.

- Worked on having the input form reset after adding a TV Show. Had difficulties with the TypeScript Object as some fields where being stored as numbers and wasn't letting me have a blank number field. After some research decided it was easier to have them all as strings and updated the object type again.

- Wrote some simple tests in React Testing Library so I can learn about GitHub actions and requiring the tests to pass before merging to main.

- Started looking at adding Auth0 to the app as I really want to have user specific lists as it's not something I have done yet. Had some issues as also learning React Routes (which has just been updated) so the Auth0 docs are out of date. Doing this in TypeScript for the first time has also been ... interesting! Managed to work through it by reading the React Routes docs and now have some protected routes.

- Currently happy with the frontend so moving to getting the backend server set up and get some persistent data stored. Created a simple express server linked to a PostgreSQL database. I was going to learn MongoDB but have decided on getting personalised lists working first.

- Realised I need to think about how a user would arrive at the site and the user flow to link Auth0 and ID storage. Mapped it out and it is all working and using the unique ID from Auth0 to get personalised lists

- Updated the site visually and worked more on the CSS to be good for mobile as well.

- Worked on adding authorisation to the API end points on the backend server. Took a little while to workout how Auth0 handles tokens and getting them silently when the user logins. Battled through and got the end points locked down requiring a user to be authenticated to get access to the end points.
