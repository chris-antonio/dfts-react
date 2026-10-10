/**
 * Input-Fields — DFTS.md §5.4
 * Single-line text entry. size: sm|md|lg.
 */
function TextField({
  id, label, value, onChange, placeholder, error, helperText,
  size = "md", disabled = false, type = "text", leadingIcon, ...props
}) {
  const describedBy = error || helperText ? `${id}-help` : undefined;
  return (
    <div className="dfts-input-field">
      {label && <label htmlFor={id} className="dfts-input-field__label">{label}</label>}
      <div className={`dfts-input-field__control-wrap dfts-input-field--${size} ${error ? "dfts-input-field--error" : ""} ${disabled ? "dfts-input-field--disabled" : ""}`}>
        {leadingIcon && <Icon name={leadingIcon} size={16} className="dfts-input-field__icon" />}
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={describedBy}
          className="dfts-input-field__control"
          {...props}
        />
      </div>
      {(error || helperText) && (
        <span id={describedBy} className={error ? "dfts-input-field__helper--error" : "dfts-input-field__helper"}>
          {error || helperText}
        </span>
      )}
    </div>
  );
}
