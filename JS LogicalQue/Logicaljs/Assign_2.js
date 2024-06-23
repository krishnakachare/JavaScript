
//Revrese the string
//input="123" get output=321

/* let ip="123"
let xy=""
for (let i=ip.length-1;i>=0;i--){
xy=xy+ip[i]
}
console.log(xy)
console.log(typeof xy) */
console.log("==================Reverse Number Program===========================")
//Reverse the number(input=123 ouput=321)
let num = 123
let rem = 0
let rev = 0
//let temp = 0
while (num > 0) {
    rem = num % 10
    rev = rev * 10 + rem
    num = Math.floor(num / 10)

}
console.log(rev)

console.log("==============Count Char,SplChr,Number Program========================")

//count the number of char special char and number in string
let str = "123abc@Abc"
let chr = 0
let num1 = 0
let SplChr = 0
for (let i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z" || str[i] >= "A" && str[i] <= "Z") {
        chr = chr + 1
    }
    else {
        if (str[i] >= "0" && str[i] <= "9") {
            num1 = num1 + 1
        }
        else {
            SplChr = SplChr + 1
        }
    }
}
console.log(`Character count : ${chr}`)
console.log(`Number count: ${num1}`)
console.log(`SpecialChar count: ${SplChr}`)


console.log("==================================")
//input=aaabbc output=3a2b1c
let pp = "aaabbc"
let oo = ""
let count = 0

for (let i = 0; i < pp.length; i++) {
    count = count + 1
    if (pp[i] != pp[i + 1]) {
        oo = oo + count + pp[i]
        count = 0
    }
}
console.log(oo)

//ip="asdfasdfasdf123" op={a=3,b=3,c=3}
let str1="asdfasdfasdf123"
let ob={}
for(let i=0;i<str1.length;i++){
    if(ob.hasOwnProperty(str1[i])){
        ob[str1[i]]=ob[str1[i]]+1
    }
    else{
        ob[str1[i]]=1
    }
}
console.log(ob)

console.log("=======================Logical problem======================")
//input=[22.44,87,99,44,55,66,77,55] output remove dublicated from array

let value=[22,44,87,99,44,55,66,77,55]
let hk=[]
// for(let i=0;i<value.length;i++){
//     if(hk.indexOf(value[i])==-1){
//         hk.push(value[i])
//     }
// }
// console.log(hk)

//Method 2
// for(let i=0;i<value.length;i++){
//     if(!hk.includes(value[i])){
//         hk.push(value[i])
//     }
// }
// console.log(hk)

//Method 3

let kk1=value.filter(function(el,index,arr){
    return arr.indexOf(el)==index
})
console.log(kk1)