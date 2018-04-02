const oauth = require('../src/oauth');

describe('#getOAuthLoginURL', () => {
  it('should return Login form URL', async() => {
    const clientId = 'mocked_client_id';
    const url = await oauth.getOAuthLoginURL(clientId);
    expect(url.endsWith(clientId)).toBe(true);
  });

  it('should not return Login URL if clientId is not given', () => {
    expect(oauth.getOAuthLoginURL).toThrowError('No clientId provided');
  });
});
