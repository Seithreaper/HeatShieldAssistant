import { useState } from 'react'
import productIndex from '../data/productIndex'
import SectionCard from './SectionCard'

export default function ProductsTab() {
  const [selected, setSelected] = useState(productIndex[0])

  return (
    <SectionCard title="Product Selector">
      <select
        value={selected.number}
        onChange={(e) => {
          const p = productIndex.find(x => x.number === e.target.value)
          setSelected(p)
        }}
      >
        {productIndex.map((p) => (
          <option key={p.number} value={p.number}>
            {p.number} — {p.code} — {p.name}
          </option>
        ))}
      </select>

      <p><strong>Coverage:</strong> {selected.coverageSqFtPerGallon} sq ft/gal</p>
      <p><strong>Containers:</strong> {selected.containers.join(" gal, ")} gal</p>
    </SectionCard>
  )
}
