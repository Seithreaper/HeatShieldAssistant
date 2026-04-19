export function mapToOrderSheet(product, containers) {
  return {
    productNumber: product.number,
    productCode: product.code,
    description: product.name,
    qtyFiveGal: containers.fiveGal,
    qtyOneGal: containers.oneGal
  }
}
