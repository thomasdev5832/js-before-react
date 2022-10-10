// Nullish Coalescing Operator

//const age = 0;
const age = null;

// 0, '', [], false, undefined, null => Falsy

document.body.innerText = 'Your age is: ' + (age ?? 'uninformed');