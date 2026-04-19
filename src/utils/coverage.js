export function calculateCoverage(product, sqFt, coats) {
  const coveragePerGallon = product.coverageSqFtPerGallon

  const baseGallons = (sqFt / coveragePerGallon) * coats

  // Add 10% waste factor
  const totalGallons = baseGallons * 1.1

  return {
    baseGallons,
    totalGallons
  }
}
