/**
 * Link — DFTS.md §5.10
 * Inline/standalone navigational text. size: sm|md|lg (icon gap only).
 */
function Link({
  href = "#",
  size = "md",
  error = false,
  disabled = false,
  leadingIcon,
  trailingIcon,
  children,
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: disabled ? undefined : href,
    "aria-disabled": disabled ? "true" : undefined,
    tabIndex: disabled ? -1 : undefined,
    className: `dfts-link dfts-link--${size} ${error ? "dfts-link--error" : ""} ${disabled ? "dfts-link--disabled" : ""} ${className}`,
    ...props
  }, leadingIcon && /*#__PURE__*/React.createElement(Icon, {
    name: leadingIcon,
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, children), trailingIcon && /*#__PURE__*/React.createElement(Icon, {
    name: trailingIcon,
    size: 14
  }));
}