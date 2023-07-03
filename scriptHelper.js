// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput.trim() === '') {
        return ("Empty");
    }
    const inputNum = Number(testInput);
    if (isNaN(inputNum)) {
        return ("Not a Number");
    } else {
        return ("Is a Number");
    }  
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotValid = validateInput(pilot);
    let copilotValid = validateInput(copilot);
    let fuelLevelValid = validateInput(fuelLevel);
    let cargoLevelValid = validateInput(cargoLevel);

    if (pilotValid === "Empty" ||
        copilotValid === "Empty" ||
        fuelLevelValid === "Empty" ||
        cargoLevelValid === "Empty") {
            alert("All fields are required!");
            event.preventDefault();
        }
    if (pilotValid === "Is a Number" ||
        copilotValid === "Is a Number" ||
        fuelLevelValid === "Not a Number" ||
        cargoLevelValid === "Not a Number") {
            alert("Make sure to enter valid information for each field!");
            event.preventDefault();
        }


}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
