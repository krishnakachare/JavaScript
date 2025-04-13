// fetch('https://reqres.in/api/users?page=2', {
//   method: 'GET', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });

// fetch("https://reqres.in/api/users?page=2", {
//     method: "get",
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     }
// })
//     .then((response) => {
//         return response.json()
//     }).then(function (data) {
//         data = data.data
//         data.forEach(el => {
//             document.write(`You id is: <h1>${el.id}<h1>`)
//             document.write(`You id is: <h1>${el.email}<h1>`)
//             document.write(`You id is: <h1>${el.first_name}<h1>`)
//             document.write(`You id is: <h1>${el.last_name}<h1>`)
//             document.write(`<img  src=${el.avatar}>`)
//         });
//     });