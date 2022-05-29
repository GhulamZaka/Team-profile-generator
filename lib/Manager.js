function Manager(
  name = "",
  id = "",
  email = "",
  officeNumber = "",
  role = "Manager"
) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.officeNumber = officeNumber;
  this.role = role;

  Manager.prototype.getName = function () {
    return `${this.name}`;
  };

  Manager.prototype.getId = function () {
    return `${this.id}`;
  };

  Manager.prototype.getEmail = function () {
    return `${this.email}`;
  };

  Manager.prototype.getOfficeNumber = function () {
    return `${this.officeNumber}`;
  };
  Manager.prototype.getRole = function () {
    return `Manager`;
  };
}

module.exports = Manager;
