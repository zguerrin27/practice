var kClosest = function(points, K) {
  points.sort((a,b) => {
      return (Math.pow(a[0],2) + Math.pow(a[1],2)) - (Math.pow(b[0],2) + Math.pow(b[1], 2)) 
  })
  console.log(points)

  return points.slice(0, K);
};


const kClosest = (points, K) => {
  return points.sort((a, b) => (a[0] ** 2 + a[1] ** 2) - (b[0] ** 2 + b[1] ** 2)).slice(0, K);
};

let post_offices = [[-16, 5], [-1, 2], [4, 3], [10, -2], [0, 3], [-5, -9]];

console.log(kClosest(post_offices, 3))

// Output[[-1, 2], [0, 3], [4, 3]]   k=3

