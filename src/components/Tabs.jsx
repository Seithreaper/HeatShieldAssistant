export default function Tabs({ active, onChange }) {
  return (
    <div className="tab-bar">
      <div
        className={`tab ${active === "products" ? "active" : ""}`}
        onClick={() => onChange("products")}
      >
        Products
      </div>

      <div
        className={`tab ${active === "coverage" ? "active" : ""}`}
        onClick={() => onChange("coverage")}
      >
        Coverage
      </div>

      <div
        className={`tab ${active === "containers" ? "active" : ""}`}
        onClick={() => onChange("containers")}
      >
        Containers
      </div>

      <div
        className={`tab ${active === "order" ? "active" : ""}`}
        onClick={() => onChange("order")}
      >
        Order Sheet
      </div>
    </div>
  )
}
