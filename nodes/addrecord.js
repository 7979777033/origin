var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017";  

MongoClient.connect(url, (err, client) => {
    var db = client.db('EMS');


if (err) throw err;  
var myobj = { name: "suman", age: "20", address: "Delhi" };  
db.collection("employee").insertOne(myobj, function(err, res) {  
if (err) throw err;  
console.log("1 record inserted");  
client.close();
});  
});  