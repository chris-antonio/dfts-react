/**
 * Switch — DFTS.md §5.3 (Figma: 💠 switch)
 * On/off toggle with label. size: sm|md|lg.
 */
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
