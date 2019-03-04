const mockedRegisterData = {
  client_id: 'mocked_client_id',
  client_secret: 'mocked_client_secret',
  redirect_uri: 'http://example.com',
};

exports.registerApp = async (email, password, redirectUri) => new Promise((resolve, reject) => {
  process.nextTick(() => {
    if (!redirectUri) {
      reject({
        error: 'Redirect uri is empty',
      });
    }

    if (email !== 'email@example.com' || password !== 'password') {
      reject({
        error: 'Bad login or password',
      });
    }

    resolve(mockedRegisterData);
  });
});

exports.getOAuthClientData = async (email, password) => new Promise((resolve, reject) => {
  process.nextTick(() => {
    if (!email || !password) {
      reject({
        error: 'Bad Request',
      });
    }

    if (email !== 'email@example.com' || password !== 'password') {
      reject({
        error: 'Bad login or password',
      });
    }

    resolve(mockedRegisterData);
  });
});
