export function containerMath(totalGallons) {
  // Maximize 5-gallon pails first
  const fiveGal = Math.floor(totalGallons / 5)

  // Remaining gallons go into 1-gallon cans
  const remaining = totalGallons - (fiveGal * 5)
  const oneGal = Math.ceil(remaining)

  return {
    fiveGal,
    oneGal
  }
}
