const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readystate);
            if(request.readystate === 4 && request.status === 200){
                const data = JSON.parse(request.responceText)
                resolve(data);
            }else if(request.readystate === 4){
                reject('error getting resource');
            }
    });
  
});


request.open('GET', resource);
request.send();
};

getTodos('todos/luigi.json').then(data => {
    console.log('promise resolved:', data);
    return getTodos('todos/mario.json');
}).then(data => {
    console.log('promise 2 resolved',data);
    return getTodos('todos/todos.json');
}).then(data => {
    console.log('promise 3 resolved',data);
}).catch(err => {
    console.log('promise rejected:', err);
});

// console.log(1);
// console.log(2);

// getTodos('todos/luigi.json', (err, data) => {
//     console.log(data);
//     getTodos('todos/mario.json', (err, data) => {
//         console.log(data);
//         getTodos('todos/luigi.json', (err, data) => {
//             console.log(data);
//         });
//     });

    // console.log(err, data)
//     if(err){
//         console.log(err);
//     } else{
//         console.log(data);
//     }
// });

// console.log(3);
// console.log(4);

// promise example

// const getSomething = () => {

//     return new Promise((resolve, reject) => {
//         //fetch something
//         resolve('some data');
//         reject('some erroe');
//     });

// };

// getSomething().them((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// getSomething().them(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });