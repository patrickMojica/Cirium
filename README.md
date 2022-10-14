# Cirium Take Home Coding Challenge

# Prompt

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
	- flight record objects in CrewMember flights array are sorted by departure_time allowing for easy lookup of first departure_time and last arrival_time for any crew member

## Installation

This solution was written using Node.js v16.14.0
To download install Node.js visit [this link](https://nodejs.org/en/download/)
or use a package manager of your choice.
If you use homebrew you can run

```bash
 brew install node
```

## Usage
Navigate to the Cirium directory and run:

```bash
 npm install
```
1) 
The simplest way to run the solution is to run:
```bash
 node --experimental-json-modules src/main.js
```
This will read the local flights-2022-09-03.json file from the project folder
and log the list of pilot objects to the console.

2) 
There is also the option of running the solution as a REST API endpoint.
In this way a server is running at localhost:8080 and any JSON array can be sent in the body of a GET request

Start the server by running:
```bash
npm start 
```
I recommend using [Postman](https://www.postman.com/) to test the REST endpoint

Send a GET request to localhost:8080/pilotsChallenge
with the request body containing the JSON array of flight objects as in the example request body below:

```javascript
{
    "flights": [
        {
            "flight_number": "647",
            "airline": "DL",
            "departure_airport": "MSP",
            "departure_time": "13:23 UTC",
            "arrival_airport": "SEA",
            "arrival_time": "15:36 UTC",
            "crew": {
                "pilot": "Belia Lovegrove",
                "copilot": "Belia Lovegrove",
                "attendants": ["Gery Turfrey", "Ania Ruddiman", "Chelsie Pendall"]
            },
            "passenger_count": 72
            },
        {
            "flight_number": "673",
            "airline": "DL",
            "departure_airport": "SFO",
            "departure_time": "17:23 UTC",
            "arrival_airport": "SEA",
            "arrival_time": "18:58 UTC",
            "crew": {
                "pilot": "Pall Izod",
                "copilot": "Gordy Flear",
                "attendants": ["Vivianna Roffe", "Krystle Baiss", "Izaak Copcutt"]
            },
            "passenger_count": 141
        },
    ]
}

```

The server will respond with a JSON formatted list of objects containing the pilot information formatted as per the prompt of the challenge.

## Conclusion
Overall it was a pretty interesting small project and I enjoyed working on it.
The considerations for additional features led me to define a CrewMember class since many of the desired features can include pilots andany other crew members.

This class maintains an array containing references to objects associated with the CrewMember's flight history. And this array can be used to calculate further queries as desired in the features.

Furthermore the choice of using a hash map for the collection of pilots records allows the future implementation of looking up an individual pilot by name from the collection in O(1) time

