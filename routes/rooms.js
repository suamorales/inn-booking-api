var express = require('express');
var RoomModel = require('../models/Room.js');
var InnModel = require('../models/Inn.js').getInstance();
var _ = require('lodash');

var router = express.Router();

/* GET Available Rooms. */
router.get('/', function(req, res, next) {
  var bookingParams = {};
  if (req.query.numPeople) bookingParams.numPeople = req.query.numPeople;
  if (req.query.numStorage) bookingParams.numStorage = req.query.numStorage;
  
  res.send({
    rooms: InnModel.getAvailableRooms(bookingParams)
  });
});



/* POST a booking. */
router.post('/autobook', function(req, res, next) {
  // roomId needs validation
  var bookingParams = {};
  bookingParams.numPeople = Number(req.body.numPeople);
  bookingParams.numStorage = Number(req.body.numStorage);

  var roomId;

  if (bookingParams.numPeople && bookingParams.numStorage) {
    var availableRooms = InnModel.getAvailableRooms(bookingParams);

    // order rooms by least person capacity, and then take the first, to get the most $ per room. 
    // This can be abstracted out to the room object, so minor abstraction leak here
    var sortedRoomCollection = _.orderBy(availableRooms, [function(room) { return room.personCapacity }]);

    var mostProfitableRoom = sortedRoomCollection[0];
    roomId = mostProfitableRoom;

  } else {
    res.send({
      error: 'Must send number of people staying and amount of storage needed.'
    });
  }

  var bookingSuccessResults = InnModel.bookRoom(roomId);

  // checks can be abstracted out to Express middleware
  if (bookingSuccessResults.success) {
    res.send({
      roomId: roomId
    });
  } else {
    res.send({
      error: bookingSuccessResults.error
    });
  }
});

module.exports = router;
