var count = 60;

while (count >= 0) {
  if (count >= 51) {
    console.log("T-" + count + " seconds");
  } else if (count == 50) {
    console.log("Orbiter transfers from ground to internal power");
  } else if (count >= 32 && count < 50) {
    console.log("T-" + count + " seconds");
  } else if (count == 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  } else if (count >= 17 && count < 31) {
    console.log("T-" + count + " seconds");
  } else if (count == 16) {
    console.log("Activate launch pad sound suppression system");
  } else if (count >= 11 && count < 16) {
    console.log("T-" + count + " seconds");
  } else if (count == 10) {
    console.log("Activate main engine hydrogen burnoff system");
  } else if (count >= 7 && count < 10) {
    console.log("T-" + count + " seconds");
  } else if (count == 6) {
    console.log("Main engine start");
  } else if (count >= 1 && count < 6) {
    console.log("T-" + count + " seconds");
  } else if (count == 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  } 

  count = count - 1;
}