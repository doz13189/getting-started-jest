const forEach = require('../src/forEach.ts')

const mockCallback = jest.fn(x => x * 10);
forEach([1, 2, 3], mockCallback)

test('the mock function is called three times', () => {
    expect(mockCallback.mock.calls.length).toBe(3)
})

test('to check called argument', () => {
    expect(mockCallback.mock.calls[0][0]).toBe(1)
    expect(mockCallback.mock.calls[1][0]).toBe(2)
    expect(mockCallback.mock.calls[2][0]).toBe(3)
})

test('to check the return value', () => {
    expect(mockCallback.mock.results[0].value).toBe(10)
    expect(mockCallback.mock.results[1].value).toBe(20)
    expect(mockCallback.mock.results[2].value).toBe(30)
})




