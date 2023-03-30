# API Integration Workshop

## Whiteboard

[Invision Freehand]()

### API Integration

- [The Api Server](https://codefellows.github.io/code-401-javascript-guide/curriculum/apps-and-libraries/api-server/)
- note:  the auth and todo endpoints are not documented on the api readme, they are documented [below](#user-routes).
#### API Server

Use the `https://api-js401.herokuapp.com` to login and get tokens to use with these components

Note: hit the signin route with the following information and receive token
- Admin Access: 
```javascript
{
    "username": "admin",
    "password": "ADMIN"
}
```
- Editor Access: 
```javascript
{
    "username": "editor",
    "password": "EDITOR"
}
```
- Guest Access: 
```javascript
{
    "username": "user",
    "password": "USER"
}
```

useful models and routes:
- todo - showing todo properties to help with api use
```javascript

const todo = mongoose.Schema({
  text: { type: String, required: true },
  assignee: { type: String },
  complete: { type: Boolean, default:false },
  difficulty: { type: Number, default: 1 },
});

```

- users - showing user properties to help with api use
```javascript

const users = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullname: { type: String },
  email: { type: String },
  role: { type: String, default: 'user', enum: ['admin', 'editor', 'writer','user'] },
});

```

#### User Routes: 

POST:  `/signup` 

- send user object in request body

POST:  `/signin` 

- send login user object:  basic auth header, username and password 

#### ToDo Routes

full RESTful CRUD at `/todo` endpoint

get all example:  `https://api-js401.herokuapp.com/api/v1/todo`

> NOTE V2:  `https://api-js401.herokuapp.com/api/v2/todo` will require a token and utilize bearer auth middleware
