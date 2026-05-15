# Week 3 - Backend Development

This folder contains backend development practice with Node.js, Express, and MongoDB.

///###USER AUTHENTICATION.(login and register operations)
  //submit credential to login and get token. is called authentication.
  //protected routes which askn our user to login before accessing the resource by user only.
  //public routes which can be accessed by anyone without login if they have the url then anyone can access the route.
  //DEFAULT every route is a public route.
  //we need to add security to make some routes to protected routes..
 req->public routes(any one)
 req->middleware->protected routes(authetication user only)
 //middleware can send response even there is something error..



  xss and csrf ??
  csrf cross site refer forgie dubmy page whwn thw sameSite=none that is cause to csrf attack.

  //HTTP COOKIE IS 100 SECURE FOR STORING DATA BECAUSE THE DATA IN HTTP COOKIES CANNOT ACCESS BY BROWSER.
  //to access cookies property of request object we need cookie parsal middleware.otherwise request.cookie is undefined.

 day 8 assisgnment...
  //make the following routes protected
  //-read users &products
  //-read users & product by id
  //-update user & product
  //-delete user & product.
### Project Structure:
- `server.js` — Main server file with Express setup and route configuration
- `package.json` — Dependencies and scripts
- `req.http` — HTTP request examples for testing APIs

## API
- `/user-api` — User management 
- `/product-api` — Product management 


### Setup Instructions:
1. Install : npm install
2. Set up environment variables in env file
3. Start server: node server.js
