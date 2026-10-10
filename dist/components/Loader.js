/**
 * Loader — DFTS.md §5.8
 * Indeterminate loading indicator. size: sm|md|lg.
 */
function Loader({
  size = "md",
  label = "Loading",
  className = ""
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `dfts-loader dfts-loader--${size} ${className}`,
    role: "status",
    "aria-label": label
  }, /*#__PURE__*/React.createElement("span", {
    className: "dfts-loader__spin"
  }));
}