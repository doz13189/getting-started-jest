const forEach = require('../src/forEach.ts')

const mockCallback = jest.fn(x => x * 10);
forEach([1, 2, 3], mockCallback)

test('mock test', () => {

    // const b = { b: 4 }
    // const bound = mockCallback.bind(b)
    // bound()

    const callTimes = mockCallback.mock.calls
    // console.log('callTimes : ', callTimes)

    const instanceTimes = mockCallback.mock.instances
    // console.log('instanceTimes : ', instanceTimes)

})


test('mock return value test', () => {
    const myMock = jest.fn()
    console.log(myMock())

    myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
    console.log(myMock(), myMock(), myMock(), myMock());
    // > 10, 'x', true, true
})

