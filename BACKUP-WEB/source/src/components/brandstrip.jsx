const codes = ['T889', 'C268', 'C369', 'C368', 'A889', 'B889', 'SIÊU ÂM']

export default function BrandStrip() {
  const items = [...codes, ...codes]
  return (
    <div className="brand-strip" aria-hidden="true">
      <div className="track">
        {items.map((c, i) => (
          <span className="code-item" key={`${c}-${i}`}>
            {c}
            <span className="dot" />
          </span>
        ))}
      </div>
    </div>
  )
}
