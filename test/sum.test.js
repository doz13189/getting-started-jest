const sum = require('../src/sum.ts');

test('1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('object assignment', () => {
    const data = { one: 1 }
    data['two'] = 2
    expect(data).toEqual({ one: 1, two: 2 })
})

test('adding positive numbers is not zero', () => {
    for (let a; a < 10; a++) {
        for (let b; b < 10; b++) {
            expect(a + b).not.toBe(0)
        }
    }
})

test('the data is peanut butter', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter')
            done()
        } catch (error) {
            done(error)
        }
    }
    // fetchData(callback)
    done()
})


