/* 
- JavaScript stores dates as number of milliseconds since January 01, 1970.
# Ways of Creating Date Objects :
    1. new Date()
    2. new Date(milliseconds)
    3. new Date(date string)
       e.g : new Date("2023-03-28")
    4. new Date(year,month,day,hours,minutes,seconds,ms)
       -JavaScript counts months from 0 (January) to 11 (December).
*/

let currentDate = new Date();
// currentDate = new Date(1_000);
// currentDate = new Date("2024-07-07");
// currentDate = new Date(2024, 7, 7, 8, 30, 30, 30);
// console.log(typeof currentDate) // object
// console.log(currentDate)   // 2023-04-05T02:51:09.519Z

/*
# Date object Methods :
    1. toString()
    2. toLocalString()
    3. toDateString()
    4. toLocaleDateString()
    5. toTimeString()
    6. toLocaleTimeString()
*/

// 1. toString()
// Action = converting date object into string
// Return = string

// console.log(currentDate.toString())  // Wed Apr 05 2023 08:21:09 GMT+0530 (India Standard Time)
// console.log(typeof currentDate.toString()) // string

// 2. toLocalString(locales, options)
// locales (optional): A string with a BCP 47 language tag, or an array of such strings.
// options (optional): An object with configuration properties.

// Action = converting date object into string using locale conventions.
// Return = string

// console.log(currentDate.toLocaleString())  // 5/4/2023, 8:27:20 am
// console.log(typeof currentDate.toLocaleString())  // string

// console.log(currentDate.toLocaleString('default', { month: "short" }))   // Apr
// console.log(currentDate.toLocaleString('default', { month: "long" }))   // April

// console.log(currentDate.toLocaleString('default', { month: "2-digit", day: "2-digit" }).split("/").reverse().join("/"))

// 3. toDateString()
// Action = Collecting only date portion from date object
// Return = string
// console.log(currentDate.toDateString())

// 4. toLocaleDateString(locales, options)
// Action = Collecting only date portion from date object using locale conventions.
// Return = string
// console.log(currentDate.toLocaleDateString())

// 5. toTimeString()
// Action = Collecting only time portion from date object
// Return = string
// console.log(currentDate.toTimeString())

// 6. toLocaleTimeString(locales, options)
// Action = Collecting only time portion from date object using locale conventions.
// Return = string
// console.log(currentDate.toLocaleTimeString())

/*
# configurable object :
  toLocalString('default', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'UTC' });

  toLocaleDateString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' });

# `locales` Parameter:
    The `locales` parameter is optional and can be a single string or an array of strings. Each string should be a BCP 47 language tag, which specifies the language, country, and optional variant for the formatting. The browser will use the best match from the provided locales to format the date and time.
# Examples of BCP 47 Language Tags:
    - `"en-US"`: English (United States)
    - `"en-GB"`: English (United Kingdom)
    - `"fr-FR"`: French (France)
    - `"de-DE"`: German (Germany)
    - `"zh-CN"`: Chinese (Simplified, China)

# `options` Parameter:
    The `options` parameter is an optional object that allows for more detailed customization of the date and time format. It includes properties for specifying the desired representation of various date and time components, such as year, month, day, hour, minute, second, time zone, and more.
# Common `options` Properties:
    - Date Options:
        - `weekday`: `"long"`, `"short"`, `"narrow"`
        - `year`: `"numeric"`, `"2-digit"`
        - `month`: `"numeric"`, `"2-digit"`, `"long"`, `"short"`, `"narrow"`
        - `day`: `"numeric"`, `"2-digit"`

    - Time Options:
        - `hour`: `"numeric"`, `"2-digit"`
        - `minute`: `"numeric"`, `"2-digit"`
        - `second`: `"numeric"`, `"2-digit"`
        - `timeZoneName`: `"short"`, `"long"`

    - Other Options:
        - `timeZone`: `"UTC"` or an IANA time zone name like `"America/New_York"`
        - `hour12`: `true` for 12-hour time (AM/PM), `false` for 24-hour time
*/

/*
# Get Methods ==>
    1. getFullYear()	    Get year as a four digit number (yyyy)
    2. getMonth()	    Get month as a number (0-11)
    3. getDate()	    Get day as a number (1-31)
    4. getDay()	    Get weekday as a number (0-6)
    5. getHours()	    Get hour (0-23)
    6. getMinutes()	    Get minute (0-59)
    7. getSeconds()	    Get second (0-59)
    8. getMilliseconds()  Get millisecond (0-999)
*/

