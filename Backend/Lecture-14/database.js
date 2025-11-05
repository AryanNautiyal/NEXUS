
// const { MongoClient } = require('mongodb');
// // or as an es module:
// // import { MongoClient } from 'mongodb'

// // Connection URL

// const url = "mongodb+srv://coderArmy9:Hunter@9Bhai@codingadda.ozs5ize.mongodb.net/";

// const client = new MongoClient(url);


// // Database Name

// const dbName = 'CoderArmy';



// async function main() {

//   // Use connect method to connect to the server

//   await client.connect();

// //   Using this we have connected to our DB so it makes a network call which might take time that's why used await here

//   console.log('Connected successfully to server');

//   const db = client.db(dbName);

// //   Here didn't use await because it doesn't make any network call here because it doesn't even check if it exists in DB or not 

// // So it didn't check so there was no need to make a network call

// // As if we want to talk to other system then there will be await used (compulsory) but here they didn't use it because it wasn't checking

//   const collection = db.collection('user');

//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());





/*


            Error: querySrv ENOTFOUND _mongodb._tcp.9Bhai at QueryReqWrap.onresolve [as oncomplete] (node:internal/dns/promises:294:17) {
            errno: undefined,
            code: 'ENOTFOUND',
            syscall: 'querySrv',
            hostname: '_mongodb._tcp.9Bhai'
            }


            This error comes so why this error comes 

            "mongodb+srv://coderArmy9:Hunter@9Bhai@codingadda.ozs5ize.mongodb.net/"

            if we analyze our url we can see " coderArmy9 " our username we used for our DB then password for our DB 

            " Hunter@9Bhai " then we can see our cluster name " codingadda.ozs5ize.mongodb.net/ " 


            So here we can clearly see that whenever it tries to read this string the ' @ ' in password confuses it as 
            we can see after password an ' @ ' is separating cluster name from the password


            So till ' : ' it understands that it's username and same for password it sees till " @ " only but ' @ ' is in password also

            So the parser understands that password is Hunter and the rest is cluster name 




            So to solve this problem instead of " @ " we use %40

*/











// Error free code




// const { MongoClient } = require('mongodb');
// // or as an es module:
// // import { MongoClient } from 'mongodb'

// // Connection URL

// const url = "mongodb+srv://coderArmy9:Hunter%409Bhai@codingadda.ozs5ize.mongodb.net/";


// const client = new MongoClient(url);


// // Database Name

// const dbName = 'CoderArmy';



// async function main() {

//   // Use connect method to connect to the server

//   await client.connect();

// //   Using this we have connected to our DB so it makes a network call which might take time that's why used await here

//   console.log('Connected successfully to server');

//   const db = client.db(dbName);

// //   Here didn't use await because it doesn't make any network call here because it doesn't even check if it exists in DB or not 

// // So it didn't check so there was no need to make a network call

// // As if we want to talk to other system then there will be await used (compulsory) but here they didn't use it because it wasn't checking

//   const collection = db.collection('user');

//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());




/*

            @ === %40 ??

            So what it does is converts the ' @ ' to it's ASCII value

            So if we see ASCII value of ' @ ' we see that it's 64 so how come it's %40

            So what it does is that it takes it's hexadecimal value

            ' @ ' === 0x40          

            In this 0x denotes hexadecimal number and 40 is the number we get after conversion of 64 decimal number to hexadecimal

            So it takes the 40 from here and joins % to it

            So % tells it that the 2 character after mod needs to be converted to ' @ ' after 


*/













// Now doing operations





// const { MongoClient } = require('mongodb');


// const url = "mongodb+srv://coderArmy9:Hunter%409Bhai@codingadda.ozs5ize.mongodb.net/";


// const client = new MongoClient(url);



// const dbName = 'CoderArmy';



// async function main() {


//   await client.connect();


//   console.log('Connected successfully to server');

//   const db = client.db(dbName);

//   const collection = db.collection('user');

//   const findResult = await collection.find({}).toArray();

// //   We are finding in our collection for documents and we are converting all the data to come together as an array

// // (Array of objects) and here it will check if our DB exists and Collection exists or not 

// /*

//     What happens when our DB and Collection is not created ?

//     Ans. If the specified Database (CoderArmy) or Collection (user) doesn't exist, MongoDB will not throw an error and will 
//          implicitly create them when the first write operation is attempted.

// */

//   console.log('Found documents =>', findResult);

//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());





















// Playing with the previous operation performed 


// const { MongoClient } = require('mongodb');


// const url = "mongodb+srv://coderArmy9:Hunter%409Bhai@codingadda.ozs5ize.mongodb.net/";


// const client = new MongoClient(url);



// const dbName = 'CoderArmy';



// async function main() {


//   await client.connect();


//   console.log('Connected successfully to server');

