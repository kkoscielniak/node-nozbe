# node-nozbe
NodeJS implementation of Nozbe REST API.

It partially implements functionality of the Nozbe REST API available [here](https://webapp.nozbe.com/pl/api). Basically this is a proof of concept, cool for creating small utilities for Nozbe, without providing the fully-featured set of Nozbe functionalities. If you need something richer, please contact Nozbe support and discuss the idea with them.

## Installation 
```
npm i node-nozbe
```

## Usage
```javascript
const nozbe = require('node-nozbe');

nozbe.addTask(clientId, accessToken, {
  name: 'Create rich docs for node-nozbe',
})
```
Where 
* `clientId` is obtained during registration of the application with `registerApp()` function
* `accessToken` is the end-user's api key provided by `getOAuthAccessToken()` or in Nozbe settings

All the functions return a **Promise**.

More detailed documentation of `node-nozbe` with all the functions described is available [here](/DOCS.md). 

## Why? 

The package's sole purpose was to serve as a playground for learning the package development process itself. It was never meant to cover all the aspects of the API as I do not need them. However, if you are willing to expand its possibilities, feel free to open a Pull Request or an Issue.
