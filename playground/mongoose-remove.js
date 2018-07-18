const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findByIdAndRemove
// Todo.findOneAndRemove(({}))

Todo.findByIdAndRemove('5b4f68c668329c001469940b').then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log(todo);
});

Todo.findOneAndRemove({_id: ''}).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log(todo);
});
