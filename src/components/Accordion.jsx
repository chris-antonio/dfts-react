/**
 * Accordion — DFTS.md §5.15
 * Progressive disclosure. Renders a group of AccordionItems.
 */
function Accordion({ items, defaultOpenId, allowMultiple = false }) {
  const [openIds, setOpenIds] = React.useState(() => new Set(defaultOpenId ? [defaultOpenId] : []));

  function toggle(id) {
    setOpenIds((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(id) && !allowMultiple) return new Set();
      if (prev.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }

  return (
    <div className="dfts-accordion">
      {items.map((item, i) => {
        const open = openIds.has(item.id);
        const panelId = `accordion-panel-${item.id}`;
        const headerId = `accordion-header-${item.id}`;
        return (
          <div className="dfts-accordion__item" key={item.id}>
            <h3 className="dfts-accordion__heading">
              <button
                type="button"
                id={headerId}
                className="dfts-accordion__header"
                aria-expanded={open}
                aria-controls={panelId}
                disabled={item.disabled}
                onClick={() => toggle(item.id)}
              >
                <span>{item.title}</span>
                <Icon name="expand_more" size={20} className={`dfts-accordion__chevron ${open ? "dfts-accordion__chevron--open" : ""}`} />
              </button>
            </h3>
            {open && (
              <div id={panelId} role="region" aria-labelledby={headerId} className="dfts-accordion__panel">
                {item.content}
              </div>
            )}
            {i < items.length - 1 && <div className="dfts-accordion__divider" />}
          </div>
        );
      })}
    </div>
  );
}
