const mongoose = require("mongoose");

const FishSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true,
    },
    seenBy : [{
        type : Schema.Types.ObjectId,
        require : true,
    }],
    characteristics : {
        type : String,        
    },
    picture : {
        type : String,
    }
})

const fishSchema = mongoose.model("Fish", FishSchema);

module.exports = fishSchema;