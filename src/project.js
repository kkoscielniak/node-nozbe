const axios = require('axios');

const config = require('./config');

const sortComparator = (first, second) => {
  if (first.name < second.name) {
    return -1;
  }
  if (first.name > second.name) {
    return 1;
  }
  return 0;
};

/**
 * Retrieves a complete list of projects
 * @param {string} clientId Application ID
 * @param {string} accessToken User access token
 * @param {object} options Request options
 * @param {boolean} options.sort Sort projects alphabetically. Inbox first.
 * @return {Promise} Projects
 */
exports.getProjects = async(clientId, accessToken, { sort }) => {
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

    const { data } = response;

    if (!sort) {
      return data;
    }

    return [
      data[0],
      ...data.slice(1).sort(sortComparator),
    ];
  } catch (err) {
    return err.response.data;
  }
};
