const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b4e200f1d355516cf2bfe0c11';

// if (!ObjectID.isValid(id)) {
//     console.log('ObjectID is not valid!');
// }

// Todo.find({
//    _id: id 
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Found one: ', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Found todo by ID: ', todo);
// }).catch((e) => console.log(e));

User.findById('5b4f68c668329c001469940b').then((user) => {
    if (!user) {
        return console.log('Id not found');
    }
    console.log(JSON.stringify(user, null, 2));
}).catch((e) => console.log(e));

