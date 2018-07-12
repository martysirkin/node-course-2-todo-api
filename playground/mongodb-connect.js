const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://marty:00Zind00@ds231951.mlab.com:31951/zindel', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('There was a connection error :( ');
    } else {
        console.log('Connected to the DB!');

        let db = client.db('zindel');

        // db.collection('Todos').insertOne({
        //     text: 'Something to do',
        //     completed: false
        // }, (err, result) => {
        //     if (err) {
        //         return console.log('Unable to insert todo', err);
        //     } 

        //     console.log(JSON.stringify(result.ops, undefined, 2));
        // });

        db.collection('Users').insertOne({
            name: 'Marty',
            age: 57,
            location: 'Boston'
        }, (err, result) => {
            if (err) {
                return console.log('Unable to insert user :(');
            }

            console.log(JSON.stringify(result.ops, undefined, 2));
        });

        client.close();
    }
});