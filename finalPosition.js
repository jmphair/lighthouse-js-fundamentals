const finalPosition = function (moves) {
  // starting position of the parade is [0, 0]
  // declare variables to match below 
  let x = 0;
  let y = 0;
  for (let move of moves) {
    switch(move) {
      // increment north (y)
    case "north" :
      y++;
      break;
      // increment south (y)
    case "south" :
      y--;
      break;
      // decrement east (x)
    case "east" :
      x++;
      break;
      // decrement west (x)
    case "west" :
      x--;
      break;
    }
  }
  return [x, y];
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

finalPosition(moves);