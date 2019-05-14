const oauth = require('./oauth');
const task = require('./task');
const comment = require('./comment');
const project = require('./project');

exports.registerApp = module.exports.registerApp = oauth.registerApp;
exports.getOAuthClientData = module.exports.getOAuthClientData = oauth.getOAuthClientData;
exports.getOAuthLoginURL = module.exports.getOAuthLoginURL = oauth.getOAuthLoginURL;
exports.updateOAuthRedirectUri = module.exports.updateOAuthRedirectUri = oauth.updateOAuthRedirectUri;

exports.getListOfTasks = module.exports.getListOfTasks = task.getListOfTasks;
exports.getPriorities = module.exports.getPriorities = task.getPriorities;
exports.addTask = module.exports.addTask = task.addTask;

exports.addComment = module.exports.addComment = comment.addComment;

exports.getProjects = module.exports.getProjects = project.getProjects;
