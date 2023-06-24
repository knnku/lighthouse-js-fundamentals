
const moves = ['north', 'north', 'south', 'north']  

function finalPosition(moves) {
  let yPos = 0;
  let xPos = 0;

  let pos = [];
  for (let move of moves) {
    if (move === "north") {
      yPos += 1;
    } else if (move === "south") {
      yPos -= 1;
    } else if (move === "east") {
      xPos += 1;
    } else if (move === "west") {
      xPos -= 1;
    } 

    
  }

  pos.push(xPos, yPos)

  return pos;

}

console.log(finalPosition(moves))