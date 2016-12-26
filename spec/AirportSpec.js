  'use strict';

  describe("Airport", function() {
    var airport;
    var plane;
    var weather;


    beforeEach(function() {
      airport = new Airport();
      plane = jasmine.createSpyObj('plane', ['land']);
    });

    it("has a default capacity", function() {
      expect(airport.capacity).toEqual(20);
    })


    describe("Weather is not stormy", function() {

      beforeEach(function() {
        spyOn(airport, "isStormy").and.returnValue(false);
      });

      it("should have no planes to begin with", function() {
        expect(airport.planes).toEqual([]);
      });

      it("should store plane in airport", function() {
        airport.land(plane);
        expect(airport.planes).toEqual([plane]);
      });

      it("should land planes", function() {
        airport.land(plane);
        expect(plane.land).toHaveBeenCalledWith(airport);
      });

      it("should not land plane if airport is full", function() {
        for (var i = 0; i < 20; i++) {
          airport.land(plane)
        }
        expect(function(){ airport.land(plane); }).toThrowError("Airport is full")
      })

    });

    describe("Weather is stormy", function() {

    beforeEach(function() {
      spyOn(airport, "isStormy").and.returnValue(true);
    });

      it("won't land planes if stormy", function() {
        expect(function(){ airport.land(plane); }).toThrowError("Cannot land plane in stormy weather");
      });

    });

  });
