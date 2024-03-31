document.querySelector('h1[title="hii"]').addEventListener('click', () =>{
    document.querySelector('h1[title="hii"]').title = 'hello';
});

// selecting the element
// manipulating the element
// user action


var toggleButton = document.querySelector("#buttonOne");
var lst = document.querySelector('#listA');

toggleButton.addEventListener('click', () =>{

    if(lst.style.display === 'block'){
        lst.style.display = 'none'
        toggleButton.textContent = 'Show Elements'
    }
    else{
        lst.style.display = 'block'
        toggleButton.textContent = 'Hide Elements'
    }


})


// Clear

var p = document.getElementById('para');
var inputText = document.querySelector('input[type="text"]');
var button = document.getElementById('buttonTwo');

button.addEventListener('click', () =>{
    p.textContent = inputText.value;
    inputText.value = ''

});



var ulList = document.getElementById('upperCase')
var listB = document.getElementsByTagName('li')

console.log(ulList)
console.log(listB)

// ulList.addEventListener('mouseover', () =>{
//     for(var i=0; i<listB.length; i++){
//         listB[i].textContent = listB[i].textContent.toUpperCase()
//     }
// });

// ulList.addEventListener('mouseout', () =>{
//     for(var i=0; i<listB.length; i++){
//         listB[i].textContent = listB[i].textContent.toLowerCase()
//     }
// });


ulList.addEventListener('mouseover', (event) =>{
    // console.log(event.target)
    // console.log(event.target.tagName)   // LI
    console.log(event.target.textContent)

   if(event.target.tagName === 'LI'){
       event.target.textContent = event.target.textContent.toUpperCase()
   }
});


ulList.addEventListener('mouseout', (event) =>{
    // console.log(event.target)
    // console.log(event.target.tagName)   // LI
    console.log(event.target.textContent)

   if(event.target.tagName === 'LI'){
       event.target.textContent = event.target.textContent.toLowerCase()
       event.target.style.color = 'red'
   }
});




