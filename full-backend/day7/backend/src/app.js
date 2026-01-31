const express = require("express");
const noteModel = require("./models/note.model");
const app = express();

app.use(express.json());
// POST
// create new note and save data in DB

app.post("/api/notes", async (req, res) => {
  const { title, descripation } = req.body;
  const note = await noteModel.create({
    title,
    descripation,
  });

  res.status(201).json({
    message:"note create SuccessFull",
    note
  })
});

//Get
app.get("/api/notes", async (req, res)=>{
    const note = await noteModel.find()  // fint method hemsha Array return kregi or data array of object ke formet me return kreggi
    res.status(200).json({
        message:"note fetch SuccessFully",
        note
    })
})

//Delete /api/notes/:id

app.delete('/api/notes/:id', async(req,res)=>{
    const id = req.params.id
    const note =await noteModel.findByIdAndDelete(id)
    
    res.status(200).json({
        message:"note delete success"
    })
    
})


// Update   PATCH  /api/notes/:id

app.patch('/api/notes/:id', async(req, res)=>{
    const id = req.params.id
    const {descripation}= req.body
    const note = await noteModel.findByIdAndUpdate(id, {descripation})

    res.status(200).json({
        message:"Update Success",
        note
    })

})
module.exports = app;
