/**
 * Progress-Line — DFTS.md §5.9
 * Determinate linear progress indicator. value: 0-100.
 */
function ProgressLine({
  value = 0,
  label,
  showLabel = false
}) {
  const clamped = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", {
    className: "dfts-progress-line"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dfts-progress-line__track",
    role: "progressbar",
    "aria-valuenow": clamped,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-label": label
  }, /*#__PURE__*/React.createElement("div", {
    className: "dfts-progress-line__fill",
    style: {
      width: `${clamped}%`
    }
  })), showLabel && /*#__PURE__*/React.createElement("span", {
    className: "dfts-progress-line__label"
  }, Math.round(clamped), "%"));
}