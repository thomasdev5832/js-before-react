// Array Methods - map, filter, every, some, find, findIndex, reduce

// https://www.alura.com.br/artigos/manipulacao-de-array-com-map-filter-e-reduce?gclid=Cj0KCQjwhY-aBhCUARIsALNIC06FXrE8S4o1uQtm_ZdJbcwqZYCBNifRU0zPEgbi6rYvPOPi1rbXRgEaAtEREALw_wcB

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];


for(const i of array){
    document.body.innerText +=i;
}

const newArray = [];

array.forEach(item => {
    newArray.push(item * 2);
})
document.body.innerText = JSON.stringify(newArray);

// map()

const newArray = array.map(item => {
    if (item % 2 === 0) {
        return item * 10;
    }
    return item;
})

document.body.innerText = JSON.stringify(newArray);

// filter() -> return part of array
const newArray = array.filter(item => item % 2 === 0);

document.body.innerText = JSON.stringify(newArray); 

// filter + map

const newArray = array
    .filter(item => item % 2 !== 0)
    .map(item => item *10)

document.body.innerText = JSON.stringify(newArray); 

// every

const allItemsAreNumbers = array.every(item => {
    return typeof item === 'number';
});

document.body.innerText = JSON.stringify(allItemsAreNumbers); 

// some

const oneOfItemsAreNumber = array.some(item => {
    return typeof item !== 'number';
});

document.body.innerText = JSON.stringify(oneOfItemsAreNumber); 

// find - return first item match condition

const odd = array.find(item => item % 2 === 1);

document.body.innerText = JSON.stringify(odd);

// findIndex - return index of the first item match condition

const odd = array.findIndex(item => item % 2 === 1);

document.body.innerText = JSON.stringify(odd);

// reduce - create new 

const sum = array.reduce((acc, item) => {
    return acc + item
}, 0)

document.body.innerText = JSON.stringify(sum)




