var RoomModel = (function (personCapacity, storageCapacity) {

  var totalPersonCapacity = personCapacity;
  var totalStorageCapacity = storageCapacity;
  var isAvailable = 0;

  return {
    getAvailabilityStatus: function(){
      return isAvailable;
    },
    getTotalPersonCapacity: function () {
      return totalPersonCapacity;
    },
    getTotalStorageCapacity: function () {
        return totalStorageCapacity;
      }
  }
 });

 module.exports = RoomModel;