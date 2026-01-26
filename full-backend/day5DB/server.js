const express = require ('express')

const app = express()
app.use(express.json())


let notes = []
app.get("/notes", (req, res)=>{
    res.send(notes)
    console.log("notes geted succes");
    
})

app.post("/notes", (req ,res) =>{
    notes.push(req.body)
    res.send("notes created")
})

app.delete("/notes/:index", (req, res)=>{
    delete notes[req.params.index]
    res.status(201).json({
        message: 'Note deleted success'
    })
    res.send("notes deleted succes") 
})

app.patch("/notes/:index", (req, res) => {
    notes[req.params.index].descripation = req.body.descripation
    res.status(200).json({
        message:"note update success"
    })
    res.send("note Update success")
})

app.listen(3000, () =>{
    console.log("server is runnig on port 3000");
    
})