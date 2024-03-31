/* /*let transcation=[13,14,55,-56,66,-88,99,150,556,-131]
let deposite=0
let withdraw=0


for(let i=0;i<transcation.length;i++){
    if(transcation[i]>1){
        deposite=deposite+transcation[i]
    }
    else{
        withdraw=withdraw+transcation[i]
    }
}

console.log(`Total deposite amount is ${deposite}`)
console.log(`Total withdrawal amount is ${withdraw}`)

console.log("===================================================")

let transcation=[13,14,55,-56,66,-88,99,150,556,-131]
let aaa=transcation.filter(function(el,index,arr){
        return el>1 
    }).reduce(function(att,el,index,arr){
        return el+att
    },0)
console.log(`Total deposite amount is ${aaa}`)
let bbb=transcation.filter(function(el,index,arr){
    return el<1
}).reduce(function(att,el,index,arr){
    return el+att
},0)
console.log(`Total withdrawal amount is ${bbb}`) */


console.log("--------------------code 2------------------------------------")

k = ["I learning am javascript"]
let bb = []
let n = k[0].split(" ")
console.log(n)
for (let i = 0; i < n.length; i++) {
    let word = n[i]
    let revstring = revword(word)
    bb.push(revstring)
}
console.log(bb.join(''))

function revword(word) {
    let revstring = " "
    for (let i = 0; i < word.length; i++) {
        revstring = word[i] + revstring
    }
    return revstring
}


let str12 = ["javascript is cool lagngauage"]
let aa = []
let mm = str12[0].split(" ")
for (let i = 0; i < mm.length; i++) {
    let word = mm[i]
    let revstr=rev(word)
    aa.push(revstr)
}
console.log(aa.join(''))
function rev(word) {
    let revstr = " "
    for (let i = 0; i < word.length; i++) {
        revstr = revstr + word[i]
    }
    return revstr
}