// Speed less than 75 mph > Ok
// For every 5 mph over 70 > 1 point
// Suspend license for 12 points or greate

console.log(checkSpeed(70));

function checkSpeed(speed) {
  const speedLimit = 70;
  const speedPerPoint = 5;
  const suspendPoints = 12;

  if (typeof speed !== "number") return Nan;

  if (speed < speedLimit + speedPerPoint) return "Ok";

  if (speed >= speedLimit + speedPerPoint) {
    const speedAboveLimit = speed - speedLimit;
    const points = Math.floor(speedAboveLimit / speedPerPoint);

    if (points >= suspendPoints) return "License suspended. Points: " + points;
    else return "Points: " + points;
  }
}
