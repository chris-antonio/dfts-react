/**
 * Form-Controls — DFTS.md §5.3
 * Checkbox, Radio, and Switch. size: sm|md|lg.
 */
function Checkbox({
  id,
  label,
  checked,
  onChange,
  error,
  errorMessage,
  disabled,
  size = "md"
}) {
  const describedBy = error && errorMessage ? `${id}-error` : undefined;
  return /*#__PURE__*/React.createElement("span", {
    className: "dfts-form-control"
  }, /*#__PURE__*/React.createElement("span", {
    className: `dfts-form-control__box dfts-form-control--${size} ${checked ? "dfts-form-control__box--checked" : ""} ${error ? "dfts-form-control__box--error" : ""}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    id: id,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    "aria-invalid": error ? "true" : undefined,
    "aria-describedby": describedBy,
    className: "dfts-form-control__input"
  }), checked && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14,
    className: "dfts-form-control__check"
  })), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: "dfts-form-control__label"
  }, label), error && errorMessage && /*#__PURE__*/React.createElement("span", {
    id: describedBy,
    className: "dfts-form-control__error"
  }, errorMessage));
}
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