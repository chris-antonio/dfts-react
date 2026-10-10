/**
 * Breadcrumbs — DFTS.md §5.19
 * Hierarchical location trail. items: [{label, href}] — last item renders as current page.
 */
function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="dfts-breadcrumbs">
      <ol className="dfts-breadcrumbs__list">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="dfts-breadcrumbs__item">
              {isLast ? (
                <span aria-current="page" className="dfts-breadcrumbs__current">{item.label}</span>
              ) : (
                <a href={item.href || "#"} className="dfts-breadcrumbs__link">{item.label}</a>
              )}
              {!isLast && <Icon name="chevron_right" size={14} className="dfts-breadcrumbs__separator" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
