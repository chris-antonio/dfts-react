/**
 * Chip — DFTS.md §5.2
 * variant: filled|outlined (+ error). size: sm|md|lg. Optionally dismissible or toggleable.
 */
function Chip({
  variant = "filled",
  size = "md",
  error = false,
  disabled = false,
  removable = false,
  onRemove,
  selected,
  onToggle,
  leadingIcon,
  children,
  className = "",
  ...props
}) {
  const stateClass = error ? "dfts-chip--error" : `dfts-chip--${variant}`;
  const interactive = typeof onToggle === "function";
  const Tag = interactive ? "button" : "span";
  return /*#__PURE__*/React.createElement(Tag, {
    className: `dfts-chip ${stateClass} dfts-chip--${size} ${selected ? "dfts-chip--selected" : ""} ${className}`,
    disabled: interactive ? disabled : undefined,
    "aria-pressed": interactive ? !!selected : undefined,
    onClick: interactive ? onToggle : undefined,
    ...props
  }, leadingIcon && /*#__PURE__*/React.createElement(Icon, {
    name: leadingIcon,
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, children), removable && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "dfts-chip__dismiss",
    "aria-label": `Remove ${children}`,
    disabled: disabled,
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove(e);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 14
  })));
}