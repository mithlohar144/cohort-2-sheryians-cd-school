const mongoose = require('mongoose')
const dotenv = require('dotenv')
function connectToDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connect to Database");
        
    })
}

module.exports = connectToDB