//   const db = client.db(dbName);

//   const collection = db.collection('user');

//   // const findResult = await collection.find({});

//   // Without .toArray() above line gives too long output instead of data




//   const findResult = collection.find({});

//   // Even if we remove the await then also it will work
  
//   // So this means that our collection.find({}) is not making a network call 

//   // So judging from previous code line if we see that we all think that collection.find() was the one making network call

//   // whereas the one who was really making network call was .toArray()




//   // const ans = findResult.toArray();

//   // Without await if we use .toArray() it gives this output Found documents => Promise { <pending> } 

//   // So this means that a promise is created which means async operation which indicates that it was .toArray() that was making
//   // network call

//   const ans = await findResult.toArray();

//   console.log('Found documents =>', ans);

//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());




// So why didn't collection.find() do the network call and why did .toArray() did the network call ?

// And why collection.find() is given the name cursor

/*

  So .toArray() makes the network call

  What it does is it makes the network call and takes all the data from our DB and insert it into array and then returns the array

  This operation is very dangerous operation in itself as it brings all the data 

  So what if we have a device of 8GB RAM and we have 5GB data in our DB so we use this to bring the data 

  So due to this the whole 5GB data is now there in our RAM which can lead to problems 



  So let's say what we want to do is to get the sum of the balance of the whole 5GB data

  So we used this operation and brought whole data in here and traversed that array to get sum of balance

  So here we see the case where we need to use this .toArray() function but it is very dangerous 

  As our system will be gone due to bringing whole 5GB data



  So here our collection.find() comes in the picture 

  The collection.find() is the cursor (our mouse cursor you know)
  
  So what cursor does it points to a single object at a time 

  So cursor points to an object (data) in our DB then it brings that data in backend and then removes the data that it has brought

  in our system and then it just brings the next object (data) from the DB and then removes it and so on

  So with using this the whole 5GB data is not present in our system so our system will survive

  So we can also do it like this as at the end cursor is our object only 

*/







// const {MongoClient} = require('mongodb');

// const url = "mongodb+srv://coderArmy9:Hunter%409Bhai@codingadda.ozs5ize.mongodb.net/";

// const client = new MongoClient(url);

// const dbName = "CoderArmy";

// async function main() {

//   await client.connect();

//   console.log('Connected successfully to server');

//   const db = client.db(dbName);

//   const collection = db.collection('user');

//   const findResult = collection.find({});

//   for await (const doc of findResult)
//   {
//     console.log(doc);
//   }

//   // Used await in for loop as getting data from DB is async operation and will take time so it brings data one by one

//   // Uses one data and then removes the data from our system and then brings next data

//   // So with this during for loop it's making network calls and it will bring one object at a time so system saved


//   return 'done.';
  
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(()=>client.close())


















// Now inserting data in our DB


// const {MongoClient} = require('mongodb');

// const url = "mongodb+srv://coderArmy9:Hunter%409Bhai@codingadda.ozs5ize.mongodb.net/";

// const client = new MongoClient(url);

// const dbName = "CoderArmy";

// async function main() {

//   await client.connect();

//   console.log('Connected successfully to server');

//   const db = client.db(dbName);

//   const collection = db.collection('user');

//   const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);

//   // insertMany used to insert 3 document but here we need to insert one so will use insertOne only

//   // const insertResult = await collection.insertOne({name:"Soveer", age:40});

//   console.log('Inserted documents =>', insertResult);




//   return 'done.';
  
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(()=>client.close())

















// Finding documents using Query Filter



const {MongoClient} = require('mongodb');


const url = "mongodb+srv://coderArmy9:Hunter%409Bhai@codingadda.ozs5ize.mongodb.net/";

const client = new MongoClient(url);

const dbName = "CoderArmy";

const collectionName = "user";

async function main()
{
  await client.connect();

  console.log("Connection successfully established");

  const db = client.db(dbName);

  const collection = db.collection(collectionName);

  const filteredDocs = await collection.find({ a: 3 }).toArray();

  console.log('Found documents filtered by { a: 3 } =>', filteredDocs);


  // Updating document 

  const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });

  console.log('Updated documents =>', updateResult);


  // To remove a document

  const deleteResult = await collection.deleteMany({ a: 3 });

  console.log('Deleted documents =>', deleteResult);


  // To index a collection

  const indexName = await collection.createIndex({ a: 1 });

  console.log('index name =', indexName);




  return "done.";
}


main()
  .then(console.log)
  .catch(console.error)
  .finally(()=>client.close())



// So to make changes or perform operations in our DB we won't use MongoDB drivers for it instead we will use Mongoose

// Saw post as we cannot directly just enter any data that user is sending from our frontend to the backend directly

// So will be needed to perform checks and all that to protect our DB so therefore will learn Mongoose now