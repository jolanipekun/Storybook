const mongoose = require('mongoose')

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://john1234:<jolanipekun23awsacct1>@cluster0.2xrrkwc.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () =>{
    try {
     
     
     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
     client.connect(err => {
     const collection = client.db("test").collection("devices");
     // perform actions on the collection object
     client.close();
      });
    
     console.log(`MongoBD Connected : ${conn.connection.host}`)
    }catch (err) {
      console.error(err)
      process.exit(1)
    }
}

module.exports = connectDB