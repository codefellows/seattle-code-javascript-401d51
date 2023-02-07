# Lab Submission Instructions: Standard Node.js Applications

## Before You Begin

Refer to the [Common Lab Submission Guide](README.md) for general guidelines and instructions common to all lab submissions

### Deployment

Depending on the lab, you may be building a command line application or just a library. In either case ...

- Assume other developers will be downloading and using your app or library from your GitHub Repository
- Pay special attention to the developer centric parts of your README
  - How do I install the app or library?
  - How do I test the app or library?
  - For Applications:
    - How do I run the app?
    - How do I set up the app?
- **Stretch Goal: Publish your App or Library to NPM**
  - Libraries: This would allow anyone to do an `npm install` of your library
  - Apps: This would allow a user to do an `npm install -g` of your application and run it from their command line
    - This requires a new `bin` section in your `package.json`

### Testing

- Write a complete set of tests for all functional units and modules
- Your tests must be running green on Github Actions

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
