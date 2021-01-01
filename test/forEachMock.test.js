const myMock = jest.fn()

test('mock test', () => {
    const a = new myMock()
    const b = { b: 4 }
    const bound = myMock.bind(b)
    
    console.log('length', bound.mock.calls.length)
    console.log('instances', myMock.mock.instances)
    
})

