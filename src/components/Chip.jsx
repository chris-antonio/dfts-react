/**
 * Chip — DFTS.md §5.2
 * variant: filled|outlined (+ error). size: sm|md|lg. Optionally dismissible or toggleable.
 */
function Chip({
  variant = "filled",
  size = "md",
  error = false,
  disabled = false,
  removable = false,
  onRemove,
  selected,
  onToggle,
  leadingIcon,
  children,
  className = "",
  ...props
}) {
  const stateClass = error ? "dfts-chip--error" : `dfts-chip--${variant}`;
  const interactive = typeof onToggle === "function";
  const Tag = interactive ? "button" : "span";

  return (
    <Tag
      className={`dfts-chip ${stateClass} dfts-chip--${size} ${selected ? "dfts-chip--selected" : ""} ${className}`}
      disabled={interactive ? disabled : undefined}
      aria-pressed={interactive ? !!selected : undefined}
      onClick={interactive ? onToggle : undefined}
      {...props}
    >
      {leadingIcon && <Icon name={leadingIcon} size={14} />}
      <span>{children}</span>
      {removable && (
        <button
          type="button"
          className="dfts-chip__dismiss"
          aria-label={`Remove ${children}`}
          disabled={disabled}
          onClick={(e) => { e.stopPropagation(); onRemove && onRemove(e); }}
        >
          <Icon name="close" size={14} />
        </button>
      )}
    </Tag>
  );
}
