function CrossProduct(A) {
    // Stores coefficient of X
    // direction of vector A[1]A[0]
    var X1 = A[1][0] - A[0][0];
  
    // Stores coefficient of Y
    // direction of vector A[1]A[0]
    var Y1 = A[1][1] - A[0][1];
  
    // Stores coefficient of X
    // direction of vector A[2]A[0]
    var X2 = A[2][0] - A[0][0];
  
    // Stores coefficient of Y
    // direction of vector A[2]A[0]
    var Y2 = A[2][1] - A[0][1];
  
    // Return cross product
    return X1 * Y2 - Y1 * X2;
  }
  
  // Function to check if the polygon is
  // convex polygon or not
  export function isConvex(points) {
    // Stores count of
    // edges in polygon
    var N = points.length;
  
    // Stores direction of cross product
    // of previous traversed edges
    var prev = 0;
  
    // Stores direction of cross product
    // of current traversed edges
    var curr = 0;
  
    // Traverse the array
    for (i = 0; i < N; i++) {
      // Stores three adjacent edges
      // of the polygon
      var temp = [points[i], points[(i + 1) % N], points[(i + 2) % N]];
  
      // Update curr
      curr = CrossProduct(temp);
  
      // If curr is not equal to 0
      if (curr != 0) {
        // If direction of cross product of
        // all adjacent edges are not same
        if (curr * prev < 0) {
          return false;
        } else {
          // Update curr
          prev = curr;
        }
      }
    }
    return true;
  }
  
  /* Code example
  
  var points = [
    [0, 0],
    [0, 1],
    [1, 1],
    [1, 0],
  ];
  
  if (isConvex(points)) {
    console.log("Yes");
  } else {
    console.log("No");
  }
  */
  