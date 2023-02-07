# Lab Submission Instructions: Express and Server Application

## Before You Begin

Refer to the [Common Lab Submission Guide](README.md) for general guidelines and instructions common to all lab submissions

### Deployment

- Your server must be deployed to the cloud.
- If it requires a database, provision it.
- For APIs, your endpoints should all be testable remotely using an HTTP REST client.
- For Web Servers, your website must be reachable.

### Testing

- Write a complete set of tests for all data models, independent of the server
- Use an in-memory SQL dialect to test your Postgres Models.
- For testing the server and routes, make sure you initialize the database before your tests run.
  - What we're testing is not whether express works, but whether your routes are doing the correct things.
- Your tests must be running green on Github Actions.

### Documentation

#### Compose a UML or Process/Data Flow Diagram for every application

 [UML Reference](https://www.uml-diagrams.org/index-examples.html)

- This should be the first thing you do when beginning work on a lab assignment.
- Draw the process/data flow of your application and map it to the code you will need to write or evaluate/fix.

#### JSDoc

[Official Documentation](http://usejsdoc.org/about-getting-started.html) | [Cheat Sheet](https://devhints.io/jsdoc) | [Style Guide](https://github.com/shri/JSDoc-Style-Guide)

- Write proper jsDoc for every function, module, and class.
  - Be descriptive about the functions' purpose
  - Declare data types for params and return values
