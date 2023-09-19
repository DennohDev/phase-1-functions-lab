// Code your solution in this file!

function distanceFromHqInBlocks(pickUpLocation){
    return pickUpLocation > 42 ? pickUpLocation - 42 : 42 - pickUpLocation
}

function distanceFromHqInFeet (pickUpLocation){
    return distanceFromHqInBlocks(pickUpLocation) * 264
}

function distanceTravelledInFeet (pickUpLocation, destination) {
    return destination < pickUpLocation ? (pickUpLocation - destination) * 264 : (destination - pickUpLocation) * 264
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