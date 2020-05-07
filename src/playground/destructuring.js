// const person = {
//     // name: 'Andrew',
//     age: 18,
//     location: {
//         city: 'BraySTJEAN',
//         temp: 15
//     }
// };
// const { name = 'FDP', age } = person;

// console.log(`${name} is ${age}`);

// const { city, temp } = person.location;
// if (city && temp) {
// console.log(`it's ${temp} in ${city}`);
// }

const book = {
    title: 'Ego is the Enemy',
    author:'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);

const address = ['27 allée du petit saint martin', 'SJDB', 'CENTRE', '45800'];

const [street, city, state, zip] = address;
console.log(`You are in ${city}, ${zip}`)

const item = [ 'Coffee (hot)', '$2', '$2.5', '$3'];
const [coffeeType, small , medium, large ] = item;

console.log(`A medium ${coffeeType} costs ${medium}`)