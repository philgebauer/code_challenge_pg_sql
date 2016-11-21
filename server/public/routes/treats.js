var express = require('express');
var router = express.Router();
var pg = require('pg');

var config = {
  database: 'sigma',
};

var pool = new pg.Pool(config);

router.get('/', function (req, res) {

  pool.connect()
    .then(function (client) {
      client.query('SELECT * FROM treats')
        .then(function (result) {
          client.release();
          res.send(result.rows);
        });
    })
    .catch(function (err) {
      console.log('error on SELECT', err);
      res.sendStatus(500);
    });
});

router.post('/', function (req, res) {
  var treat = req.body;

  pool.connect()
    .then(function (client) {
      client.query('INSERT INTO treats(name, description, pic) VALUES ($1, $2, $3)' , [treat.name, treat.description, treat.pic])
        .then(function () {
          client.release();
          res.sendStatus(201);
        });
    })
    .catch(function (err) {
      res.sendStatus(500);
    });
});




module.exports = router;
