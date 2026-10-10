/**
 * Alert — DFTS.md §5.5
 * Persistent inline contextual message. variant: info|success|warning|error.
 */
const ALERT_ICONS = {
  info: "info",
  success: "check_circle",
  warning: "warning",
  error: "error"
};
function Alert({
  variant = "info",
  title,
  children,
  dismissible = false,
  onDismiss,
  className = ""
}) {
  const role = variant === "error" || variant === "warning" ? "alert" : "status";
  return /*#__PURE__*/React.createElement("div", {
    className: `dfts-alert dfts-alert--${variant} ${className}`,
    role: role
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ALERT_ICONS[variant],
    size: 20,
    className: "dfts-alert__icon"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dfts-alert__body"
  }, title && /*#__PURE__*/React.createElement("p", {
    className: "dfts-alert__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "dfts-alert__content"
  }, children)), dismissible && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "dfts-alert__dismiss",
    "aria-label": "Dismiss alert",
    onClick: onDismiss
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 16
  })));
}