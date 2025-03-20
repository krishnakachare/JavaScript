// browser page is a object called document in that contain all are elements ( html elements ) its also a small object
// means html element (object) its attribut ( object property)

// HTML = ( Hyper Text Markup Language ) we can write only text on document(browser)
// CSS = (cascading style sheet) designe document
// javascipt = we can add, update, delete html elements (objects) based on user action 



document.write('hi i am krishna')
document.write('<my> hi i am krishna <my>')    // we can add element in document


console.log( document.querySelector("h1"))       // can find particular element by tag name

let nodelist = document.querySelectorAll("li")  // can find  elements by tag name

// it gives nodelist (html elementlist)

for(let i = 0; i < nodelist.length ; i++ ){
    console.log(nodelist[i])

    if(i == 2){
        nodelist[i].style.color ="red"
       // nodelist[i].textContent = "hello"
    }
    if(i == 3){
        
    nodelist[i].textContent = "hello"                      // we can over write text of html element (textContent)
    }



}