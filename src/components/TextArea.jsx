/**
 * TextArea (Figma: 💠 text-area)
 * Multi-line text entry. Same anatomy as TextField: label → box → helper/error text.
 */
function TextArea({
  id, label, value, onChange, placeholder, error, helperText,
  size = "md", disabled = false, rows = 1, ...props
}) {
  const describedBy = error || helperText ? `${id}-help` : undefined;
  return (
    <div className="dfts-input-field">
      {label && <label htmlFor={id} className="dfts-input-field__label">{label}</label>}
      <div className={`dfts-input-field__control-wrap dfts-input-field__control-wrap--multiline dfts-input-field--${size} ${error ? "dfts-input-field--error" : ""} ${disabled ? "dfts-input-field--disabled" : ""}`}>
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={describedBy}
          className="dfts-input-field__control dfts-input-field__control--textarea"
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
