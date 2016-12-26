'use strict';

function Plane() {
  this.isFlying = true;
}

Plane.prototype.land = function (airport) {
  this.isFlying = false
};

Plane.prototype.takeOff = function () {
  if (this.isFlying === true) {
    throw TypeError("Plane is already flying");
  } else {
    this.isFlying = true
  }
};
