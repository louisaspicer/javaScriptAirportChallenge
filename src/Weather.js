'use strict';

function Weather() {

}

Weather.prototype.isStormy = function() {
  return (Math.random() * 6) > 3;
}
