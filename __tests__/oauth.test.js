const oauth = require('../src/oauth');

jest.mock('../src/oauth');

describe('#registerApp() using Promises', () => {
  it('should return registered app data', () => {
    const mockedRegisterData = {
      client_id: 'mocked_client_id',
      client_secret: 'mocked_client_secret',
      redirect_uri: 'http://example.com',
    };

    return oauth.registerApp('email@example.com', 'password', 'http://example.com')
      .then(data => {
        expect.assertions(2);
        expect(data).toBeDefined();
        expect(data).toMatchObject(mockedRegisterData);
      });
  });

  it('should reject if the redirect_uri is not given', () => {
    const errorMessage = {
      error: 'Redirect uri is empty',
    };

    expect.assertions(0);
    expect(oauth.registerApp('email@example.com', 'password'))
      .rejects
      .toEqual(errorMessage);
  });

  it('should reject if the email or password are not correct', () => {
    const errorMessage = {
      error: 'Bad login or password',
    };

    expect.assertions(0);
    expect(oauth.registerApp('email@example.com', 'wrong_password'))
      .rejects
      .toEqual(errorMessage);

    expect(oauth.registerApp('wrong_email@example.com', 'password'))
      .rejects
      .toEqual(errorMessage);

    expect(oauth.registerApp('wrong_email@example.com', 'wrong_password'))
      .rejects
      .toEqual(errorMessage);
  });
});
