const axios = require('axios');
const qs = require('querystring');

const config = require('./config');

/**
 * Retrieves a full list of tasks
 * @param {string} clientId
 * @param {string} accessToken
 * @return {Promise} Tasks data
 */
exports.getListOfTasks = async(clientId, accessToken) => {
  try {
    const response = await axios({
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

    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

/**
 * Adds new task to the project
 * @param {string} clientId Application ID
 * @param {string} accessToken Users access token
 * @param {object} task Object containing task parameters
 * @param {string} task.name Name of the task (**required**)
 * @param {string} task.projectId ID of the project task should be added to. If not passed, the task will be added to the Inbox
 * @param {boolean} task.completed Completeness flag for the task
 * @param {array} task.contexts Array of contexts to be assigned to the task
 * @param {string} task.dateTime Date and time of the reminder in "Y-m-d H:M:s" format
 * @param {boolean} task.next Next action flag for the task
 * @param {string} task.user User ID the task should be assigned for
 * @param {number} task.time Time needed to accomplish the task (in minutes)
 * @param {number} task.recur Recurrency of the task where<br>
 * `0`: do not repeat (default)<br>
 * `1`: every day<br>
 * `2`: every week day<br>
 * `3`: every week<br>
 * `4`: every 2 weeks<br>
 * `5`: every month<br>
 * `6`: every half of a year<br>
 * `7`: every year<br>
 * `8`: every 3 weeks<br>
 * `9`: every 2 months<br>
 * `10`: every 3 months<br>
 * `11`: every 2 years<br>
 * `12`: every 2 days<br>
 * `13`: every 4 weeks<br>
 * @return {Promise} Added task data
 */
exports.addTask = async(clientId, accessToken, task) => {
  const {
    name,
    projectId,
    completed,
    contexts,
    dateTime,
    next,
    user,
    recur,
    time,
  } = task;

  try {
    const response = await axios({
      method: 'POST',
      url: config.TASK,
      headers: {
        Authorization: accessToken,
      },
      data: qs.stringify({
        client_id: clientId,
        name,
        project_id: projectId || false,
        completed: completed || false,
        con_list: contexts || false,
        datetime: dateTime || false,
        next: next || false,
        re_user: user || false,
        recur: recur || 0,
        time: time || 0,
        comment_unread: false,
      }),
    });

    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

