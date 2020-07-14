
//TREASURE ISLAND 1 - DFS

function findTreasure(grid) {
  console.log("Input:", grid);
  let H = grid.length,
      V = H && grid[0].length,
      steps = 0;
  steps = dfs(grid, 0, 0, H, V, steps);
  console.log(steps);
}

function dfs(grid, row, col, H, V, steps) {
  //traverse on all paths of O
  //Boundary condition and return to infinity because undefined will fail in Math.min
  if (row < 0 || row >= H || col < 0 || col >= V || grid[row][col]=='D'){
      return Infinity;
  } ;
   //if X found return
  if (grid[row][col] == 'X') {
      return steps;
  }
  else if (grid[row][col] == 'O') {
      grid[row][col]='D'; //setting the visited node to 'D'
      steps+=1;
      steps = Math.min(dfs(grid, row + 1, col, H, V, steps),
                       dfs(grid, row - 1, col, H, V, steps),
                       dfs(grid, row, col + 1, H, V, steps),
                       dfs(grid, row, col - 1, H, V, steps));
  }
  return steps;
 
}

let map = [
['O', 'O', 'O', 'O'],
['D', 'O', 'D', 'O'],
['O', 'O', 'O', 'O'],
['X', 'D', 'D', 'O']
];

findTreasure(map)



// ===================================================================




const map = [
  ['O', 'O', 'O', 'O'],
  ['D', 'O', 'D', 'O'],
  ['O', 'O', 'O', 'O'],
  ['X', 'D', 'D', 'O']
];

const width = map.length - 1;
const height = map[0].length - 1;

const shortestRoute = [];

const findIsland = (i, j, ) => {
  if (map[i][j] === 'X') {
      shortestRoute.push(`${i},${j}|`); return true;
  }
  map[i][j] = true;
  if (i > 0) if ((map[i - 1][j] === 'O' || map[i - 1][j] === 'X') && map[i - 1][j] !== true) {
      if (findIsland(i - 1, j)) {
          shortestRoute.push(`${i},${j}|`); return true;
      }
  }
  if (j > 0) if ((map[i][j - 1] === 'O' || map[i][j - 1] === 'X') && map[i][j - 1] !== true) {
      if (findIsland(i, j - 1)) {
          shortestRoute.push(`${i},${j}|`); return true;
      }
  }
  if (i < height) if ((map[i + 1][j] === 'O' || map[i + 1][j] === 'X') && map[i + 1][j] !== true) {
      if (findIsland(i + 1, j)) {
          shortestRoute.push(`${i},${j}|`); return true;
      }
  }
  if (j < width) if ((map[i][j + 1] === 'O' || map[i][j + 1] === 'X') && map[i][j + 1] !== true) {
      if (findIsland(i, j + 1)) {
          shortestRoute.push(`${i},${j}|`); return true;
      }
  }
};


findIsland(0, 0);

console.log(`Route is ${shortestRoute} with the minimum route takes ${shortestRoute.length - 1} steps`)












