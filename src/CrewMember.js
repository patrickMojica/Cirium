/*
  CrewMember class defines properties pertaining to an individual crew member
    - Constructor initialized the CrewMember object with properties: name & role
    - The CrewMember class maintains an array list of flight object references, 
      sorted in ascending order by departure date.
    - CrewMember class keeps a running total of flights and passengers transported by each crew member
    - array of flight object references allows development of more granular query methods & other features
    - * would like to add a feature to validate CrewMember itenerary/history is valid.
*/
class CrewMember {
  constructor(newName = '', newRole = '') {
    this.name = newName;
    this.role = newRole;
    this.flight_count = 0;
    this.passengers_served = 0;
    // flights array is sorted by depature time
    this.flights = []; //want array of references to flight objects.. duplicates ?
  }

  //methods
  setName(newName) {
    this.name = newName;
  }

  setRole(newRole) {
    this.role = newRole;
  }

  updateFlights(newFlight) {
    this.flights.push(newFlight); //now sort the flights array on depature
    this.flight_count += 1; // this.flights.length ?
    this.passengers_served += newFlight.passenger_count;
    this.flights.sort((a,b) => a.departure_time >= b.departure_time ? 1 : -1); 
  }

  // //
  // getName() {
  //   return this.name;
  // }

  // getRole() {
  //   return this.role;
  // }

  // getFlightCount() {
  //   return this.flight_count;
  // }

  // getTotalPassengers() {
  //   return this.passengers_served;
  // }
}

module.exports = CrewMember;