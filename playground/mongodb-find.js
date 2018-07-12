const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://marty:00Zind00@ds231951.mlab.com:31951/zindel', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('There was a connection error :( ');
    } else {
        console.log('Connected to the DB!');
        let db = client.db('zindel');

        // db.collection('Todos').find({
        //         _id: '5b46b53c359e68fb1881f907'
        //     }).toArray().then((docs) => {
        //     console.log('Todos');
        //     console.log(JSON.stringify(docs, undefined, 2));
        // }, (err) => {
        //     console.log('Could not query the todos.', err);
        // });

    //     db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos');
    //     console.log(`Todos count: ${count}`)
    // }, (err) => {
    //     console.log('Could not query the todos.', err);
    // });

    db.collection('Users').find({name: 'Marty'}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Could not query the todos.', err);
    });

       //client.close();
    }
});