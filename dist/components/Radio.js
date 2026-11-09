/**
 * Radio — DFTS.md §5.3 (Figma: 💠 radio-button)
 * Single-choice option; group radios with a shared `name`. size: sm|md|lg.
 */
function Radio({
  id,
  name,
  label,
  checked,
  onChange,
  disabled,
  size = "md"
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "dfts-form-control"
  }, /*#__PURE__*/React.createElement("span", {
    className: `dfts-form-control__radio dfts-form-control--${size} ${checked ? "dfts-form-control__radio--checked" : ""}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    id: id,
    name: name,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    className: "dfts-form-control__input"
  })), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: "dfts-form-control__label"
  }, label));
}
