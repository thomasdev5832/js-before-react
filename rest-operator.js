// REST operator

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [first, , third, ...rest] = array;

document.body.innerText = JSON.stringify({ first, third, rest});