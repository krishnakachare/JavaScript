// every cypress command is async in nature 
// execution sync 

// es6 promises

let pro = new Promise(function (resolve, reject) {
    let a = b = 10
    if (a == b) {
        resolve(['user will be created', 1])
    }
    else {
        reject('user not created')
    }
})

function getId(id) {
    return pro2 = new Promise(function (resolve, reject) {
        if (id == 1) {
            resolve('getting id')
        }
        else {
            reject('unable to get id')
        }
    })
}

pro.then(function (arr) {
    console.log(arr[0])
    return arr[1]
})
    .then(function (id) {
        getId(id)
        .then(function (str) {
            console.log(str)
        }).then(function () {
            console.log('getting user info')
        })
    }).catch(function(str){
        console.log(str)
    })




    //  commands asyn  ======> sync ------> js 


    // commands async ====DOM 

    // cy.get() =====>promises =====> synchronus