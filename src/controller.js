//import {CrewMember} from './CrewMember.js';
const CrewMember = require('./CrewMember');

const controller = {};

controller.getPilots = (req, res, next) => {
  const {flights} = req.body;
  const results = [];
  const pilot_records = new Map();

  function updateRecord(pilot, flight) {
    if(pilot_records.has(pilot)) {
      pilot_records.get(pilot).updateFlights(flight);
    } else {
      const newPilot = new CrewMember(pilot, 'pilot');
      newPilot.updateFlights(flight);
      pilot_records.set(pilot, newPilot);
    }
  }
  
  // populate hashmap of pilots (and copilots)
  for (let i = 0; i < flights.length; i++) {
    const copilot = flights[i].crew.copilot;
    const pilot = flights[i].crew.pilot;
  
    updateRecord(pilot, flights[i]);
  
    if (pilot != copilot) {
      updateRecord(copilot, flights[i]);
    }
  }
  
  //create
  for (const pilot of pilot_records) {
    const { name, flight_count, passengers_served } = pilot[1];
    const result = {
      "name": name,
      "flight_count": flight_count,
      "passengers_transported": passengers_served
    }
    results.push(result);
  }
  
  res.locals.pilotsInfo = JSON.parse(JSON.stringify(results));
  return next();
}

module.exports = controller;