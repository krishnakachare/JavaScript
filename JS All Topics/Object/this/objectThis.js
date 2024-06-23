// // let counter = {
// //     count:0,
// //     next:function(){
// //         console.log(this)
// //         let r = this.count = this.count + 1
// //         return r 
// //     }
// // }

// // let r = counter.next()
// // console.log(r)

// // console.log(this)

// // alert('hello')
// // window.alert()

// // var f = 10 
// // console.log(window.f)
// // console.log(window === this)


// // console.log(this)

// // var f = 10
// // console.log(window.f)

// // //alert('hello')
// // window.alert("hello")


// // // function movie(){
// // //     console.log(this === window);
// // // }

// // // movie()
// // // window.movie()
// // //---------------------------------

// // let bike = {
// //     brand:'KTM',
// //     getBrand:function(){
// //         return this.brand
// //     }
// // }

// // let bike2 = {
// //     brand:'KTM2'
// // }

// // let r = bike.getBrand()
// // console.log(r)

// // let b = bike.getBrand.bind(bike2)
// // console.log(b())

// // // let b = function(){
// // //     return bike2.brand
// // // }
// // // bind
// // console.log(b())


// // // call apply 

// // //var brand = "defaultBrand"


// // function getCompany(prefix){
// //     console.log(prefix + this.brand)
// // }

// // getCompany('Hi this is')

// // let audi = {
// //     brand:"Audi"
// // }

// // let BMW = {
// //     brand:"BMW"
// // }

// // getCompany.call(audi,'New to ')
// // getCompany.call(BMW,'New a ')

// // //---------------------------->

// // getCompany.apply(audi,['New to '])
// // getCompany.apply(BMW,['New a '])















