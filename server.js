const express = require('express')
const path = require('path')
// const noteData = require('./public/db/db.json')
const uuid = require('./helpers/uuid')
const {
    readFromFile,
    readAndAppend,
  //   writeToFile,
  } = require('./helpers/fsUtils.js');

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

// app.get('/api/notes', (req, res) => res.json(noteData));

app.get('/api/notes', (req,res) => {
    readFromFile('./public/db/db.json').then((data) => res.json(JSON.parse(data)));
});

app.post('/api/notes', (req,res) => {
  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
        title,
        text,
        id: uuid()
    };

    readAndAppend(newNote, './public/db/db.json');
  }
  
  readFromFile('./public/db/db.json').then((data) => res.json(JSON.parse(data)));
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);