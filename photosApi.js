// const axios = require('axios');
const request = require('request-promise');

const API_URL = 'https://photoslibrary.googleapis.com';

module.exports.getAlbums = async token => {
    /*const result = await axios({
        method: 'get',
        url: `${API_URL}/v1/albums`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    });*/

    const result = await request.get(API_URL + '/v1/albums', {
        headers: {'Content-Type': 'application/json'},
        qs: { pageSize: 20 },
        json: true,
        auth: {'bearer': token},
    });

    console.log(result);
};