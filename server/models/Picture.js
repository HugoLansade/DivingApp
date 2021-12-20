const mongoose = require("mongoose")

const PictureSchema = new mongoose.Schema({
    picture : {
        type : String,
    },
    dive : [{
        type : Schema.Types.ObjectId,
        require : true,
    }]
})

const pictureModel = mongoose.model("Picture", PictureSchema);

module.exports = pictureModel;