/**
 * Link — DFTS.md §5.10
 * Inline/standalone navigational text. size: sm|md|lg (icon gap only).
 */
function Link({ href = "#", size = "md", error = false, disabled = false, leadingIcon, trailingIcon, children, className = "", ...props }) {
  return (
    <a
      href={disabled ? undefined : href}
      aria-disabled={disabled ? "true" : undefined}
      tabIndex={disabled ? -1 : undefined}
      className={`dfts-link dfts-link--${size} ${error ? "dfts-link--error" : ""} ${disabled ? "dfts-link--disabled" : ""} ${className}`}
      {...props}
    >
      {leadingIcon && <Icon name={leadingIcon} size={14} />}
      <span>{children}</span>
      {trailingIcon && <Icon name={trailingIcon} size={14} />}
    </a>
  );
}
