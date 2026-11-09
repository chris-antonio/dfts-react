/**
 * Select (Figma: 💠 select)
 * Custom listbox. mode: single (value is a string) | multiple (value is an array).
 * options: [{ value, label }] — plain strings are also accepted.
 * size: sm|md|lg. Keyboard: Enter/Space/ArrowDown open, Arrow keys move, Enter selects, Esc closes.
 */
function Select({
  id, label, options = [], value, onChange, placeholder = "Select option...",
  multiple = false, size = "md", error, helperText, disabled = false, className = "",
}) {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const wrapRef = React.useRef(null);
  const items = options.map((o) => (typeof o === "string" ? { value: o, label: o } : o));
  const selected = multiple ? (Array.isArray(value) ? value : []) : (value == null || value === "" ? [] : [value]);
  const isSelected = (v) => selected.includes(v);
  const describedBy = error || helperText ? `${id}-help` : undefined;
  const listId = `${id}-listbox`;

  React.useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => { if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  const choose = (item) => {
    if (multiple) {
      onChange(isSelected(item.value) ? selected.filter((v) => v !== item.value) : [...selected, item.value]);
    } else {
      onChange(item.value);
      setOpen(false);
    }
  };

  const onKeyDown = (e) => {
    if (disabled) return;
    if (!open && ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key)) {
      e.preventDefault(); setOpen(true); return;
    }
    if (!open) return;
    if (e.key === "Escape") { e.preventDefault(); setOpen(false); }
    else if (e.key === "ArrowDown") { e.preventDefault(); setActive((i) => Math.min(i + 1, items.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((i) => Math.max(i - 1, 0)); }
    else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); if (items[active]) choose(items[active]); }
  };

  const labels = selected.map((v) => (items.find((i) => i.value === v) || { label: v }).label);
  const display = labels.length === 0 ? null : multiple && labels.length > 2 ? `${labels.length} selected` : labels.join(", ");
  const iconSize = size === "sm" ? 16 : size === "lg" ? 24 : 20;

  return (
    <div className={`dfts-input-field dfts-select ${className}`} ref={wrapRef}>
      {label && <label id={`${id}-label`} htmlFor={id} className="dfts-input-field__label">{label}</label>}
      <div className="dfts-select__anchor">
        <button
          type="button"
          id={id}
          disabled={disabled}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={describedBy}
          onClick={() => { setOpen((o) => !o); setActive(Math.max(0, items.findIndex((i) => isSelected(i.value)))); }}
          onKeyDown={onKeyDown}
          className={`dfts-select__trigger dfts-select--${size} ${error ? "dfts-select--error" : ""} ${open ? "dfts-select--open" : ""}`}
        >
          <span className={`dfts-select__value ${display ? "" : "dfts-select__value--placeholder"}`}>{display || placeholder}</span>
          <Icon name="arrow_drop_down" size={iconSize} className="dfts-select__chevron" />
        </button>
        {open && (
          <ul id={listId} role="listbox" aria-multiselectable={multiple || undefined} aria-labelledby={label ? `${id}-label` : undefined} className="dfts-select__list">
            {items.map((item, i) => (
              <li
                key={item.value}
                role="option"
                aria-selected={isSelected(item.value)}
                onMouseEnter={() => setActive(i)}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => choose(item)}
                className={`dfts-select__option ${i === active ? "dfts-select__option--active" : ""} ${isSelected(item.value) ? "dfts-select__option--selected" : ""}`}
              >
                <span>{item.label}</span>
                {isSelected(item.value) && <Icon name="check" size={16} />}
              </li>
            ))}
          </ul>
        )}
      </div>
      {(error || helperText) && (
        <span id={describedBy} className={error ? "dfts-input-field__helper--error" : "dfts-input-field__helper"}>
          {error || helperText}
        </span>
      )}
    </div>
  );
}
