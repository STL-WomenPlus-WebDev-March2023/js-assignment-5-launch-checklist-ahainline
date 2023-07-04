
// Write your JavaScript code here!

window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    }).then(function () {
        let destinationPlanet = pickPlanet(listedPlanets);
        // document, name, diameter, star, distance, moons, imageUrl
        let planetName = destinationPlanet.name;
        let planetDiameter = destinationPlanet.diameter;
        let planetStar = destinationPlanet.star;
        let planetDistance = destinationPlanet.distance;
        let planetMoons = destinationPlanet.moons;
        let planetImageUrl = destinationPlanet.image;
        addDestinationInfo(window.document, planetName, planetDiameter, planetStar, planetDistance, planetMoons, planetImageUrl);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });
    
    let form = document.querySelector("form[data-testid=testForm]");
    form.addEventListener("submit", async () => {        
        let list = document.getElementById("faultyItems");
        let pilot = (document.querySelector("input[name=pilotName]")).value;
        let copilot = (document.querySelector("input[name=copilotName")).value;
        let fuelLevel = (document.querySelector("input[name=fuelLevel")).value;
        let cargoLevel = (document.querySelector("input[name=cargoMass")).value;
     
        // resetLaunchStatus(window.document, list);
        formSubmission(window.document, list, pilot, copilot, fuelLevel, cargoLevel);
        event.preventDefault();
        form.reset();
    });
});