const mongoose = require('mongoose');

main()
    .then(()=> {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
});

const User = mongoose.model("User", userSchema);

User.findOneAndDelete({name : "Elleya"}).then((res) => {
    console.log(res);
}).catch ((err)=> {
    console.log(err);
});

// User.findOneAndUpdate({name : "Gama"}, {age: 26}, {new: true}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// User.findById('66585243e73b17214837eb5b').then((res) =>{
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// User.insertMany([
//     {name : "Gill", email : "gill@gmail.com", age : 43},
//     {name : "Elleya", email : "elleya@gmailcom", age : 34},
//     {name : "Lepcha", email : "lepcha@gmail.com", age : 54},
// ]).then((res) => {
//     console.log(res);
// }).catch((err)=> {
//     console.log(err);
// });

// const user2 = new User ({
//     name : "Gama",
//     email : "Gamaa@gmail.com",
//     age : 56,
// });

// user2.save()
//     .then((res) =>{
//         console.log(res);
//     })
//     .catch((err) =>{
//         console.log(err);
//     });