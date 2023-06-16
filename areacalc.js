function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) {
    return undefined;
  } else {
    let rectangleArea = length * width;
    return rectangleArea;
  } 
}

function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) {
    return undefined;
  } else {
    let triangleArea = base * height / 2;
    return triangleArea;
  } 
}

function calculateCircleArea(radius) {
  if (radius < 0) {
    return undefined;
  } else {
    let circleArea = Math.PI * (radius * radius);
    return circleArea;
  } 
}



console.log(calculateRectangleArea(20, 21))
console.log(calculateTriangleArea(30, 2))
console.log(calculateCircleArea(10))