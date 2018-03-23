(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global['all-log'] = {})));
}(this, (function (exports) { 'use strict';

  // const nozbeApiConfig = {
  //   clientId: 'a318a88a3d1856eb2402a83f38edf1a6b6622b1d',
  //   clientSecret: '83a9fcf31ccb3792eca8f19c0d69724ad7bc4294',
  // };
  const axios = require('axios');
  const qs = require('querystring');

  const config = require('./config');

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

  exports.addTask = module.exports.addTask = addTask;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=node-nozbe.js.map
