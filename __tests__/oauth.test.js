const oauth = require('../src/oauth');

jest.mock('../src/oauth');

describe('#registerApp', () => {
  it('should return registered app data', () => {
    const mockedRegisterData = {
      client_id: 'mocked_client_id',
      client_secret: 'mocked_client_secret',
      redirect_uri: 'http://example.com',
    };

    return oauth.registerApp('email@example.com', 'password', 'http://example.com')
      .then(data => {
        expect(data).toBeDefined();
        expect(data).toMatchObject(mockedRegisterData);
      });
  });

  it('should reject if the redirect_uri is not given', () => {
    const emptyUriErrorMessage = {
      error: 'Redirect uri is empty',
    };

    expect(oauth.registerApp('email@example.com', 'password'))
      .rejects
      .toEqual(emptyUriErrorMessage);
  });

  it('should reject if the email or password are not correct', () => {
    const badAuthErrorMessage = {
      error: 'Bad login or password',
    };

    expect(oauth.registerApp('email@example.com', 'wrong_password'))
      .rejects
      .toEqual(badAuthErrorMessage);

    expect(oauth.registerApp('wrong_email@example.com', 'password'))
      .rejects
      .toEqual(badAuthErrorMessage);

    expect(oauth.registerApp('wrong_email@example.com', 'wrong_password'))
      .rejects
      .toEqual(badAuthErrorMessage);
  });
});

describe('#getOAuthClientData', () => {
  it('should return registered app data', () => {
    const mockedRegisterData = {
      client_id: 'mocked_client_id',
      client_secret: 'mocked_client_secret',
      redirect_uri: 'http://example.com',
    };

    return oauth.getOAuthClientData('email@example.com', 'password')
      .then(data => {
        expect(data).toBeDefined();
        expect(data).toMatchObject(mockedRegisterData);
      });
  });

  it('should reject if the email or password are not given', () => {
    const badRequestErrorMessage = {
      error: 'Bad Request',
    };

    expect(oauth.getOAuthClientData('email@example.com', ''))
      .rejects
      .toEqual(badRequestErrorMessage);

    expect(oauth.getOAuthClientData('', 'password'))
      .rejects
      .toEqual(badRequestErrorMessage);
  });

  it('should reject if the email or password are wrong', () => {
    const badAuthErrorMessage = {
      error: 'Bad login or password',
    };

    expect(oauth.getOAuthClientData('email@example.com', 'wrong_password'))
      .rejects
      .toEqual(badAuthErrorMessage);
  });
});
