# hiring-app
## Build Instructions
- In the project directory, you can run:

### `npm start`
- Runs the app in the development mode.\
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
- The page will reload when you make changes.\
- You may also see any lint errors in the console.

### `npm test`
- Launches the test runner in the interactive watch mode.\

### `npm run build`
- Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
- The build is minified and the filenames include the hashes.\
- Your app is ready to be deployed!

## Description (Assumptions & Library Choices)
Thanks for taking the time to review my submission.

I assumed the user should start with an empty state and would wanna add applicants for editing one at a time.
Otherwise, there wasn't anything else I felt unclear about with the requirements or no other assumptions made.

Due to the requirements being fairly straightforward I wanted to keep things simple.
With this in mind, the libraries I chose to use for my app were:
    - Fetch for making GET request to Random User Generator API
    - Typescript for strongly typing my components / functions
    - Jest / React-Testing-Library as specified in the instructions although I would've chosen to use these for automated
        unit tests anyways
    - CSS since the app doesn't have too many individual components and in order to move quickly
        - In the past, I've used Emotion/SASS extensively for larger applications
