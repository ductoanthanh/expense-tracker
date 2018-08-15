import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCK-itMOsYWHXmQM6hAmSUbCVZQfcZwZ9s",
    authDomain: "expense-tracker-ac86c.firebaseapp.com",
    databaseURL: "https://expense-tracker-ac86c.firebaseio.com",
    projectId: "expense-tracker-ac86c",
    storageBucket: "expense-tracker-ac86c.appspot.com",
    messagingSenderId: "218474150336"
  };

firebase.initializeApp(config);

const database = firebase.database();

database.ref('expenses').on('child_removed', (snapshot) => {
    console.log('removed', snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log('changed', snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
    console.log('added', snapshot.key, snapshot.val());
});
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
    
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses)
// }); 

// database.ref('expenses').push({
//     description: 'Coffee',
//     amount: 1200,
//     note: '',
//     createdAt: 123123
// });


// database.ref('notes').push({
//     title: 'Topics',
//     body: 'React Native'
// });

// database.ref('notes/-LJwTEBMO5tACVErBOH6').remove();


// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('errror fetching', e)
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(31);
// }, 10500);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//       console.log('errror')
//   })

// database.ref().set({
//     name: 'Toan Thanh',
//     age: 26,
//     stressLevel: 6,
//     job: {
//       title: 'Front end developer',
//       company: 'Google'
//     },
//     location: {
//       city: 'Philadelphia',
//       country: 'United States'
//     }
//   }).then(() => {
//     console.log('Data is saved!');
//   }).catch((e) => {
//     console.log('This failed.', e);
//   });
  
//   database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
//   });
  
  // database.ref()
  //   .remove()
  //   .then(() => {
  //     console.log('Data was removed');
  //   }).catch((e) => {
  //     console.log('Did not remove data', e);
  //   });

