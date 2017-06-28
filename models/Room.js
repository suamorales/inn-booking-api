var RoomModel = (function (personCapacity, storageCapacity, id) {

  this.totalPersonCapacity = personCapacity;
  this.totalStorageCapacity = storageCapacity;
  this.isAvailable = true;
  this.id = id;
  this.booking;;

  // TO DO: Apply assertions on required fields. Throw error if fields not filled

  var getAvailabilityStatus = function() {
    return isAvailable;
  }

  var getTotalPersonCapacity = function () {
    return totalPersonCapacity;
  }

  var getTotalStorageCapacity = function () {
    return totalStorageCapacity;
  }

  var bookRoom = function(booking) {
    var bookingResult = {};

    if (booking.isValid) {
      this.isAvailable = false;
      bookingResult.sucess = true
    } else {
      bookingResult.success = false;
      bookingResult.error = 'Room Already Booked';
    }

    return bookingResult;
  }

  return {
    roomId: this.id,
    isAvailable: this.isAvailable,
    personCapacity: this.totalPersonCapacity,
    storageCapacity: this.totalStorageCapacity,
    bookRoom: bookRoom
  }
 });

 module.exports = RoomModel;