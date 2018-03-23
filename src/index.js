const axios = require('axios');
const qs = require('querystring');

const config = require('./config');

const registerApp = (email, password, redirectUri) => axios.post(
  config.REGISTER_APP,
  qs.stringify({
    email,
    password,
    redirect_uri: redirectUri,
  }),
);

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

const addTask = (clientId, accessToken, task) => {
  const {
    name,
    recur,
  } = task;

  return axios({
    method: 'POST',
    url: config.TASK,
    headers: {
      Authorization: accessToken,
    },
    data: qs.stringify({
      client_id: clientId,
      name,
      recur: recur || 0,
      comment_unread: false,
    }),
  });
};

// addTask('a318a88a3d1856eb2402a83f38edf1a6b6622b1d', 'df387f4fa5c6b1c4e24d20996ed78dc5', {
//   name: 'xDxDxD',
//   // recur: 1,
// })
//   .then(res => console.log(res))
//   .catch(err => console.log(err.response.data));

exports.registerApp = module.exports.registerApp = registerApp;
exports.getListOfTasks = module.exports.getListOfTasks = getListOfTasks;
exports.addTask = module.exports.addTask = addTask;
