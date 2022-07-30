const arguments = process.argv.slice(2)

function calculateAreaOfCircle(radius) {
  let area = Math.PI * radius * radius
  console.log(area)
  return area
}

calculateAreaOfCircle(arguments[0] * 1)
