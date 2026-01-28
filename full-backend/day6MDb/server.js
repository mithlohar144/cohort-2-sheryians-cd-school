const app = require('./src/app');


const mongoose = require('mongoose')

function connectToDB(){
    mongoose.connect("mongodb+srv://sumitlohar7415_db_user:A99fGX3qKDCcPCLw@cluster0.kghtvzp.mongodb.net/day-6")
    .then(()=>{
        console.log("connect to Database");
        
    })
}
connectToDB()

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
    
})