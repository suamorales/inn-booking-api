var RoomModel = require('./Room.js');
var _ = require('lodash');

// new RoomModel(personCapacity, storageCapacity, id)
// ID Manually assigned for convenience. Would otherwise come with some persistence layer

// TWO people and has ONE storage space
var room1 = RoomModel(2, 1, 1);

// TWO people and has ZERO storage space
var room2 = RoomModel(2, 0, 2);

// TWO storage spaces and sleeps ONE person
var room3 = RoomModel(1 , 2, 3);

// ONE person and has ZERO storage space
var room4 = RoomModel(1, 0, 4);

var InnModel = (function () {

  // Singelton Pattern
  var instance; 

  var init = function() {
    var rooms = [room1, room2, room3, room4];
    var employees = [];  
    var description = 'A small, magical inn with a prime location in a prominent city run by a friendly innkeeper named Allison.'  

    var ROOM_BASE_PRICE = 10;
    var STORAGE_BASE_PRICE = 2;

    return {
      getAllRooms: function() {
        return rooms;
      },
      getAvailableRooms: function(bookingRequestParams) {
        var availableRooms = _.filter(rooms, function(room) {
          var enoughPersonCapacity = bookingRequestParams.numPeople <= room.personCapacity;
          var enoughStorageCapcity = bookingRequestParams.numStorage <= room.storageCapacity;
          var isAvailable = room.isAvailable;

          // show rooms that meet these criteria:
          return isAvailable && enoughPersonCapacity && enoughStorageCapcity; 
        });

        return availableRooms;   
      },
      bookRoom: function (roomId) {
        var targetRoom =  _.find(rooms, { 'roomId' : roomId });
        var bookingResults = targetRoom.bookRoom();
        return bookingResults;
      },
      roomBasePrice: function() {
        return ROOM_BASE_PRICE;
      },
      storageBasePrice: function() {
        return STORAGE_BASE_PRICE;
      }
    }
  }

  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
      if ( !instance ) {
        instance = init();
      }

      return instance;
    }
  };
})();

module.exports = InnModel;