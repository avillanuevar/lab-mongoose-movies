const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');
const Movie = require('../models/movie.model');

const Movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [{
    name: "Nicolas Cage",
    occupation: "Actor",
    catchPhrase: "I think I jump around more when I'm alone.",
  },
  {
    name: "Elon Mosk",
    occupation: "CEO of SpaceX",
    catchPhrase: "I got an extra Tesla let's throw it into space",
  },
  {
    name: "Samuel L. Jackson",
    occupation: "Actor",
    catchPhrase: "English, Motherfocker, Do You Speak It?",
  }
]

Celebrity.create(celebrities, (err) => {
      if (err) {
        throw (err)
      }
      console.log(`Created ${celebrities.length} celebrities`)
      mongoose.connection.close();
      });

// const dbName = 'Movies';
// mongoose.connect(`mongodb://localhost/${dbName}`);

// const movies = [{
//     title: "the shining",
//     genre: "horror",
//     plot: "don't stay alone in a hotel",
//   },
//   {
//     title: "the lion king",
//     genre: "musical",
//     plot: "hacuna matata",
//   },
//   {
//     title: "ghost rider",
//     genre: "fantasy",
//     plot: "WTF nick",
//   }
// ]

// Movie.create(movies, (err) => {
//   if (err) {
//     throw (err)
//   }
//   console.log(`Created ${movies.length} movies`)
//   mongoose.connection.close();
// });