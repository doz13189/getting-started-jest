type callbackType = (v:number) => number
type itemType = number[]
type forEachType = ( items: itemType, callback: callbackType ) => number[]

const forEach: forEachType = ( (items: itemType, callback: callbackType ): itemType => {
    const array: number[] = []
    for (let index = 0; index < items.length; index++) {
        array.push(callback(items[index]))
    }
    return array
});

// const res = forEach([6, 2, 3, 3], v => v * 10)
// console.log(res)

module.exports = forEach

