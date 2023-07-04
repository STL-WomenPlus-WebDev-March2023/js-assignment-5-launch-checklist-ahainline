// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.getElementById("missionTarget").innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `
}

function validateInput(testInput) {
    if (testInput === '') {
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
    resetLaunchStatus(document, list);

    let pilotValid = validateInput(pilot);
    let copilotValid = validateInput(copilot);
    let fuelLevelValid = validateInput(fuelLevel);
    let cargoLevelValid = validateInput(cargoLevel);

    if (pilotValid === "Empty" ||
        copilotValid === "Empty" ||
        fuelLevelValid === "Empty" ||
        cargoLevelValid === "Empty") {
            alert("All fields are required!");
            return;
        }
    if (pilotValid === "Is a Number" ||
        copilotValid === "Is a Number" ||
        fuelLevelValid === "Not a Number" ||
        cargoLevelValid === "Not a Number") {
            alert("Make sure to enter valid information for each field!");
            return;
        }

    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;

    let fuelLevelLaunchable = (Number(fuelLevel) >= 10000);
    let cargoLevelLaunchable = (Number(cargoLevel) <= 10000);
    if (fuelLevelLaunchable && cargoLevelLaunchable) {
        document.getElementById("launchStatus").innerHTML = `Shuttle is Ready for Launch`;
        document.getElementById("launchStatus").style.color = "green";
        list.style.visibility = "visible";
    }

    if (!fuelLevelLaunchable) {
        document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
        document.getElementById("launchStatus").innerHTML = `Shuttle Not Ready for Launch`;
        document.getElementById("launchStatus").style.color = "red";
        list.style.visibility = "visible";
    } 

    if (!cargoLevelLaunchable) {
        document.getElementById("cargoStatus").innerHTML = `Cargo mass too heavy for launch`;
        document.getElementById("launchStatus").innerHTML = `Shuttle Not Ready for Launch`;
        document.getElementById("launchStatus").style.color = "red";
        list.style.visibility = "visible";
    }
    return;  
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            return response.json();
        });
    return planetsReturned;
}

function pickPlanet(planets) {
    let choice = Math.floor(Math.random()*planets.length);
    return planets[choice];
}

function resetLaunchStatus(document, list) {
    document.getElementById("launchStatus").innerHTML = `Awaiting Information Before Launch`;
    document.getElementById("launchStatus").style.color = "black";
    list.style.visibility = "hidden";
    document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
    document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
    document.getElementById("pilotStatus").innerHTML = `Pilot Ready`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot Ready`;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
module.exports.resetLaunchStatus = resetLaunchStatus;
