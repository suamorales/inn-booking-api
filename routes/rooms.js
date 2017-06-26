var express = require('express');
var RoomModel = require('../models/Room.js');
var InnModel = require('../models/Inn.js').getInstance();

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(InnModel)
  res.send({
    rooms: InnModel.getAllRooms()
  });
});

module.exports = router;
