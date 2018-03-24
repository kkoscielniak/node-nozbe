const axios = require('axios');
const qs = require('querystring');

const config = require('./config');

const oauth = require('./oauth');
const task = require('./task');
const comment = require('./comment');

const getListOfTasks = (clientId, accessToken) => axios({
  method: 'GET',
  url: config.LIST,
  headers: {
    Authorization: accessToken,
  },
  data: qs.stringify({
    client_id: clientId,
    type: 'task',
  }),
});

exports.registerApp = module.exports.registerApp = oauth.registerApp;
exports.getOAuthClientData = module.exports.getOAuthClientData = oauth.getOAuthClientData;
exports.getListOfTasks = module.exports.getListOfTasks = getListOfTasks;
exports.addTask = module.exports.addTask = task.addTask;
exports.addComment = module.exports.addComment = comment.addComment;
