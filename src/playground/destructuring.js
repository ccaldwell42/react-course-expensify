//
// Object Destructuring
//

// const person = {
//   name: 'Caitlin',
//   age: 34,
//   location: {
//     city: 'Parker',
//     temp: 28
//   }
// };

// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// };

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

//
// Array destructuring
//

// const address = ['11867 Meadowood Lane', 'Parker', 'Colorado', '80138'];
// const [ , city, state ] = address;
// console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [ name, , price ] = item;
console.log(`A medium ${name} costs ${price}`)