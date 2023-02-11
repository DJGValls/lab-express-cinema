require("../db");
const MovieModel = require("../models/Movie.models");
const movies = require("./movies.json");

async function insertData() {
  try {
    const response = await MovieModel.insertMany(movies);
    console.log("Peliculas insertadas correctamente");
  } catch (error) {
    console.log(error);
  }
}

insertData();

  
  // Add here the script that will be run to actually seed the database (feel free to refer to the previous lesson)
  
  // ... your code here