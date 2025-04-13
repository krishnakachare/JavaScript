
/* closure */

function outer(n) {
	function counter() {
		return n++
	}
	return counter
}
var result = outer(20)
console.log(result())
console.log(result())
console.log(result())
console.log(result())

// a. 21 21    b. 21 22

/* closure means inner function can able to rmeber outer function  previous  values */
/* in real time we will use closures for memorization */


/*  
