const apiUrl = 'https://api.nozbe.com:3000';

exports = module.exports = {
  REGISTER_APP: `${apiUrl}/oauth/secret/create`,
  LIST: `${apiUrl}/list`,
  TASK: `${apiUrl}/task`,
};
