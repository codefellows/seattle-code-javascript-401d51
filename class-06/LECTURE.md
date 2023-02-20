# Basic Auth

## Linked List Warmup

[Linked List Warmup](https://replit.com/@rkgallaway/401d51-linked-list-traversal#index.js)
[Linked List Warmup Solution](https://replit.com/@rkgallaway/401d51-linked-list-traversal#index.js)

## Whiteboard

[Today's Freehand](https://projects.invisionapp.com/freehand/document/QWqOYAP19)


## Content

[SEE README](./README.md)

### Terminology:

- authentication:  are you who you say you are?
- authorization:  what you can do based on who you are.
- cryptographic hash:   enciphered text called a hash value, or just “hash." with enciphered text that can  be stored instead of a password itself, and later used to verify the user 
- cypher algorithms:  A cryptographic hash function is an algorithm that takes an arbitrary amount of data input—a credential—and produces a fixed-size output
- encoding:  put data in a specific sequence, it can be decoded and returned to it's original form.  tool we use:  `base-64`
- encryption: see hash.  important takeaway is that salt (extra data) pepper (the original data).  `bcrypt`

## The authentication process

1. signup:  no encoding here, we send json data in the request body via post:  typically confirms by sending some user info back (user info today, token once auth series is complete)
1. signin:  send Basic Auth String (encoded username and password) in the Authorization Header, compare the encoded password to the hashed password use bcrypt 

why encode?
- secure signin information as we log into our server.

why encrypt?
- we never want to save a raw or encoded password in out database
- hashing adds salt to the "pepper" and forever changes the form of the password as a measure of security


