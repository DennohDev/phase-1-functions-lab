// Code your solution in this file!

function distanceFromHqInBlocks(pickUpLocation){
    if (pickUpLocation < 42) {
        return (42 - pickUpLocation)
    } else {
        return pickUpLocation - 42
    }
}

function distanceFromHqInFeet (pickUpLocation){
    return distanceFromHqInBlocks(pickUpLocation) * 264
}

function distanceTravelledInFeet (pickUpLocation, destination) {
    if (destination < pickUpLocation) {
        return (pickUpLocation - destination) * 264
    } else {
        return (destination - pickUpLocation) * 264
    }
}

function calculatesFarePrice(start, destination) {
    const distanceTravelled = distanceTravelledInFeet(start, destination);
    if (distanceTravelled <= 400){
        return 0
    }
    if (distanceTravelled > 400 && distanceTravelled <= 2000) {
        return (distanceTravelled - 400) * 0.02
    }
    if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
        return 25
    }
    if (distanceTravelled > 2500) {
        return 'cannot travel that far'
    }
}