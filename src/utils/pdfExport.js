import jsPDF from 'jspdf'

export function exportOrderSheet(mapped) {
  const doc = new jsPDF()

  doc.setFontSize(18)
  doc.text("Order Sheet", 20, 20)

  doc.setFontSize(12)
  doc.text(`Product Number: ${mapped.productNumber}`, 20, 40)
  doc.text(`Product Code: ${mapped.productCode}`, 20, 50)
  doc.text(`Description: ${mapped.description}`, 20, 60)
  doc.text(`5-Gallon Pails: ${mapped.qtyFiveGal}`, 20, 80)
  doc.text(`1-Gallon Cans: ${mapped.qtyOneGal}`, 20, 90)

  doc.save("OrderSheet.pdf")
}
