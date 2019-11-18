const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity.model')

router.get('/', (req, res, next) => {

  Celebrity.find()
    .then(allCelebrities => res.render('celebrities/celebrities', {celebrities: allCelebrities}))
    .catch(err => console.log("Error consultando la BBDD: ", err))
  });

router.get('/details/:id', (req, res) => {
  const celebId = req.params.id
  Celebrity.findById(celebId)
    .then(celeb => res.render('celebrities/details', {
      celebrities: celeb
    }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});
router.get('/add', (req, res) => res.render('celebrities/addCeleb'))

router.post('/add', (req, res) => {

  const {name,occupation,catchPhrase} = req.body
  
  Celebrity.create({name,occupation,catchPhrase})
  .then(x => res.redirect('/celebrities'))
  .catch(err => 'error: ' + err)
})
router.post('/delete', (req, res) => {
    const celebId = req.query.celebId
    Celebrity.findByIdAndRemove(celebId)
    .then(res.redirect('/celebrities'))
    .catch(err => 'error: ' + err)
  })
  router.get('/edit', (req, res) => {
    const celebId = req.query.celebId
    Celebrity.findById(celebId)
      .then(celeb => res.render('celebrities/editCelebrities', celeb))
      .catch(err => console.log('error!!', err))
  })
  router.post('/edit', (req, res) => {
    const {name,occupation,catchPhrase} = req.body
  console.log("noooooooooo",name, occupation, catchPhrase)
      const celebId = req.query.celebId

      Celebrity.findByIdAndUpdate(celebId, {name, occupation, catchPhrase})
        .then(res.redirect('/celebrities'))
        .catch(err => console.log('error!!', err))
 })
module.exports = router;
