export default function SectionCard({ title, children }) {
  return (
    <div className="section-card">
      {title && <h2>{title}</h2>}
      {children}
    </div>
  )
}
