/**
 * Filter — DFTS.md §5.20 (Figma: 💠 filter)
 * Toggle pill with optional leading icon; `active` sets aria-pressed.
 */
function Filter({ label, icon, active, onToggle, disabled }) {
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
