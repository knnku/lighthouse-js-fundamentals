
const moves =  

function finalPosition(moves) {
  let yPos = 0;
  let xPos = 0;

  let pos = [];

  for (let moves of moves) {
    if (move === "north") {
      yPos + 1;
    } else if (move === "south") {
      yPos - 1;
    } else if (move === "east") {
      xPos + 1;
    } else if (move === "west") {
      xPos - 1;
    }

    
  }

  return xPos, yPos;

}

console.log(finalPosition(['north', 'north', 'south', 'north'] ))