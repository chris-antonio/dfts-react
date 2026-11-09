/**
 * PhoneField (Figma: 💠 phone-field)
 * A country-code Select composed with a text input. size: sm|md|lg.
 * value: { code, number }. countries: [{ value: "+33", label: "🇫🇷  +33" }].
 */
const DFTS_DEFAULT_COUNTRIES = [
  { value: "+33", label: "🇫🇷  +33" },
  { value: "+44", label: "🇬🇧  +44" },
  { value: "+49", label: "🇩🇪  +49" },
  { value: "+34", label: "🇪🇸  +34" },
  { value: "+39", label: "🇮🇹  +39" },
  { value: "+1", label: "🇺🇸  +1" },
];

function PhoneField({
  id, label = "Phone number", value = { code: "+33", number: "" }, onChange,
  countries = DFTS_DEFAULT_COUNTRIES, placeholder = "06 12 34 56 78",
  size = "md", error, helperText, disabled = false,
}) {
  const describedBy = error || helperText ? `${id}-help` : undefined;
  return (
    <div className={`dfts-input-field dfts-phone-field dfts-phone-field--${size}`}>
      <span className="dfts-input-field__label dfts-phone-field__label" id={`${id}-label`}>{label}</span>
      <div className="dfts-phone-field__row" role="group" aria-labelledby={`${id}-label`}>
        <Select
          id={`${id}-code`}
          options={countries}
          value={value.code}
          onChange={(code) => onChange({ ...value, code })}
          size={size}
          error={!!error}
          disabled={disabled}
          className="dfts-phone-field__code"
        />
        <div className={`dfts-input-field__control-wrap dfts-input-field--${size} ${error ? "dfts-input-field--error" : ""} ${disabled ? "dfts-input-field--disabled" : ""} dfts-phone-field__number`}>
          <input
            id={id}
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            value={value.number}
            onChange={(e) => onChange({ ...value, number: e.target.value })}
            placeholder={placeholder}
            disabled={disabled}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={describedBy}
            className="dfts-input-field__control"
          />
        </div>
      </div>
      {(error || helperText) && (
        <span id={describedBy} className={error ? "dfts-input-field__helper--error" : "dfts-input-field__helper"}>
          {error || helperText}
        </span>
      )}
    </div>
  );
}
