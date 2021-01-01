const requests = require('../src/requests.ts')
const axios = require('axios')
const { test } = require('@jest/globals')

jest.mock('axios')
test('shoud fetch users', () => {
    const users = [{name: 'Bob'}];
    const resp = {data: users};

    axios.get.mockResolvedValue(resp);
    return Users.all().then(data => expect(data).toEqual(users));

})
