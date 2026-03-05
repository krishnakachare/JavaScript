/*
let promise = new Promise((resolve,reject)=>{
    reject("Failure");
});
promise.then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
});
*/


/*
    let promise = new Promise((resolve,reject)=>{
        reject("Failure");
        resolve("Success");
    });
    promise.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
*/

/*
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Success");
        },5000);
    });
    promise.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
*/

/*
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Success");
        },5000);
        setTimeout(()=>{
            reject("Failure");
        },4000);
    });
    promise.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
*/



/*
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise1");
    },0);
});

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise2");
    },5000);
});

let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{    
        resolve("Promise3");
    },10000);
});

// promise1.then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });

// promise2.then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });

// promise3.then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });


// Promise.all([promise1,promise2,promise3]).then((posRes)=>{
//     console.log(posRes[0]);
//     console.log(posRes[1]);
//     console.log(posRes[2]);
// },(errRes)=>{
//     console.log(errRes);
// });


Promise.race([promise1,promise2,promise3]).then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
});

*/



let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise1");
    },0);
});

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Fails");
    },5000);
});

let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{    
        resolve("Promise3");
    },10000);
});

/*
    Promise.all([promise1,promise2,promise3]).then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
*/

Promise.allSettled([promise1,promise2,promise3])
       .then((posRes)=>{
        console.log(posRes);
       },(errRes)=>{
        console.log(errRes);
});















































































































