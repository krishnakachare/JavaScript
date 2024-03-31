let sum = function (f) {
    let kk = new Promise(function (res, rej) {
        if (f) {
            res()
        } else {
            rej()
        }
    }).then(() => {
        console.log('Promiss RESOLVE')

    }).catch(() => {
        console.log('Promiss REJECT')
    }).finally(() => {
        console.log('finally')
    })
}
sum(false)