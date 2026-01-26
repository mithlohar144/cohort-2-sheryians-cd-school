const express = require ('express')

const app = express()
app.use(express.json())


const notes = [
    // {
    //     title:"test title",
    //     descripation:"test descripation"
    // }
]

// get data form notes
app.get("/notes" , (req, res) =>{
    res.send(notes)
    res.send("hello would")
})

// create new node
app.post("/notes", (req , res) =>{
     console.log(req.body);
     notes.push(req.body)
     console.log(notes);
     res.send("notes created")   
})

// delete node 

app.delete("/notes/:index", (req, res)=>{
    delete notes[req.params.index] // array me defind krna hai iskoo string me nhi 
    res.send("note delted success")
    console.log(res.params);
})

// patch /notes/:index
// req.body = { descripation :- "smaple modified descripaion" }

app.patch("/notes/:index", (req, res) => {
    notes[req.params.index].descripation = req.body.descripation
    res.send("note Update success")
})
app.listen(3000, ()=>{
    console.log("server is runnign on port 3000");
    
})