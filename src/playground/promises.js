const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Andrew',
            age: 26
        })
        reject('Smthg went wrong!');
    }, 1500);
})

console.log('before')
// .then register a callback
promise.then((data) => {
    console.log('1', data);
}).then(() => {
    console.log('does this run');
}).catch((error) => {
    console.log('error: ', error);
});
console.log('after');