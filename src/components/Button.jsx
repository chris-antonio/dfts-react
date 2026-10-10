/**
 * Button — DFTS.md §5.1
 * Primary call-to-action element. variant: primary|secondary|ghost|destructive. size: sm|md|lg.
 * Wrapped in forwardRef so it can be used as a trigger for Menu, which needs the
 * underlying DOM node for positioning and outside-click detection. Declared with `var`
 * (not `const`) so the binding attaches to the global object like every other
 * component in this kit — keeps all components equally accessible as classic,
 * dependency-order-independent globals across script tags.
 */
function ButtonImpl({
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  leadingIcon,
  trailingIcon,
  children,
  className = "",
  ...props
}, ref) {
  return (
    <button
      ref={ref}
      className={`dfts-button dfts-button--${variant} dfts-button--${size} ${className}`}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? (
        <Loader size="sm" className="dfts-button__loader" />
      ) : (
        leadingIcon && <Icon name={leadingIcon} size={16} />
      )}
      {children && <span>{children}</span>}
      {!loading && trailingIcon && <Icon name={trailingIcon} size={16} />}
    </button>
  );
}
var Button = React.forwardRef(ButtonImpl);
