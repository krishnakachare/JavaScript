/* let g="chinmay"
console.log(g[0])
console.log(g[1])
console.log(g.length)

let g1="Amol"
console.log(g1.length)
console.log(g[1])
console.log(g[2])

let c="amol"
console.log(c.length)
console.log(c.toUpperCase())

//toUpperCase()Method
let aa="chinmay"
let bb=aa.toUpperCase()
console.log(bb)

//toLowerCase Method
let cc=aa.toLowerCase()
console.log(cc)

//slice method
//string.slice(startpoint,endpoint) endpoint is not include and endpoing should be ahead of startpoint
let rr="Poorva"
let jj=rr.slice(0,4)
console.log(jj)

let nna=rr.slice(3,5)
console.log(nna)

let nnm=rr.slice(-4,-2)
console.log(nnm)

let yyu=rr.slice(-5,3)
console.log(yyu)
console.log("=====")
let ppq=rr.slice(-2,3)//enpoint should be ahead of startpoint
console.log(ppq)

let mm1="hemant"
for(let i=0;i<mm1.length;i++){
    console.log(mm1[i])
}

let xxy="chinmay deshpande"
let count=0
for(let i=0;i<xxy.length;i++){
    if(xxy[i]=="a"){
        count=count+1
    }
}
console.log(count)
let x1="amol"
console.log(x1[0].toUpperCase()+x1.slice(1))

let capitalize=""
for(let i=0;i<x1.length;i++){
    if(i==0){
        capitalize=capitalize+x1[i].toUpperCase()
    }
    else{
        capitalize=capitalize+x1[i]
    }
}
console.log(capitalize) */

/* console.log("===========================================")
//indexOf Method

let lastname = "chinmayhasdfghasdfgh"
//0  1  2  3  4  5  6
//c  h  i  n  m  a  y
let aa = lastname.indexOf("h")
console.log(aa)

let bb = lastname.indexOf("h", 2)
console.log(bb)

let onew = "ramaaya"
//second occarance
let cc = onew.indexOf("a", onew.indexOf("a") + 1)
console.log(cc)

//third occarance
let dd = onew.indexOf("a", onew.indexOf("a", onew.indexOf("a") + 1) + 1)
console.log(dd)

//by using for loop find index
let k = "amomolmhh"
let j = []
for (let i = 0; i < onew.length; i++) {
    if (k[i] == "m") {
        j.push(i)
    }
}
console.log(j)
console.log(j[2])

//count the number of m in string
let count = 0
for (let i = 0; i < k.length; i++) {
    if (k[i] == "m") {
        count = count + 1
    }
}
console.log(count)

//includes method

let yaa = "poorvavyas"
let ff = yaa.includes("poorva")
console.log(ff)

let friuts = "apple,mango,banana,grapes"
let userfruit = "AppLe".toLowerCase()
if (friuts.includes(userfruit)) {
    console.log("Fruit is available")

}
else {
    console.log("fruit is not available")
} */

//trim method=> remove the spaces from start and end

/* let flower=" rose "
console.log(flower.length)
let gg=flower.trim()
console.log(gg)
console.log(gg.length)

//trimRight
let flower1=" rose lily "
console.log(flower1.length)
console.log(flower1.trimRight().length)

//trimLeft
let flower2=" rose lily "
console.log(flower2.length)
console.log(flower2.trimLeft().length)

let n=" chinmay deshpande "
console.log(n.trim().split(" ").join("")) */

/* let m=" mayuri m katwe "
let jj=m.trim().split(" ")//.join("").split("").reverse().join("")
console.log(jj) */

/* let m=" mayuri m katwe "
let jj=m.trim().split(" ")
console.log(jj)
let yy1=jj.map(function(el){
    return el.join("")
})
console.log(yy1) */

// replace method
/* let lan="I am learning javascript"
let uu=lan.replace("javascript","python")
console.log(uu)

let lan2="I am learining javascript and i will search job in javascript"
lan2=lan2.split(" ")
console.log(lan2)

for(let i=0;i<lan2.length;i++){
    if(lan2[i]==="javascript"){
        lan2[i]="python"
    }
}
console.log(lan2.join(" ")) */

/* //Include method

let userfruit="tomato".toLowerCase()
let fruits="apple banana graps mango"
if(fruits.includes(userfruit)){
    console.log("Fruit available")
}
else{
    console.log("fruit not available")
} */

//Repeat method
let xxy = "chinmay"
console.log(xxy.repeat(5))

let xxy1 = "5a4b3c2e1f"
let xy = xxy1.split("")
let yy = ""
console.log(xy)

for (let i = 0; i < xxy1.length; i++) {
    if (Number(xxy1[i])) {
        yy = yy + xxy1[i + 1].repeat(Number(xxy1[i]))
    }
}
console.log(yy)

//CharAt method

let lastname = "deshpande"
console.log(lastname.charAt(2))

//CharCodeAt

console.log(lastname.charCodeAt(2))

//input=aaabbc output=3a2bc
let pp = "aaaaabbbccdddddz"
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

//Startwith method
let string="abc"
console.log(string.startsWith("a"))

//endWith method
console.log(string.endsWith("c"))




