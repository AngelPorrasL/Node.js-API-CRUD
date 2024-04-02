const express = require('express');
const router = express.Router();
const Peliculas = require('../model/peliculas');

// GET - Obtener todas las películas
router.get('/peliculas', async (req, res) => {
    try {
        const peliculas = await Peliculas.find();
        res.json(peliculas);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener las películas', error: error.message });
    }
});

// POST - Crear una nueva película
router.post('/peliculas', async (req, res) => {
    try {
        const nuevaPelicula = new Peliculas(req.body);
        await nuevaPelicula.save();
        res.status(201).json({ mensaje: 'Pelicula creada correctamente', pelicula: nuevaPelicula });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear la pelicula', error: error.message });
    }
});

// PUT - Actualizar una película existente
router.put('/peliculas/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const peliculaActualizada = await Peliculas.findByIdAndUpdate(id, req.body, { new: true });
        if (!peliculaActualizada) {
            return res.status(404).json({ mensaje: 'No se encontró la pelicula para actualizar' });
        }
        res.json({ mensaje: 'Pelicula actualizada correctamente', pelicula: peliculaActualizada });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar la pelicula', error: error.message });
    }
});

// DELETE - Eliminar una película
router.delete('/peliculas/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const peliculaEliminada = await Peliculas.findByIdAndDelete(id);
        if (!peliculaEliminada) {
            return res.status(404).json({ mensaje: 'No se encontró la pelicula para eliminar' });
        }
        res.json({ mensaje: 'Pelicula eliminada correctamente', pelicula: peliculaEliminada });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al eliminar la pelicula', error: error.message });
    }
});

module.exports = router;