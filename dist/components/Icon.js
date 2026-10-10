/**
 * Icon — shared helper wrapping a Google Material Symbols glyph.
 * Not one of the 24 DFTS components; used internally by the rest of the kit.
 * Requires the "Material Symbols Outlined" stylesheet to be loaded on the page.
 */
function Icon({
  name,
  size = 20,
  className = "",
  label,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `material-symbols-outlined dfts-icon ${className}`,
    style: {
      fontSize: size,
      width: size,
      height: size
    },
    "aria-hidden": label ? undefined : "true",
    role: label ? "img" : undefined,
    "aria-label": label,
    ...rest
  }, name);
}