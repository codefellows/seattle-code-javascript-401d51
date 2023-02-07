# Lab Submission Instructions: React Applications

## Before You Begin

Refer to the [Common Lab Submission Guide](README.md) for general guidelines and instructions common to all lab submissions

Starter code may be provided for you in the `lab/starter-code` folder.

When provided, open [Code Sandbox](http://codesandbox.io) and Create a new application. When prompted, choose "From GitHub" and then paste in the URL to the current lab starter code folder from your fork of the class repository.

You will be submitting the URL to this working sandbox as part of your assignment.

### Deployment

- For daily labs, using [Code Sandbox](http://codesandbox.io) for Web and [Expo Snacks](https://snack.expo.dev) for React Native is sufficient for deployment.
  - Note that for a single lab, you may have multiple sandboxes.
- Your final/end of module projects (applications) must be deployed at AWS Amplify, Netlify, Github Pages, or Expo.

### Testing

- For components, do behavioral tests with [RTL](https://testing-library.com/docs/react-testing-library/intro)
- Focus your testing on writing the code that would mimic what a user would do and how they use the app
  - "When I take action 'x' ... behavior 'y' happens"
  - "When the state changes as a result of an action, what changes does the user see"
  - "Do things change as a click or type or submit?"
- Make with assertions on
  - Interactivity
  - Class/CSS Application
  - Visual State Changes
- For applications that use Redux reducers, create pure unit tests to assert their baseline functionality

### Documentation

#### Compose a UML or Process/Data Flow Diagram for every application

 [UML Reference](https://www.uml-diagrams.org/index-examples.html)

- This should be the first thing you do when beginning work on a lab assignment.
- Draw the process/data flow of your application and map it to the code you will need to write or evaluate/fix.

#### React Lab Canvas Submissions

- Create a new Repository for each lab
- Include one README.md
- Include your UML diagram(s)
- Include a README with all URLs (including multiple sandboxes if the lab required them)
