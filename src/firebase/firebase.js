import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  
  firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { firebase, googleAuthProvider, database as default };

// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
// const expenses = [];
// snapshot.forEach((childSnapshot) => {
//   expenses.push({
//     id: childSnapshot.key,
//     ...childSnapshot.val()
//   });
// }); 
// console.log(expenses);
// })


// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changes
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })


// database.ref('expenses').push({
//   description: 'blablaa',
//   note: 'here is my note',
//   amount: 100,
//   createdAt: 'May'
// })

// database.ref('expenses').push({
//   description: 'Igo',
//   note: 'here is my note',
//   amount: 30,
//   createdAt: 'May'
// } )

// database.ref('expenses').push({
//   description: 'iglouiglou',
//   note: 'here is my NOTE',
//   amount: 600,
//   createdAt: 'May'
// })

// const firebaseNotes = {
//   notes: {
//     apoijsdaf: {
//       title: 'First note!',
//       body: 'This is my note'
//     },
//     irjgj: {
//       title: 'Another note',
//       body: 'this is a note'
//   }
// }

// const notes = [{
// id: '12',
// title: 'First note!',
// body: 'This is my note'
// }, {
// id: '761ase',
// title: 'Another note',
// body: 'Another note'
// }]

// database.ref('notes').set(notes);

// // on & off cancel set up subscription to DB
// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// })

// setTimeout(() => {
//   database.ref('name').set('andrew');
//   database.ref('job/company').set('Amazon');
//   database.ref('job/title').set('Soft Dev');

// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange)
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(37);
// }, 10500);




// database.ref('location/city')
// .once('value')
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// })
// .catch((e) => {
//   console.log('Error fetching data', e)
// })

// // database.ref().set({
// //     name: 'Simon JOACHIM',
// //     age: 24,
// //     isSingle: true,
// //     stresslevel: 6,
// //     job: {
// //       title: 'software engineer',
// //       company: 'google'
// //       },
// //     location: {
// //       city: 'Valleiry',
// //       country: 'France'
// //     }

// //   }).then(() => {
// //     console.log('Data is saved !')

// //   }).catch((e) => {
// //     console.log('this failed', e);
// //   });

// //   // change data in array
// //   database.ref('age').set(25);

// //   // change data in sub array
// //   database.ref('location/city').set('New York')

// //   // create new sub array and add value
// //   database.ref('attributes/height').set('183')
// //   database.ref('attributes/weight').set('78')

// //   database.ref('attributes').set({
// //     height: 183,
// //     weight: 78
// //   }).then(() => {
// //     console.log('Data is added !')

// //   }).catch((e) => {
// //     console.log('this failed', e);
// //   });

// // // removing data
// //   database.ref('isSingle')
// //   .remove()
// //   .then(() => {
// //     console.log('Data was removed')
// //   }).catch((e) => {
// //     console.log('There was a problem removing data', e)
// //   })

//   // equivalent to remove
//   // database.ref('isSingle').set(null);

//   // Single call to update set and remove
//   // database.ref().update({
//   //   name: 'Théo',
//   //   age: 34,
//   //   job: 'web dev',
//   //   isSingle: null
//   // });

//   database.ref().update({
//     stresslevel: 9,
//     'job/company': 'amazon',
//     'location/city': 'Orléans' 
//   })

