# Context

## Whiteboard

[Today's Freehand](https://projects.invisionapp.com/freehand/document/W2Ze6UlAL)

## Whiteboard Tips and "Tricks"

- one step at a time!  see the whiteboard image, follow sequence
- do psuedocode (if time, don't confuse with algorithm)  - DO NOT let it turn into actual code
- ask QUESTIONS!!!!  
- test cases!   (make no assumptions) 
    - numbers -> whole numbers?  negative values? floats?
- stick the plan - rubric, example layout (approach). ask questions
- (this is a conversation,) check-in with interviewer often follow their plan
- self care!!!!  keep your head in the game, wiggle your tows, don't lock your knees, deep breaths.  - don't freeze up, don't need to overthink.  (This is meant to be a natural process where you can share all of your thoughts)

## Global State with Context

Context is an object that can be consumed (read and/or updated) by ANY children of the provider

- Provider: maintains an internal state that is accessible to ANY child of the provider
- Consumers: child components that may opt into context values and/or behaviors.

When to use:  when you to share information across multiple sibling (or descendent) components
- Settings read by all components
  - Theme values
  - User info:  login/logout, capabilities, details like social media or email

When NOT to use:  Complex component groups that directly share values that other sibling components have no business accessing;
- sometimes data needs to be managed very carefully
