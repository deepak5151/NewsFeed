const request = require('request')

module.exports = {
    /*
    ** This method returns a promise
    ** which gets resolved or rejected based
    ** on the result from the API
    */
    fetchNews: function (url) {
        const options = {
            url: url,
            headers: {
                'User-Agent': 'NewsFeed-Deepak-Kapoor'
            },
            json: true
        };
        return new Promise((resolve, reject) => {
            request(options, (err, res, body) => {
                if (err) reject(err)
                resolve(body)
            });
        })
    }
}