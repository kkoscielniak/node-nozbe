const axios = require('axios');

const config = require('./config');

/**
 * Retrieves a complete list of projects
 * @param {string} clientId
 * @param {string} accessToken
 * @return {Promise} Projects
 */
exports.getProjects = async(clientId, accessToken) => {
  try {
    const params = {
      client_id: clientId,
      type: 'project',
    };

    const response = await axios.get(config.LIST, {
      params,
      headers: {
        Authorization: accessToken,
      },
    });

    return response.data;
  } catch (err) {
    return err.response.data;
  }
};
