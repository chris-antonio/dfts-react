/**
 * Navigation-Controls — DFTS.md §5.20
 * FilterChip (toggle pill) + SegmentedControl (single-select radiogroup).
 */
function FilterChip({ label, icon, active, onToggle, disabled }) {
  return (
    <button
      type="button"
      className={`dfts-filter-chip ${active ? "dfts-filter-chip--active" : ""}`}
      aria-pressed={active}
      disabled={disabled}
      onClick={onToggle}
    >
      {icon && <Icon name={icon} size={14} />}
      {label}
    </button>
  );
}

function SegmentedControl({ segments, value, onChange }) {
  const refs = React.useRef({});
  function onKeyDown(e, idx) {
    let next;
    if (e.key === "ArrowRight") next = segments[(idx + 1) % segments.length];
    else if (e.key === "ArrowLeft") next = segments[(idx - 1 + segments.length) % segments.length];
    if (next) { e.preventDefault(); onChange(next.value); refs.current[next.value]?.focus(); }
  }
  return (
    <div className="dfts-segmented" role="radiogroup">
      {segments.map((seg, idx) => (
        <button
          key={seg.value}
          ref={(el) => (refs.current[seg.value] = el)}
          type="button"
          role="radio"
          aria-checked={value === seg.value}
          tabIndex={value === seg.value ? 0 : -1}
          disabled={seg.disabled}
          className={`dfts-segmented__segment ${value === seg.value ? "dfts-segmented__segment--active" : ""}`}
          onClick={() => onChange(seg.value)}
          onKeyDown={(e) => onKeyDown(e, idx)}
        >
          {seg.label}
        </button>
      ))}
    </div>
  );
}
