type calcType = (a: number, b: number) => number
const sum: calcType = (a: number, b: number): number => a + b

console.log('sum', sum(1, 3))

module.exports = sum

