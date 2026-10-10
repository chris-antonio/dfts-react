/**
 * Divider — DFTS.md §5.12
 * Visual separation between content groups. orientation: horizontal|vertical.
 */
function Divider({ orientation = "horizontal", className = "" }) {
  return <hr className={`dfts-divider dfts-divider--${orientation} ${className}`} aria-hidden="true" />;
}
