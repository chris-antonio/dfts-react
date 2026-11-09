/**
 * RadioButton — DFTS.md §5.3 (Figma: 💠 radio-button)
 * Single-choice option; group radios with a shared `name`. size: sm|md|lg.
 */
function RadioButton({ id, name, label, checked, onChange, disabled, size = "md" }) {
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
