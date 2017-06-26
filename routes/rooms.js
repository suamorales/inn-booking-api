var express = require('express');
var RoomModel = require('../models/Room.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  var room1 = RoomModel(1,1);
  console.log(room1.getTotalPersonCapacity());

  res.send({rooms: 'bru'});
});

module.exports = router;
