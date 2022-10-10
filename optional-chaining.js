// Optional Chaining

const user = {
    name: 'Thomas',
    age: 33,
     address: {
        street: 'Paris street',
        number: 182,
        zip: {
            code: '3333333-99',
            city: 'Los Angeles'
        },
        showFullAddress() {
            return 'ok';
        }
   }
};

// document.body.innerText = JSON.stringify({user});

// document.body.innerText = user.address.street; // error

// document.body.innerText = user.address ? user.address.street : "Don't exists"

// document.body.innerText = user.address?.zip?.code ?? 'Uninformed'; 

document.body.innerText = user.address.showFullAddress?.() // '?.' run function only if exists