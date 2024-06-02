const mongoose = require('mongoose');

main()
    .then(()=> {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema ({
    title : {
        type : String,
        required : true,
    },
    author : {
        type : String,
    },
    price : {
        type : Number,
        min : [0, "price is too low fo Amazon selling"],
    },
    discount : {
        type : Number,
        default : 10,
    },
    category : {
        type : String,
        enum : ["fiction", "non-fiction"],
    },
    genre : [String],
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate("665b2e9718badc0866d0a2fe",
{price : -200}, {runValidators: true}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err.errors.price.properties.message);
});

// let book1 = new Book({
//     title : "Marvel v2",
//     price : 300,
//     genre : ["comics", "superheros", "fiction"],
// });

// book1.save().then((res) => {
//     console.log(res);
// }).catch ((err)=> {
//     console.log(err);
// });