
const moves = ['north', 'north', 'south', 'north']  

function finalPosition(moves) {
  let yPos = 0;
  let xPos = 0;

  let pos = 0;
  for (let move of moves) {
    if (move === "north") {
      yPos + 1;
    } else if (move === "south") {
      yPos - 1;
    } else if (move === "east") {
      xPos + 1;
    } else if (move === "west") {
      xPos - 1;
    } else {
      xPos + 0 && yPos + 0;
    }

    
  }

  pos.push()
  return pos;

}

console.log(finalPosition(moves))