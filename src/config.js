const API_URL = 'https://api.nozbe.com:3000';

exports = module.exports = {
  REGISTER_APP: `${API_URL}/oauth/secret/create`,
  GET_OAUTH_CLIENT_DATA: `${API_URL}/oauth/secret/data`,
  LIST: `${API_URL}/list`,
  TASK: `${API_URL}/task`,
};
