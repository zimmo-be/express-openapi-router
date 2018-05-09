# express-openapi-router [![Build Status](https://travis-ci.org/zimmo-be/express-openapi-router.svg?branch=master)](https://travis-ci.org/zimmo-be/express-openapi-router) [![codecov](https://codecov.io/gh/zimmo-be/express-openapi-router/badge.svg?branch=master)](https://codecov.io/gh/zimmo-be/express-openapi-router?branch=master)

This router will allow you to route controllers based on the operationId inside your OpenAPI 3.0 spec file. The
usage is very similar to the default Express JS Router.


## Install

```
$ npm install express-openapi-router
```


## Usage

Create a routes.js file that defines your controllers for each operationId in your OpenAPI spec:

```js
const OpenApiRouter = require('express-openapi-router');

const api = new OpenApiRouter(require("path/to/your/openapi.json"));
api.use("showPetById", (req, res) => {
   res.send("Here's your pet!");
});

module.exports = api.router; // this attribute contains the actual ExpressJS Router
```

In your `app.js`:

```js
const routes = require("routes.js");

app.use(routes);
```


MIT © [Zimmo.be](https://www.zimmo.be/)
