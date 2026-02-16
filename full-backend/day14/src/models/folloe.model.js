const mongoose = require("mongoose");

const folloeSchema = new mongoose.Schema({
    follower:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
        required: [ true , "Follower is required for create an Follow" ]
    },
    following:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
        required: [ true , "Following is required for create an Follow" ]
    }},
    {
        timestamps: true
    }
)

const folloeModel = mongoose.model("follow", folloeSchema);

module.exports = folloeModel;