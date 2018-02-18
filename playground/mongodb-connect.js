//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

//var obj = new ObjectID();
//console.log(obj);



//var user = {name: 'Xavier Ar', age: 30};
//var {name} = user;
//console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');
	
	/*
	db.collection('Todos').insertOne({
		text: 'Somethin to do',
		completed: false
	}, (err,result) => {
		if(err)
			return console.log('Unable to insert todo',err);
		console.log(JSON.stringify(result.ops,undefined,2));
	});
	*/

	//Insert new doc into Users(name,age,location)
	/*
	db.collection('Users').insertOne({
		name: 'Xavier',
		age: 25,
		location: 'VC'
	}, (err,result) => {
		if(err)
			return console.log('Unable to insert user',err);
		console.log(JSON.stringify(result.ops,undefined,2));
	});
	*/
	/*
	db.collection('Todos').find({
			_id: new ObjectID('5a89cae24e5337049c915bf7')}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs,undefined,2));
	},(err) => {
		console.log('Unable to fetch todos',err);
	});
	*/

	db.collection('Users').find({name: "Cris"}).toArray().then((docs) => {
		console.log(JSON.stringify(docs,undefined,2));
	},(err) => {
		console.log('Unable to fetch todos',err);
	});

	//client.close();
});