'use strict';

describe("Weather", function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();

  });

  it("can be stormy", function() {
    spyOn(Math, "random").and.returnValue(5/6);
    expect(weather.isStormy()).toEqual(true);
  });

  it("can not be stormy", function() {
    spyOn(Math, "random").and.returnValue(2/6);
    expect(weather.isStormy()).toEqual(false);
  });
});
