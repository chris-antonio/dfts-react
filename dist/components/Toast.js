/**
 * Toast — DFTS.md §5.6
 * Transient, non-blocking, auto-dismissing notification. Rendered by ToastProvider/useToasts in demo.jsx.
 */
const TOAST_ICONS = {
  default: null,
  info: "info",
  success: "check_circle",
  warning: "warning",
  error: "error"
};
function Toast({
  variant = "default",
  children,
  onDismiss
}) {
  const isUrgent = variant === "error";
  return /*#__PURE__*/React.createElement("div", {
    className: `dfts-toast dfts-toast--${variant}`,
    role: "status",
    "aria-live": isUrgent ? "assertive" : "polite"
  }, TOAST_ICONS[variant] && /*#__PURE__*/React.createElement(Icon, {
    name: TOAST_ICONS[variant],
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    className: "dfts-toast__content"
  }, children), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "dfts-toast__dismiss",
    "aria-label": "Dismiss notification",
    onClick: onDismiss
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 16
  })));
}
function ToastStack({
  toasts,
  onDismiss
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dfts-toast-stack",
    "aria-live": "polite"
  }, toasts.map(t => /*#__PURE__*/React.createElement(Toast, {
    key: t.id,
    variant: t.variant,
    onDismiss: () => onDismiss(t.id)
  }, t.message)));
}