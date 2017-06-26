var GnomeModel = (function (TOTAL_HOURS_ALLOWED) {
  var totalHoursAllowed = TOTAL_HOURS_ALLOWED;
  var getHoursWorkedToday = 0;

  return {
    getTotalHoursAllowed: function () {
      return totalHoursAllowed;
    },
    getHoursWorkedToday: function () {
      return getHoursWorkedToday;
    }
  }

})();

module.exports = GnomeModel;