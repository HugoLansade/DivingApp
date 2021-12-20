const mongoose = require("mongoose");

const DiveSchema = new.mongoose.Schema({
    diveOwner : {
        type : String,
        require : true,        
    },
    date : {
        type : Date,        
    },
    depth : {
        type : Number,
    },
    timeUnderWater : {
        type : Number,
    },
    fish : [{
        type : Schema.Types.ObjectId,
        ref : "fish"
      }],
    picture : [{
        type : Schema.Types.ObjectId,
        ref : "picture"
    }],
    palanque : [{
        type : Schema.Types.ObjectId,
        ref : "user"
    }],
    localisation : {
        type : Geolocation,
    }
})

const diveModel = mongoose.model("Dive", DiveSchema);

module.exports = diveModel;
