var RoomModel = (function (personCapacity, storageCapacity, id) {

  var totalPersonCapacity = personCapacity;
  var totalStorageCapacity = storageCapacity;
  var isAvailable = 1;
  var id = id;

  // TO DO: Apply assertions on required fields. Throw error if fields not filled

  var getAvailabilityStatus = function(){
    return isAvailable;
  }

  var getTotalPersonCapacity = function () {
    return totalPersonCapacity;
  }

  var getTotalStorageCapacity = function () {
    return totalStorageCapacity;
  }

  return {
    roomId: id,
    available: getAvailabilityStatus(),
    personCapacity: getTotalPersonCapacity(),
    storageCapacity: getTotalStorageCapacity(),
  }
 });

 module.exports = RoomModel;