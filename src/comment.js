const axios = require('axios');
const qs = require('querystring');

const config = require('./config');

/**
 * Adds comment to particular task
 * @param {string} clientId Application ID
 * @param {string} accessToken Users access token
 * @param {object} comment Comment object **(required)**
 * @param {string} comment.taskId Comments ID **(required)**
 * @param {string} comment.body Comments content **(required)**
 * @param {string} comment.type Type of comment, where<br>
 * `markdown`: Comment in Markdown format<br>
 * `checklist`: Comment in following format:<br>
 * (+) marked checklist item<br>
 * (-) unmarked checklist item
 * @return {Promise} Modified task data **with comments**
 */
exports.addComment = async(clientId, accessToken, comment) => {
  const {
    taskId,
    type,
    body,
  } = comment;

  try {
    const response = await axios({
      method: 'POST',
      url: config.COMMENT,
      headers: {
        Authorization: accessToken,
      },
      data: qs.stringify({
        client_id: clientId,
        task_id: taskId,
        type: type || 'markdown',
        body,
      }),
    });

    return response.data;
  } catch (err) {
    return err.response.data;
  }
};
