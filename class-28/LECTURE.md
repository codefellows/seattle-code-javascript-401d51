# Use Effect Hook

## Whiteboard

[Today's Freehand]()

## Code Review

see recording / see class repo

## Lifecycle Events

In Class components, how did we manage lifecycle events
```javascript
class App extends React.Component{
  constructor(){
    super(props);
  }

  componentDidMount(){
    console.log('something mounted!')
  }

  componentWillReceiveProps(props){
    console.log('I got some props!)
  }

  componentDidUpdate(){
    console.log('something updated!');
  }

  componentWillUnmount(){
    console.log('something unmounted...)
  }
}
```

in function components we have one lifecycle hook that can handle "everything": `useEffect()`

### useEffect() Hook

WHY
- manage lifecycle events
- manage side-effects

`useEffect()` will handle all of the following:
- if we utilize `useEffect()` correctly...
  - every time an event occurs (greedy)
  - can a thing ONCE when an event occurs (on mount)
  - can do a thing when state is updated
  - when a component un mounts - important to turn things off!

### NOTE:

- we are using a "dev environment" build when we run npm start.  `npm run build` would give us a production level environment that we could deploy (netlify and render run `npm run build`)
- we will see events run "double" the amount of expected times when page loads.
