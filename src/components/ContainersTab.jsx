import { useState } from 'react'
import productIndex from '../data/productIndex'
import { calculateCoverage } from '../utils/coverage'
import { containerMath } from '../utils/containerMath'
import SectionCard from './SectionCard'
import Button from './Button'

export default function ContainersTab() {
  const [product, setProduct] = useState(productIndex[0])
  const [sqFt, setSqFt] = useState(1000)
  const [coats, setCoats] = useState(1)
  const [result, setResult] = useState(null)

  function runCalc() {
    const coverage = calculateCoverage(product, sqFt, coats)
    const containers = containerMath(coverage.totalGallons)
    setResult({ coverage, containers })
  }

  return (
    <SectionCard title="Container Calculator">
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
          <p><strong>Total Gallons:</strong> {result.coverage.totalGallons.toFixed(2)}</p>
          <p><strong>5‑Gallon Pails:</strong> {result.containers.fiveGal}</p>
          <p><strong>1‑Gallon Cans:</strong> {result.containers.oneGal}</p>
        </div>
      )}
    </SectionCard>
  )
}
