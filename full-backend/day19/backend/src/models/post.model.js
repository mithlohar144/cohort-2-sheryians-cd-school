const mongoose  = require("mongoose");


const postSchema = new mongoose.Schema({
    caption:{
        type: String,
        default:""
    },
    imageUrl:{
        type: String,
        required: [ true , "Image URL is required for create an Post" ]
    },
    user:{
        ref:"users",
        type:mongoose.Schema.Types.ObjectId,
        required: [ true , "User is required for create an Post" ]
    },

})



const postModel = mongoose.model("post", postSchema);

module.exports = postModel;