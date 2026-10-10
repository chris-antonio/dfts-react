/**
 * Toast — DFTS.md §5.6
 * Transient, non-blocking, auto-dismissing notification. Rendered by ToastProvider/useToasts in demo.jsx.
 */
const TOAST_ICONS = { default: null, info: "info", success: "check_circle", warning: "warning", error: "error" };

function Toast({ variant = "default", children, onDismiss }) {
  const isUrgent = variant === "error";
  return (
    <div
      className={`dfts-toast dfts-toast--${variant}`}
      role="status"
      aria-live={isUrgent ? "assertive" : "polite"}
    >
      {TOAST_ICONS[variant] && <Icon name={TOAST_ICONS[variant]} size={18} />}
      <span className="dfts-toast__content">{children}</span>
      <button type="button" className="dfts-toast__dismiss" aria-label="Dismiss notification" onClick={onDismiss}>
        <Icon name="close" size={16} />
      </button>
    </div>
  );
}

function ToastStack({ toasts, onDismiss }) {
  return (
    <div className="dfts-toast-stack" aria-live="polite">
      {toasts.map((t) => (
        <Toast key={t.id} variant={t.variant} onDismiss={() => onDismiss(t.id)}>{t.message}</Toast>
      ))}
    </div>
  );
}
