let hotel = {

    namey:'shivsagar',
    location:'MG road',
    categories:['South Indian','Chinese','Italian'],
    startMenu:['Ban maska','Garlic bread','Casearsalad','panner 65','paneer chilly'],
    mainMenu:['Chicken Biryani','Mutton Biryani','Fish curry'],

    order:function(startIndex , mainCourseIndex){
        return [this.startMenu[startIndex],this.mainMenu[mainCourseIndex]]

    }
            
}


let {namey,location} = hotel

console.log(namey)
console.log(location)




















































