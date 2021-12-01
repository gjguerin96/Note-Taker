// const notes = require('express').Router();
// const {
//   readFromFile,
//   readAndAppend,
// //   writeToFile,
// } = require('../helpers/fsUtils.js');

// notes.get('/api/notes', (req,res) => {
//     readFromFile('../public/db/db.json').then((data) => res.json(JSON.parse(data)));
// });

// notes.post('api/notes', (req,res) => {
//     const { noteTitle, noteText } = req.body;

//     if (req.body) {
//         const newNote = {
//             noteTitle,
//             noteText,
//         };

//         readAndAppend(newNote, '../public/db/db.json');
//     }
// });

// module.exports = notes;