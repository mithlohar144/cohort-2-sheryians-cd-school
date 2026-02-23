const mongoose = require("mongoose");

const folloeSchema = new mongoose.Schema(
  {
    follower: {
      type: String,
    },
    followee: {
      type: String,
    },
    status:{
        type: String,
        default: "pending",
        enum:{
            values:["pending", "accepted", "rejected"],
            message: "Status can only be pending, accepted or rejected"
        }
    }
  },
  {
    timestamps: true,
  },
);
folloeSchema.index({ follower: 1, followee: 1 }, { unique: true });
const folloeModel = mongoose.model("follow", folloeSchema);

module.exports = folloeModel;
