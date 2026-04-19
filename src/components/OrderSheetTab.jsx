import { useState } from 'react'
import productIndex from '../data/productIndex'
import { calculateCoverage } from '../utils/coverage'
import { containerMath } from '../utils/containerMath'
import { mapToOrderSheet } from '../utils/pdfMapper'
import { exportOrderSheet } from '../utils/pdfExport'
import SectionCard from './SectionCard'
import Button from './Button'

export default function OrderSheetTab() {
  const [product, setProduct] = useState(productIndex[0])
  const [sqFt, setSqFt] = useState(1000)
  const [coats, setCoats] = useState(1)
  const [mapped, setMapped] = useState(null)

  function runMap() {
    const coverage = calculateCoverage(product, sqFt, coats)
    const containers = containerMath(coverage.totalGallons)
    const mappedData = mapToOrderSheet(product, containers)
    setMapped(mappedData)
  }

  function exportPdf() {
    if (!mapped) return alert("Run mapping first.")
    exportOrderSheet(mapped)
  }

  return (
    <SectionCard title="Order Sheet Mapping">
      <label>Product</label>
      <select
        value={product.number}
        onChange={(e) => {
          const p = productIndex.find(x => x.number === e.target.value)
          setProduct(p)
        }}
      >
        {productIndex.map((p) => (
          <option key={p.number} value={p.number}>
            {p.number} — {p.code}
          </option>
        ))}
      </select>

      <label>Square Feet</label>
      <input type="number" value={sqFt} onChange={(e) => setSqFt(e.target.value)} />

      <label>Coats</label>
      <input type="number" value={coats} onChange={(e) => setCoats(e.target.value)} />

      <Button onClick={runMap}>Map to Order Sheet</Button>

      {mapped && (
        <div style={{ marginTop: "20px" }}>
          <p><strong>Product #:</strong> {mapped.productNumber}</p>
          <p><strong>Code:</strong> {mapped.productCode}</p>
          <p><strong>Description:</strong> {mapped.description}</p>
          <p><strong>5‑Gal Qty:</strong> {mapped.qtyFiveGal}</p>
          <p><strong>1‑Gal Qty:</strong> {mapped.qtyOneGal}</p>

          <Button style={{ marginTop: "20px" }} onClick={exportPdf}>
            Export PDF
          </Button>
        </div>
      )}
    </SectionCard>
  )
}
