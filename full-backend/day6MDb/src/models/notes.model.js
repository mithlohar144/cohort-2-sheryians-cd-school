const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    title: String,
    descripation: String,
})

const notesModel = mongoose.model("notes", notesSchema)


module.exports = notesModel