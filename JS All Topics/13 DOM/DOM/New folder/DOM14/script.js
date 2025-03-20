{/* <h1 id = "one">Hello</h1>
    <ul class ="two">
        <li>Apple</li>
        <li>Mango</li>
        <li>Banana</li>
        <li>Grapes</li>
        <li>Berry</li>
    </ul> */}

    // let headingOne = document.querySelector('h1')
    // console.log(headingOne)

    // let byClassName = document.querySelector('.two')
    // console.log(byClassName)

    // let ulList = document.querySelector('ul')
    // console.log(byClassName)

    // let liList = document.querySelectorAll('li')
    // let liListA = document.getElementsByTagName('li')
    // let i = document.getElementById('one')
    // let ia = document.getElementsByClassName('two')

    // console.log(ia)


    let newL = document.querySelector('body')
    console.log(newL)

    newL.addEventListener('mouseover',function(e){
        //console.log(e.target)
        //console.log(e.target.tagName)
        console.log(e.target.className)
    })