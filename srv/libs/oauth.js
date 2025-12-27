const axios = require('axios');
const qs = require('qs');

async function getAccessToken() {
    const tokenUrl = process.env.OAUTH_TOKEN_URL;
    const clientId = process.env.OAUTH_CLIENT_ID;
    const clientSecret = process.env.OAUTH_CLIENT_SECRET;

    const response = await axios.post(
        tokenUrl,
        qs.stringify({
            grant_type: 'client_credentials'
        }),
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            auth: {
                username: clientId,
                password: clientSecret
            }
        }
    );

    return response.data.access_token;
}

module.exports = { getAccessToken };
