const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PeliculasSchema = Schema({
    titulo: String,
    director: {
        nombre: String,
        nacionalidad: String
    },
    anio: String,
    genero: [String],
    calificacion: Number,
    actores: [
        {
            nombre: String,
            personaje: String
        }
    ],
    sinopsis: String
    
    //title: String,
    //year: String,
    //rating: Number,
    //synopsis: String,
    //gender: [String],
    //director: {
        //name: String,
        //nationality: String
    //},
    //actors: [
        //{
            //name: String,
            //character: String
        //}
    //]
});

module.exports = mongoose.model('peliculas', PeliculasSchema, 'Peliculas');