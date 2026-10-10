/**
 * Loader — DFTS.md §5.8
 * Indeterminate loading indicator. size: sm|md|lg.
 */
function Loader({ size = "md", label = "Loading", className = "" }) {
  return (
    <span className={`dfts-loader dfts-loader--${size} ${className}`} role="status" aria-label={label}>
      <span className="dfts-loader__spin" />
    </span>
  );
}
