const express = require("express");
const pelis = require('./peliculas.json');

const app = express();
app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/movies", (req, res) => {
  res.json(pelis);
});

app.get("/movies/:id", (req, res) => {
    const { id } = req.params;
    console.log(id);
    const pelicula = pelis.find(p => p.id === parseInt(id));
    if (pelicula) return res.json(pelicula);
    res.status(404).json({ message: "Pelicula no encontrada" });
})

app.get("/movie", (req, res) => {
    const { genero} = req.query;

    if(genero) {
        const peliculasFiltradas = pelis.filter(p => p.genero.includes(genero));
        if (peliculasFiltradas.length > 0) return res.json(peliculasFiltradas);

        res.status(404).json({ message: "No se encontraron peliculas con ese genero" });
    }
})









const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});