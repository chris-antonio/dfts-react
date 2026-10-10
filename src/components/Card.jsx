/**
 * Card — DFTS.md §5.14
 * General-purpose content container.
 */
function Card({ title, description, interactive = false, children, footer, href, onClick, className = "" }) {
  const Tag = interactive ? (href ? "a" : "button") : "div";
  return (
    <Tag
      className={`dfts-card ${interactive ? "dfts-card--interactive" : ""} ${className}`}
      href={interactive ? href : undefined}
      type={interactive && !href ? "button" : undefined}
      onClick={interactive ? onClick : undefined}
    >
      {title && <h3 className="dfts-card__title">{title}</h3>}
      {description && <p className="dfts-card__description">{description}</p>}
      {children}
      {footer && <div className="dfts-card__footer">{footer}</div>}
    </Tag>
  );
}
