const express = require('express');
const router = express.Router();
const MovieModel = require("../models/Movie.models");


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET /movies page */
router.get("/movies", (req, res, next)=>{
    MovieModel.find()
    .then((response) => {
        //console.log(response);
        res.render("movies.hbs", {
            allMovies: response
        })
    })
    .catch((error) => {
        next(error);
    });
})

/* GET /movie:movieId page */
router.get("/movie/:movieId", (req, res, next)=>{
    MovieModel.findById(req.params.movieId)
    .then((response) => {
        //console.log(response);
        res.render("movieDetail.hbs", {
            oneMovie: response
        })
    })
    .catch((error) => {
        next(error);
    });
})



module.exports = router;
