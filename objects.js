// Objects

const user = {
    name: 'Thomas',
    age: 33,
    address: {
        street: 'Street Paris',
        number: 182
    }
};

 document.body.innerText = ('name' in user); // return true

 document.body.innerText = Object.keys(user); // return keys of object

 document.body.innerText = Object.values(user);  // return values of object

 document.body.innerText = JSON.stringify(Object.values(user));

 document.body.innerText = JSON.stringify(Object.entries(user));

