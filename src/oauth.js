const axios = require('axios');
const qs = require('querystring');

const config = require('./config');

/**
 * Registers application to be used with Nozbe
 * @param {string} email Developer's e-mail
 * @param {string} password Developer's password
 * @param {string} redirectUri The application's register URI
 * @return {Promise} OAuth data for registered application
 */
exports.registerApp = async(email, password, redirectUri) => {
  try {
    const response = await axios({
      method: 'POST',
      url: config.REGISTER_APP,
      data: qs.stringify({
        email,
        password,
        redirect_uri: redirectUri,
      }),
    });

    return response.data;
  } catch (err) {
    return (err.response.data);
  }
};

/**
 * Fetches OAuth data of registered application
 * @param {string} email Developer's e-mail
 * @param {string} password Developer's password
 * @return {Promise} OAUth data
 */
exports.getOAuthClientData = async(email, password) => {
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

/**
 * Returns URL to login form
 * @param {string} clientId Application ID
 * @return {string} Login form URL
 */
exports.getOAuthLoginURL = clientId => {
  if (!clientId) {
    throw new Error('No clientId provided');
  }

  return `${config.LOGIN}/?client_id=${clientId}`;
};
