const express = require("express");
const notesModel = require('./models/notes.model')
const app = express();

app.use(express.json());

//  Post
app.post("/notes", async (req, res) => {
  const { title, descripation, age } = req.body;
   const note = await notesModel.create({
    title, descripation, age
  })

  res.status(201).json({
    message:"Note created succes",
    note
  })
});


// GET 

app.get("/notes", async(req, res)=>{
    const note = await notesModel.find()
    res.status(200).json({
        message:"notes fetch success",
        note
    })
})
module.exports = app;
