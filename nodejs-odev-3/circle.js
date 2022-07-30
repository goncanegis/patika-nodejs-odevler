function calculateAreaOfCircle(radius) {
  let area = Math.PI * radius * radius
  console.log(area)
  return area
}

function calculateCircumferenceOfCircle(radius) {
  let circumference = 2 * Math.PI * radius
  console.log(circumference)
  return circumference
}

module.exports = {
  calculateAreaOfCircle,
  calculateCircumferenceOfCircle,
}
