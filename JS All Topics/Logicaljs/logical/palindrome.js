// check string is palindrome 
// 1.
// function checkPali(...para) {
//     para.forEach(el => {
//         el = String(el);
//         console.log(el)
//         let rev = el.split(" ").reverse().join(" ");
//         let ans = el == rev ? "String is Palindrome" : "String is Palindrome";
//         console.log(ans);
//     });
// };
//checkPali("NITIN", "madam", 12321);

//2.

let arr = ["hi", "NITIN", "madam", 12321, 12345];

for (let kk of arr) {
    console.log(checkPalindrome(kk));
};

function checkPalindrome(para) {
    let minCount = 0;
    let indexCount = 1;
    let arr = String(para).split("");
    for (let ele of arr) {
        if ((arr.indexOf(ele, arr.indexOf(ele) + 1)) == -1) {
            minCount++;
            if (minCount == 2) {
                return false;
            };
        } else {
            indexCount++;
        };
    };
    if (indexCount == arr.length) {
        return true;
    };
};

//ANS:  false, true, true, true, false

