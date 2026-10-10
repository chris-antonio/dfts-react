/**
 * Tile — DFTS.md §5.13
 * Compact clickable surface for navigation choices.
 */
function Tile({ icon, title, description, onClick, disabled = false, href, className = "" }) {
  const Tag = href ? "a" : "button";
  return (
    <Tag
      className={`dfts-tile ${className}`}
      href={href}
      type={href ? undefined : "button"}
      onClick={onClick}
      disabled={href ? undefined : disabled}
      aria-disabled={href && disabled ? "true" : undefined}
    >
      {icon && <Icon name={icon} size={24} className="dfts-tile__icon" />}
      <span className="dfts-tile__title">{title}</span>
      {description && <span className="dfts-tile__description">{description}</span>}
    </Tag>
  );
}
