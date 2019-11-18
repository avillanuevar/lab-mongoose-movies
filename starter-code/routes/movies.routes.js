const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.model')

router.get('/', (req, res, next) => {

  Movie.find()
    .then(allMovies => {
      console.log("nananananananana batman ",Movie.find())
      res.render('movies/movies', {movies: allMovies})})
    .catch(err => console.log("Error consultando la BBDD: ", err))
  });

router.get('/details/:id', (req, res) => {
  const movieId = req.params.id
  Movie.findById(movieId)

    .then(movie => res.render('movies/details', {
      movies: movie
    }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});
router.get('/add', (req, res) => res.render('celebrities/addCeleb'))

router.post('/add', (req, res) => {

  const {name,occupation,catchPhrase} = req.body
  
  Movie.create({name,occupation,catchPhrase})
  .then(x => res.redirect('/celebrities'))
  .catch(err => 'error: ' + err)
})
router.post('/delete', (req, res) => {
    const celebId = req.query.celebId
    Movie.findByIdAndRemove(celebId)
    .then(res.redirect('/celebrities'))
    .catch(err => 'error: ' + err)
  })
  router.get('/edit', (req, res) => {
    const celebId = req.query.celebId
    Movie.findById(celebId)
      .then(celeb => res.render('celebrities/editCelebrities', celeb))
      .catch(err => console.log('error!!', err))
  })
  router.post('/edit', (req, res) => {
    const {name,occupation,catchPhrase} = req.body
  console.log("noooooooooo",name, occupation, catchPhrase)
      const celebId = req.query.celebId

      Movie.findByIdAndUpdate(celebId, {name, occupation, catchPhrase})
        .then(res.redirect('/celebrities'))
        .catch(err => console.log('error!!', err))
 })
module.exports = router;
