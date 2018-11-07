import request from 'request';

export async function subscribe({ email }) {
  const data = {
    email_address: email,
    status: 'subscribed',
  };
  const listId = 'eff4bfaf38';
  const API_KEY = '774b3e1a87410d75b3022bd0f2badbcb-us19';
  await new Promise((resolve, reject) => {
    request.post(
      {
        uri: `https://us17.api.mailchimp.com/3.0/lists/${listId}/members/`,
        headers: {
          Accept: 'application/json',
          Authorization: `Basic ${Buffer.from(`apikey:${API_KEY}`).toString('base64')}`,
        },
        json: true,
        body: data,
      },
      (err, response, body) => {
        if (err) {
          reject(err);
        } else {
          resolve(body);
        }
      },
    );
  });
}