//1. getFullYear()	    Get year as a four digit number (yyyy)
// Action = extract fullYear from date Object
// Return = number

// console.log(currentDate.getFullYear())  // 2023
// console.log(typeof currentDate.getFullYear()) // number

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//2. getMonth()	    Get month as a number (0-11)
// Jan == 0
// Dec == 11
// Action = extract month from date Object
// Return = number

// console.log(currentDate.getMonth())  // 3
// console.log(typeof currentDate.getMonth()) // number

// console.log(months[3])  // April
// console.log(months[currentDate.getMonth()]) // April

//3. getDate()	    Get day as a number (1-31)
// Action = extract Date from date Object
// Return = number

// console.log(currentDate.getDate())          // 7
// console.log(typeof currentDate.getDate())  //  number

// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//4. getDay()	    Get weekday as a number (0-6)
// 0 = Sunday
// 6 = Sat
// Action = extract Day from date Object
// Return = number

// console.log(currentDate.getDay())          // 5
// console.log(typeof currentDate.getDay())  //  number
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(days[currentDate.getDay()])   // Friday

// //5. getHours()	    Get hour (0-23)
// console.log(currentDate.getHours())  // 8
// //6. getMinutes()	    Get minute (0-59)
// console.log(currentDate.getMinutes())  // 18
// //7. getSeconds()	    Get second (0-59)
// console.log(currentDate.getSeconds())  // 9
// //8. getMilliseconds()  Get millisecond (0-999)
// // 1 sec == 1000 MS
// console.log(currentDate.getMilliseconds())

/*
# Set Methods ==> we can custmize date & time
  Two Ways:
    A. Use Get method + increment/Decrement Pass it to set methods
    B. Using set methods :

        1. setFullYear()	   Set the year (optionally month and day)
        2. setMonth()	   Set the month (0-11)
        3. setDate()	   Set the day as a number (1-31)
        4. setHours()	   Set the hour (0-23)
        5. setMinutes()	   Set the minutes (0-59)
        6. setSeconds()      Set the seconds (0-59)
*/

//1. setFullYear()	   Set the year (optionally month and day)

// console.log(currentDate)  // 2023-04-08T02:40:34.502Z
// currentDate.setFullYear(2010)
// console.log(currentDate)  // 2023-04-08T02:40:34.502Z
// currentDate.setFullYear(2010, 1, 10)
// console.log(currentDate)  // 2010-02-10T02:42:32.155Z

// console.log(currentDate)
// currentDate.setFullYear(getFullYear() + 2) //  currentDate.setFullYear(getFullYear() - 2)
// console.log(currentDate)

// //2. setMonth()	   Set the month (0-11)
// console.log(currentDate)  // 2023-04-08T02:44:33.553Z
// currentDate.setMonth(0)
// console.log(currentDate)  // 2023-01-08T02:44:33.553Z

// //3. setDate()	   Set the day as a number (1-31)
// console.log(currentDate)  // 2023-04-08T02:44:33.553Z
// currentDate.setDate(10)
// console.log(currentDate)  // 2023-01-10T02:44:33.553Z

// console.log(currentDate)
// currentDate.setDate(getDate() + 2) //  currentDate.setDate(getDate() - 2)
// console.log(currentDate)

// //4. setHours()	   Set the hour (0-23)
// console.log(currentDate.toString())  // Sat Apr 08 2023 08:17:19 GMT+0530 (India Standard Time)
// currentDate.setHours(10)
// console.log(currentDate.toString())  // Sat Apr 08 2023 10:18:08 GMT+0530 (India Standard Time)

// //5. setMinutes()	   Set the minutes (0-59)
// console.log(currentDate.toString())  // Sat Apr 08 2023 08:19:11 GMT+0530 (India Standard Time)
// currentDate.setMinutes(20)
// console.log(currentDate.toString())  // Sat Apr 08 2023 08:20:14 GMT+0530 (India Standard Time)

// //6. setSeconds()      Set the seconds (0-59)
// console.log(currentDate.toString())  // Sat Apr 08 2023 08:19:11 GMT+0530 (India Standard Time)
// currentDate.setSeconds(40)
// console.log(currentDate.toString())  // Sat Apr 08 2023 08:21:40 GMT+0530 (India Standard Time)