const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://marty:00Zind00@ds231951.mlab.com:31951/zindel', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('There was a connection error :( ');
    } else {
        console.log('Connected to the DB!');
        let db = client.db('zindel');

        // deleteMany
        // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
        //     console.log(result);
        // });


        // deleteOne
        // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {

        //     //console.log(result);
        //     if (result.CommandResult.result.n > 0)
        //     {
        //         console.log('Deleted one!!!');
        //     } else {
        //         console.log('None found!');
        //     }})};

        // findOneAndDelete
        db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
            console.log(result);
        });
            
            //db.close();
    }});

