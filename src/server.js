const express = require('express');
const app = express();

const controller = require('./controller');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Welcome to Cirium's Flight-Crew data");
});

app.get('/pilotsChallenge', 
  controller.getPilots,
  (req, res) => {
    // console.log(res.locals.geoinfo);
    res.status(200).json(res.locals.pilotsInfo);
});

app.listen(8080, 
  console.log('server running at http://localhost:8080')
);