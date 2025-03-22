require('dotenv').config();
const { MongoClient } = require('mongodb');
const url =  process.env.MONGO_URI;
const client = new MongoClient(url);
// Database Name
const dbName = 'helloworld';
async function main() {
    // Use connect method to connect to the server
    await client.connect();// request the above url
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('user');

    const  data = {

        "firstName": "John",
        "lastName": "dubey",
        "sex": "M"  ,
        "city": "jaipur"
    };
//     // inserting the doc
//     const insertResult = await collection.insertMany([data]);
// console.log('Inserted documents =>', insertResult);

// //update the doc
// const updateResult = await collection.updateOne({ firstName:"John"  }, { $set: { firstName: "Leo" } });
// console.log('Updated documents =>', updateResult);
  //deleet a doc
//   const deleteResult = await collection.deleteOne({ firstName: "Leo", lastName: "dubey" });
// console.log("Deleted document =>", deleteResult);

// find all doc with a filter of city "surat"
 const result= await collection.find({ city: "surat"}).toArray();
 console.log('Found documents =>', result);
    // read the document
//     const findResult = await collection.find({}).toArray();
// console.log('Found documents =>', findResult);
  
    return 'done.';
  }
  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());