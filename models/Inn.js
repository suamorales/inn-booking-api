var RoomModel = require('./Room.js');

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

    return {
      getAllRooms: function() {
        return rooms;
      },
      addEmployee: function (employee) {
        this.employees.push('employee 1');
      },
      addRoom: function (employee) {
        this.rooms.push('Room1');
      },
      getEmployees: function () {
        return this.employees;
      },
      getRooms: function () {
        return this.rooms;
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