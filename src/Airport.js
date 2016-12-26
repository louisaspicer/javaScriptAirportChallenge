'use strict';

var DEFAULT_CAPACITY = 20;

function Airport() {
  this.planes = [];
  this.weather = new Weather();
  this.capacity = DEFAULT_CAPACITY;
}

Airport.prototype.land = function(plane) {
  if (this.isStormy()) {
    throw TypeError("Cannot land plane in stormy weather");
  } else if (this._isFull()) {
    throw TypeError("Airport is full");
  } else {
  plane.land(this);
  this.planes.push(plane);
  }
}

Airport.prototype._isFull = function() {
  return this.planes.length >= DEFAULT_CAPACITY
}

Airport.prototype.isStormy = function() {
  this.weather.isStormy();
}
