var InnModel = require('../models/Inn.js').getInstance();
var roomBasePrice = InnModel.ROOM_BASE_PRICE;
var storageBasePrice = InnModel.STORAGE_BASE_PRICE;

var BookingModel = (function (numPeople, numUnitsToStore) {
  this.numUnitsToStore = numUnitsToStore;
  this.numPeople = numPeople;
  this.bookingTotalCost;

  return {
    getNumUnitsToStore: function () {
      return this.numUnitsToStore;
    },
    getHoursWorkedToday: function () {
      return this.numPeople;
    },
    getTotalBookingCost: function() {
      // make sure you're never dividing by 0
      return (BASE_ROOM_PRICE / (numPeople || 1) ) + (BASE_STORAGE_COST * numUnitsToStore)
    }
  }
});

module.exports = BookingModel;