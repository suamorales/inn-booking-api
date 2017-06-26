var InnModel = (function () {
  var rooms = [];
  var employees = [];
  var description = 'A small, magical inn with a prime location in a prominent city run by a friendly innkeeper named Allison.'

  return {
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
})();

 module.exports = InnModel;