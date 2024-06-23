let kk = new Date()           // we have in javascript inbuild Date class and using this we made kk object

// kk.setDate(kk.getDate() - 2)       // can goes past date
// kk.setDate(kk.getDate() + 2)       // can goes future date

//kk.setMonth(kk.getMonth() + 1)
//kk.setFullYear(kk.getFullYear() + 2)






// let day = kk.getDay()
// console.log(day)          // gives todays day and SUNDAY start from 0    like sunday,monday.....  
// let date = kk.getDate()
// console.log(date)         // gives todays date           
// let month = kk.getMonth()
// let monthString = kk.toLocaleString('default', { month: 'long' })                // long = longString   short = ShortString
// console.log(month)        // gives current month and JANUARY start from 0
// console.log(monthString) 
// let year = kk.getFullYear()
// console.log(year)        // gives current year 


// we can set future date  =>  object.setDate() = object.getdate + (adding days)

// we can set future month  =>  object.setMonth() = object.getMonth + (adding months)

// we can set future fullyear  =>  object.setFullyear() = object.getFullyear + (adding years)

// let time = kk.getTime()
// console.log(time)

// kk.setHours(kk.getHours() +1 )
// kk.setMinutes(kk.getMinutes() +1)
// kk.setSeconds(kk.setMinutes() +1)


// let hr = kk.getHours()
// console.log(hr)
// let min = kk.getMinutes()
// console.log(min)
// let sec = kk.getSeconds()
// console.log(sec)
// let milisec = kk.getMilliseconds()
// console.log(milisec)




let date = new Date()
console.log(date)

let d = date.setDate(date.getDate()-1)
console.log(d)
