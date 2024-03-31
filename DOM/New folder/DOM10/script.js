
let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let addButton = document.querySelector('#one')

// tagName , id , className , attribute


ulList.addEventListener('click',function(e){

    //console.log(e.target)
    //console.log(e.target.tagName)
   // console.log(e.target.className)


   if(e.target.tagName  === "BUTTON"){


        if(e.target.className === "remove"){
           let li =  e.target.parentElement
           let ul = li.parentElement
           ul.removeChild(li)

        }
        else if(e.target.className == "up"){

            let li =  e.target.parentElement
            let ul = li.parentElement
            let preli = li.previousElementSibling

            if(preli){
                ul.insertBefore(li,preli)
            }


        }
        else if(e.target.className == "down"){

            let li =  e.target.parentElement
            let ul = li.parentElement
            let nextli = li.nextElementSibling

            if(nextli){
                ul.insertBefore(nextli,li)
            }
            
        }



   }


})





addButton.addEventListener('click',function(){
    let txt = inputText.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = txt  // <li>Papaya</li>
    // function
    creatButton(newLi)
    ulList.appendChild(newLi)
    inputText.value = " "

})


function creatButton(li){

        // <li>Banana
        //     <button class = "remove">Remove</button>
        //     <button class = "up">Up</button>
        //     <button class = "down">Down</button>
        // </li>


    let r = document.createElement('button') // <button></button>
    r.textContent = "Remove"  // <button>Remove</button>
    r.classList.add('remove') // <button class= "remove">Remove</button>
    li.appendChild(r)


    let u = document.createElement('button') // <button></button>
    u.textContent = "Up"  // <button>Up</button>
    u.classList.add('up') // <button class= "up">Up</button>
    li.appendChild(u)


    let d = document.createElement('button') // <button></button>
    d.textContent = "Down"  // <button>Down</button>
    d.classList.add('down') // <button class= "down">Down</button>
    li.appendChild(d)


}