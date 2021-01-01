const axios = require('axios')

const get = (url) => {
    axios.get(url)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            // console.log(error);
            return error
        })
}

const response = get('https://api.github.com/zen')
console.log(response)