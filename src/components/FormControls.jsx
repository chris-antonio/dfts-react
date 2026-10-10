/**
 * Form-Controls — DFTS.md §5.3
 * Checkbox, Radio, and Switch. size: sm|md|lg.
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

function Radio({ id, name, label, checked, onChange, disabled, size = "md" }) {
  return (
    <span className="dfts-form-control">
      <span className={`dfts-form-control__radio dfts-form-control--${size} ${checked ? "dfts-form-control__radio--checked" : ""}`}>
        <input
          type="radio"
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="dfts-form-control__input"
        />
      </span>
      {label && <label htmlFor={id} className="dfts-form-control__label">{label}</label>}
    </span>
  );
}

function Switch({ id, label, checked, onChange, disabled, size = "md" }) {
  return (
    <span className="dfts-form-control">
      <span className={`dfts-switch dfts-switch--${size} ${checked ? "dfts-switch--on" : ""}`}>
        <input
          type="checkbox"
          role="switch"
          id={id}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="dfts-form-control__input"
        />
        <span className="dfts-switch__thumb" />
      </span>
      {label && <label htmlFor={id} className="dfts-form-control__label">{label}</label>}
    </span>
  );
}
