// Promises

const sumTwoNumbers = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
}

sumTwoNumbers(1, 2)
    .then(sum => {
        document.body.innerText = sum;
    })
    .catch(err => {
        console.log(err)
    })



fetch('http://api.github.com/users/thomasdev5832')
    .then(response => {
        response.json().then(body => {
            console.log(body);
        })
    })
    .catch(err => {
        console.log(err);
    })

fetch('http://api.github.com/users/thomasdev5832')
    .then(response => {
        return response.json();
    })
    .then(body => {
        console.log(body);
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        console.log('ok!');
    })

// async | await

async function findDataGithub(){
   try {
    const response = await fetch('http://api.github.com/users/thomasdev5832');
    const body = await response.json();
    console.log(body);
    return body.name;
   } catch (err) {
    console.log(err);
   } finally {
    console.log('Ok!');
   }
}

findDataGithub().then(name => {
    console.log(name);
});


