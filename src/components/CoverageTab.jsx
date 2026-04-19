import { useState } from 'react'
import productIndex from '../data/productIndex'
import { calculateCoverage } from '../utils/coverage'
import SectionCard from './SectionCard'
import Button from './Button'

export default function CoverageTab() {
  const [product, setProduct] = useState(productIndex[0])
  const [sqFt, setSqFt] = useState(1000)
  const [coats, setCoats] = useState(1)
  const [result, setResult] = useState(null)

  function runCalc() {
    const r = calculateCoverage(product, sqFt, coats)
    setResult(r)
  }

  return (
    <SectionCard title="Coverage Calculator">
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

      <Button onClick={runCalc}>Calculate</Button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <p><strong>Base Gallons:</strong> {result.baseGallons.toFixed(2)}</p>
          <p><strong>Total Gallons (with waste):</strong> {result.totalGallons.toFixed(2)}</p>
        </div>
      )}
    </SectionCard>
  )
}
