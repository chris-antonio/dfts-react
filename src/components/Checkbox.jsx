/**
 * Checkbox — DFTS.md §5.3 (Figma: 💠 checkbox)
 * Label, checked, error + errorMessage and disabled states. size: sm|md|lg.
 */
function Checkbox({ id, label, checked, onChange, error, errorMessage, disabled, size = "md" }) {
  const describedBy = error && errorMessage ? `${id}-error` : undefined;
  return (
    <span className="dfts-form-control">
      <span className={`dfts-form-control__box dfts-form-control--${size} ${checked ? "dfts-form-control__box--checked" : ""} ${error ? "dfts-form-control__box--error" : ""}`}>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={describedBy}
          className="dfts-form-control__input"
        />
        {checked && <Icon name="check" size={14} className="dfts-form-control__check" />}
      </span>
      {label && <label htmlFor={id} className="dfts-form-control__label">{label}</label>}
      {error && errorMessage && <span id={describedBy} className="dfts-form-control__error">{errorMessage}</span>}
    </span>
  );
}
