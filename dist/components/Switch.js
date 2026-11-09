/**
 * Switch — DFTS.md §5.3 (Figma: 💠 switch)
 * On/off toggle with label. size: sm|md|lg.
 */
function Switch({
  id,
  label,
  checked,
  onChange,
  disabled,
  size = "md"
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "dfts-form-control"
  }, /*#__PURE__*/React.createElement("span", {
    className: `dfts-switch dfts-switch--${size} ${checked ? "dfts-switch--on" : ""}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    id: id,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    className: "dfts-form-control__input"
  }), /*#__PURE__*/React.createElement("span", {
    className: "dfts-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: "dfts-form-control__label"
  }, label));
}
