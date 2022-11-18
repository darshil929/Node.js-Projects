// fetch api

const getTodos = async () => {
    const responce = await fetch('todos/todos.json');

    if(responce.status !== 200){
        throw new Error('Cannot fetch the data');
    }

    const data = await responce.json();
    return data;
};

console.log(1);
console.log(2);

getTodos()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected', err.message));

// console.log(3);
// console.log(4);

// const text = getTodos();
// console.log(text);

// fetch('todos/todos.json').then((responce) => { // a rejection is only when there is a network error
//     console.log('resolved', responce);
//     return responce.json();
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log('rejected', err);
// });