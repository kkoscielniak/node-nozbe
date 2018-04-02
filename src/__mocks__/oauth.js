const mockedRegisterData = {
  client_id: 'mocked_client_id',
  client_secret: 'mocked_client_secret',
  redirect_uri: 'http://example.com',
};

const mockedHTMLForm = `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>Login to Nozbe</title>
  </head>
  <body>
    <p>Application client_id asks permission to your account in Nozbe</p>
    <form action="/login" method="post">
        <input type="text" name="email" placeholder="login" />
        <input type="password" name="password" placeholder="password" />
        <input type="hidden" name="client_id" value="aasdf" />
        <input type="hidden" name="scopes" value="" />
        <input type="submit" />
    </form>
  </body>
</htmL>
`;

exports.registerApp = async(email, password, redirectUri) => new Promise((resolve, reject) => {
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

exports.getOAuthClientData = async(email, password) => new Promise((resolve, reject) => {
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

exports.getOAuthAccessToken = async clientId => new Promise((resolve, reject) => {
  process.nextTick(() => {
    if (!clientId) {
      reject({
        error: 'client_id is empty',
      });
    }

    resolve(mockedHTMLForm);
  });
});
