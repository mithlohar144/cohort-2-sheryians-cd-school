const express = require('express');

const app = express();


app.use(express.json())
const notes = [
    // {
    //     title:"test title",
    //     description:"test descripation",
    // },
    // {
    //     title:"test title 2",
    //     description:"test descripation 2"
    // }
]

app.post("/notes", (req, res) =>{
    console.log(req.body);
    notes.push(req.body)
    res.send("notes created")
})

app.get("/notes",(req, res) =>{
    res.send(notes)
})

app.listen(3000, () =>{
    console.log("server is running on port 3000");
    
})