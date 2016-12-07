'use strict';

describe("Plane", function() {
  var plane;
  var airport;

beforeEach(function() {
  plane = new Plane();
  airport = jasmine.createSpyObj('airport', ['land']);
});

it("should be flying to begin with", function() {
  expect(plane.isFlying).toEqual(true);
});

it("should be able to land", function() {
  plane.land(airport);
  expect(plane.isFlying).toEqual(false);
});

it("should be able to take off", function() {
  plane.land(airport);
  plane.takeOff();
  expect(plane.isFlying).toEqual(true);
});

it("should throw an error if it tries to take off when already flying", function() {
  var foo = function() {
    plane.takeOff();
  }
  expect(foo).toThrowError("Plane is already flying");
});

});
