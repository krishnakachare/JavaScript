//Q. Sorting the array have differant type of elements

let multiArray = [67, [4, 5, 6, 'hi'], "karan", true, 22.4, "rajshree", [1, 2, 3], false, -365,];
function SortElementWithDataType(x) {
    let sorted = []
    let types = []
    for (let i = 0; i < x.length; i++) {
        if (x[i].length) {
            for (let j = 0; j < x[i].length; j++) {
                let type = typeof (x[i][j])
                if (!types.includes(type)) {
                    console.log('hello')
                    types.push(type)
                }
            }
        }
    }
    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < x.length; j++) {
            if (types[i] == typeof (x[j])) {
                sorted.push(x[j])
            }
        }
    }
    console.log(types)
    return sorted
}
let f = SortElementWithDataType(multiArray)
console.log(f)