const axios = require('axios')

class Users {
    static all() {
        return axios.get('https://api.github.com/zen')
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            // console.log(error);
            return error
        })
    }
}

export default Users;
