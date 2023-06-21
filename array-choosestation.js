const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['KKP Station', 100, 'community centre']
];




function chooseStations(stations) {

  let selection = [];
  for(let station of stations) {
    if (station[1] >= 20 && (station[2] === "school" || station[2] === "community centre")) {
      selection.push(station[0]);  // game[0] contains the name of our game in this case as it is the first item in our game array
    };
  }

  return selection;
  
}

console.log(chooseStations(stations));