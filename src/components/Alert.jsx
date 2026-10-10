/**
 * Alert — DFTS.md §5.5
 * Persistent inline contextual message. variant: info|success|warning|error.
 */
const ALERT_ICONS = { info: "info", success: "check_circle", warning: "warning", error: "error" };

function Alert({ variant = "info", title, children, dismissible = false, onDismiss, className = "" }) {
  const role = variant === "error" || variant === "warning" ? "alert" : "status";
  return (
    <div className={`dfts-alert dfts-alert--${variant} ${className}`} role={role}>
      <Icon name={ALERT_ICONS[variant]} size={20} className="dfts-alert__icon" />
      <div className="dfts-alert__body">
        {title && <p className="dfts-alert__title">{title}</p>}
        <p className="dfts-alert__content">{children}</p>
      </div>
      {dismissible && (
        <button type="button" className="dfts-alert__dismiss" aria-label="Dismiss alert" onClick={onDismiss}>
          <Icon name="close" size={16} />
        </button>
      )}
    </div>
  );
}
