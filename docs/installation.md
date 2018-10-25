---
id: installation
title: Installation and usage
sidebar_label: Installation
---

## Installation
Installation of `node-nozbe` is as basic as almost every `npm` package.

```sh
# npm
npm i node-nozbe

# yarn
yarn add node-nozbe
```

## Basic usage

Import the package to your project
```javascript
const nozbe = require('node-nozbe');
```

`nozbe` object allows you to do partilular operations like adding new tasks to the Nozbe Inbox: 
```javascript
nozbe.addTask(clientId, accessToken, {
  name: 'Create rich docs for node-nozbe',
});
```
Where

* `clientId` is the Application ID obtained during its registration
* `accessToken` is the user's personal token (obtainable via Nozbe settings or with OAuth authentication).
