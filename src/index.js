const axios = require('axios');
const qs = require('querystring');

const config = require('./config');

/** TODO */
const registerApp = (email, password, redirectUri) => axios.post(
  config.REGISTER_APP,
  qs.stringify({
    email,
    password,
    redirect_uri: redirectUri,
  }),
);

/**
 * Returns OAuth data of registered application
 * @param {string} email Developer's e-mail
 * @param {string} password Developer's password
 * @return {object} OAUth data
 */
const getOAuthClientData = async(email, password) => {
  try {
    const response = await axios({
      method: 'GET',
      url: config.GET_OAUTH_CLIENT_DATA,
      data: qs.stringify({
        email,
        password,
      }),
    });

    return response.data;
  } catch (err) {
    return (err.response.data);
  }
};

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

exports.registerApp = module.exports.registerApp = registerApp;
exports.getOAuthClientData = module.exports.getOAuthClientData = getOAuthClientData;
exports.getListOfTasks = module.exports.getListOfTasks = getListOfTasks;
exports.addTask = module.exports.addTask = addTask;

// .then(res => console.log(res))
// .catch(err => console.log(err.response.data));

const x = async() => {
  const data = await getOAuthClientData('krystiankoscielniak@gmail.com', 'xxx');
  console.log(data);
};

x();
