const axios = require('axios');
const mapArrOfIntegersToString = require('../mapArrOfIntegersToString/mapArrOfIntegersToString');

const axiosReq = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const postIds = response.data.map(({ id }) => id);
        return mapArrOfIntegersToString(postIds);
    } catch(e) {
        console.error(e);
    }
};

module.exports = axiosReq;