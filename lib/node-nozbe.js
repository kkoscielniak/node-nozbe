(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios'), require('querystring')) :
	typeof define === 'function' && define.amd ? define(['exports', 'axios', 'querystring'], factory) :
	(factory((global['all-log'] = {}),global.axios,global.querystring));
}(this, (function (exports,axios,querystring) { 'use strict';

	axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;
	querystring = querystring && querystring.hasOwnProperty('default') ? querystring['default'] : querystring;

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var config = createCommonjsModule(function (module, exports) {
	const apiUrl = 'https://api.nozbe.com:3000';

	exports = module.exports = {
	  REGISTER_APP: `${apiUrl}/oauth/secret/create`,
	  LIST: `${apiUrl}/list`,
	  TASK: `${apiUrl}/task`,
	};
	});
	var config_1 = config.REGISTER_APP;
	var config_2 = config.LIST;
	var config_3 = config.TASK;

	var src = createCommonjsModule(function (module, exports) {
	const registerApp = (email, password, redirectUri) => axios.post(
	  config.REGISTER_APP,
	  querystring.stringify({
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
	  data: querystring.stringify({
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
	    data: querystring.stringify({
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
	});
	var src_1 = src.registerApp;
	var src_2 = src.getListOfTasks;
	var src_3 = src.addTask;

	exports.default = src;
	exports.registerApp = src_1;
	exports.getListOfTasks = src_2;
	exports.addTask = src_3;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=node-nozbe.js.map
