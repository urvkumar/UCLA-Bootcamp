const express = require('express');
const path = require('path');
const mysql = require('mysql2');

const PORT = 3003;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect to db
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'bootcamp',
      database: 'movies_db'
    },
    console.log(`Connected to the movies_db database.`)
  );

// GET request for reviews
app.get('/api/movies', (req, res) => {
  const sql = `SELECT * FROM movies`;
  
  db.query(sql, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: result
    });
  });
});

// POST request to add a review
// NOTE: Data persistence isn't set up yet, so this will only exist in memory until we implement it
app.post('/api/add-movie', (req, res) => {
    const sql = `INSERT INTO movies (movie_name) VALUES (?)`;
  
    db.query(sql, req.body.movie_name, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: req.body
      });
    });
});

app.delete('/api/movie/:id', (req, res) => {
    const sql = `DELETE FROM movies WHERE id = ?`;
  
    db.query(sql, req.params.id, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'Movie deleted successfully.',
      });
    });
})


app.get('/api/reviews', (req, res) => {
    const sql = `SELECT * FROM reviews`;
  
    db.query(sql, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success.',
        data: result
      });
    });
});

app.patch('/api/update-review', (req, res) => {
    const sql = `UPDATE reviews SET review = ? WHERE movie_id = ?`;
    const { review, movie_id } = req.body;
  
    db.query(sql, [review, movie_id], (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'Movie review updated successfully.',
        data: req.body
      });
    });
});




app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
