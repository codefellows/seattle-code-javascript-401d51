# Lab Submission Instructions

## Before You Begin

> **Visualize the Application**

Evaluate the lab requirements and begin with drawing a **UML** and/or a **Data/Process Flow diagram** ([examples](https://tallyfy.com/uml-diagram/)).  Having a solid visual understanding of the code you have/need and how it connects is critical to properly approaching this assignment.

> **Break Down the Assignment**
Once you have a good visual and mental model of how the application works, break down the requirements. For each requirement, ask yourself the following questions:

- Where should this new code live in the codebase?
- What existing code needs to be modified?
- What dependencies will I need to install?

> **Map your priorities and dependencies before jumping into the code.**

## Common Lab Setup & Submission Instructions

### Getting Started

- In the folder for each class in the class repository, you will find a `lab` folder
- The folder for each day in the repo contains:
  - README.md - The instructions for the lab
  - `starter-code` folder - Contains any starter code for your lab
- Create a new GitHub repository for each lab
  - If there is a `starter-code` folder for the lab, **copy its contents** *(not the folder itself)* into your new repository
- Ensure that your repository/branch is connected to and using GitHub Actions
- For deployable labs (servers)...
  - Ensure that your repository/branch is connected to an app at your cloud service provider.
    - Create a new cloud application for each assignment that requires a server deployment

### Configure Your Repository

 Configure the root of your code folder with the following files and directories. Thoughtfully name and organize any additional configuration or module files.

- **README.md** - contains your lab documentation
- **.env** - contains env variables (this file should be added to your .gitignore - do not commit it!)
- **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file
- **.eslintrc** - contains the course linter configuration
- **.eslintignore** - contains the course linter ignore configuration
- **package.json** - contains npm package configuration
  - create a `lint` script for running eslint (`eslint **/*.js`)
  - create a `test` script for running tests
  - create a `start` script for running your server
  - create a `deploy` script (optionally) to combine any of the above steps
- **/\_\_tests\_\_/** - contains unit tests

Setup "Github Actions" so that your code can be properly tested in Github as you make new pushes to your branches and pull requests to master

- Click the `Actions` tab in your repository
- Select `Node.js` as the workflow
- Edit the .yml file as follows
  - Note the changes to the `on:` key as well as the  `node-version`
- Commit this change

> Github will now run all of your automated tests (anything covered by `npm test` in your package.json) every time you push code to a branch or try to merge a pull request. In fact, it will block pull requests until your tests are all passing.

```yml
name: Node CI

on: [push,pull_request]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [10.x]

    steps:
    - uses: actions/checkout@v1
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - name: npm install, build, and test
      run: |
        npm ci
        npm run build --if-present
        npm test
      env:
        CI: true
```

### Canvas Submission

- Copy the README-template.md file from the reference/submission-instructions folder, rename it to `README.md` and include it in your lab repository in the root folder
- README must include the live (deployed) URLs to your
  - **running server** (Deployed URL)
    - Deployed server for express apps
    - Code Sandbox for React daily labs
    - Netlify, AWS, or Azure for React projects
  - **API Documentation** (swagger/blueprint)
- README should contain link to open PR on submission branch
- Keep submission branch PR open in case of resubmit
- Do NOT merge to master
- Submit a Link to this README.md

### Resubmits

- Any commits made to submission branch will be updated in the PR
- In event of assignment resubmission, submit submission branch PR on canvas
- **Code Sandbox Submissions**
  - Create a folder called `docs` (under `/public` for React apps)
  - Upload your README.md and any supportive images to this folder.
  - Submit a link to your `/docs/README.md` for your canvas submission

## Application Specific Submission Instructions

- [Node.js Applications](./node-apps.md)
- [Express/Server Applications](./express-servers.md)
- [React Applications](./react-apps.md)
