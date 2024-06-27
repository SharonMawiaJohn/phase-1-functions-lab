// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    const locationHq = 42
    return Math.abs(pickupLocation - locationHq)
}
function distanceFromHqInFeet(pickupLocation){
    const feet = (distanceFromHqInBlocks(pickupLocation)) * 264;
    return feet
}
function distanceTravelledInFeet(start, destination){
    const feet = Math.abs(destination - start)
    return feet*264
}
function calculatesFarePrice (start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    let fare = 0    
    if (distance <=400) {
            return 0;
        }
        else if (distance>400 && distance <= 2000) {
            fare = 2.56;
        } else if (distance>2000 && distance <= 2500) {
            fare = 25;
        } else if (distance > 2500) {
            return 'cannot travel that far';
        }
        return fare;
}