const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
if(err){
	return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');
const db = client.db('TodoApp');
// Update

/*
db.collection('Todos').findOneAndUpdate(
	{"_id" : new ObjectID("5a89f45bcf702b07bf4f50e7")},
	{
	$set: {
		completed: true
	}
	},{returnOriginal: false}).then((result) => {
		console.log(result);
	})
});

*/

db.collection('Users').findOneAndUpdate(
	{"_id" : new ObjectID("5a89cbc684e70e1c800da61c")},
	{
	$inc: {
		age: 1
	},
	$set: {name: 'Xavier 123'}
	},{returnOriginal: false}).then((result) => {
		console.log(result);
	})
});
