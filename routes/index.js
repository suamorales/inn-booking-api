var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({name: "Inn Room Booking API"})
});

module.exports = router;
