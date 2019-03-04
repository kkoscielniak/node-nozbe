# node-nozbe 📦
[![Coverage Status](https://coveralls.io/repos/github/kkoscielniak/node-nozbe/badge.svg?branch=master)](https://coveralls.io/github/kkoscielniak/node-nozbe?branch=master)

NodeJS implementation of Nozbe REST API.

It partially implements functionality of the Nozbe REST API available [here](https://webapp.nozbe.com/pl/api). Basically this is a proof of concept, cool for creating small utilities for Nozbe, without providing the fully-featured set of Nozbe functionalities. If you need something richer, please contact Nozbe support and discuss the idea with them.

## 📒 Docs

For the latest documentation and release information click [here](https://kkoscielniak.github.io/node-nozbe/).

## ⬇️ Installation
```
npm i node-nozbe
```

## 🔧 Usage
A trivial example of usage:
```javascript
const nozbe = require('node-nozbe');

nozbe.addTask(clientId, accessToken, {
  name: 'Create rich docs for node-nozbe',
});
```
Where 
* `clientId` is obtained during registration of the application with `registerApp()` function
* `accessToken` is the end-user's access token obtained after successful login

For more detailed description of `node-nozbe` possibilities visit [API reference](https://kkoscielniak.github.io/node-nozbe/docs/api). 

## 🗺 Roadmap
The up-to-date roadmap is available [here](https://kkoscielniak.github.io/node-nozbe/docs/roadmap).

## 🍍 Author
Main author and maintainer of `node-nozbe` is [Krystian Kościelniak](https://github.com/kkoscielniak).

`node-nozbe` is available under the MIT license. See the LICENSE file for more info.
