const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map(journey => journey.startLocation)
  return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map(journey => journey.endLocation)
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const found = this.journeys.filter(journey => {
    return journey.transport === transport;
  });
 return found;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const found = this.journeys.filter(journey =>{
    return journey.distance > minDistance;
  });
  return found;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

  let total = 0;
  const reducer = (total, currentValue) => total + currentValue;
  return ((this.journey.distance).reduce(reducer,total));
};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
