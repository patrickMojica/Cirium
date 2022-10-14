Given a JSON file with flight information for a given day (flights-2022-09-03.json), emit a JSON file that reports the following for each pilot in the list:
- the name of the pilot
- the number of flights they have crewed
- the number of passengers they have transported

The output should include both pilots and copilots but not differentiate between them. For example, the output should indicate that Sella McKellen piloted 2 flights even though one of them was as the copilot.

Provide instructions for how to run your solution. While the goal is to have code that functions correctly, we are also interested in seeing how you apply object oriented development practices, think about design, and test your code.

Here are some future features that the product owner has requested. You may want to consider how they might inform your design choices BUT YOU SHOULD NOT IMPLEMENT THEM:

 - Adding the ability to report this data for a single, specific pilot.
		- Pilot objects are stored in a hash-map that allows each pilot obj to be looked up by name
		- Pilot objects are instances of a 'CrewMember' class

 - Adding first departure city and last arrival city for each crew member for the day
		- CrewMember class allows us to create objects for any flight crew member role
		- CrewMember objects have an array property which contains references to each flight record object
			that is associated with the CrewMember this.name
		- flight objects in CrewMember flights array are sorted by departure_time allowing for easy
			lookup of first departure_time and last arrival_time for any crew member
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


to run solution in console with provided data set:
	1) Clone repo
	2) run: npm install
	3) run: node --experimental-json-modules src/main.js

// define crew member class
// pilot extends crew member (I don't need to actually ... , nothing fundamentally different for output)
 
///
pilots collection will be a hashmap of Crew_Member Objects where the name is the key, and Crew_Member Object is val
////

	main will iterate through InputFlightsArray
		checks to see if pilotsMap contains entry for current flights pilot and copilot,
			if no record exists it crates new crew_member object and adds the current flight
			else means the pilotMap contains said pilot, and adds current flight to pilot_record
	
	declare empty array results
	for each pilot object in pilotMap,
		to array append new object containing: { name, num_flights, num_passengers_served }
	
	return JSON.stringify(results)

	// notes:
		flight objs for kelley Berndtsson cannot possible be from the same day,
		since flight 98 departs before flight 1433 arrival time.
		Would recommend using full Datetime object for departures and arrivals to avoid issues
		 //"type ": "module",