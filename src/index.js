const oauth = require('./oauth');
const task = require('./task');
const comment = require('./comment');

exports.registerApp = module.exports.registerApp = oauth.registerApp;
exports.getOAuthClientData = module.exports.getOAuthClientData = oauth.getOAuthClientData;

exports.getListOfTasks = module.exports.getListOfTasks = task.getListOfTasks;
exports.addTask = module.exports.addTask = task.addTask;

exports.addComment = module.exports.addComment = comment.addComment;
