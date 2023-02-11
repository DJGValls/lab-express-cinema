const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    director:{
        type: String
    },
    stars:{
        type: [String]
    },
    image:{
        type: String,
        unique: true
    },
    description:{
        type: String,
        unique: true
    },
    showtimes: {
        type: [String]
    }
},
{
    timestamps: true
})

const MovieModel = mongoose.model("Movie", movieSchema);
module.exports = MovieModel;