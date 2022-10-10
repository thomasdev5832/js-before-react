// DESTRUCTURING

// https://www.youtube.com/watch?v=UgEaJBz3bjY

 const address = user.address;
 const { address, age } = user;

// change name variable 
 const { address, age: idade } = user;

// create other variable 
const { address, age: idade, nickname = 'Nick' } = user;

document.body.innerText = JSON.stringify(Object.entries({ address, idade, nickname}));

function showAge({ age }) {
    return age;
}
