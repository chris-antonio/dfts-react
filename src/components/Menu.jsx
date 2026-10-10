/**
 * Menu — DFTS.md §5.18
 * Floating list of actions from a trigger button. items: [{id,label,icon,danger,disabled,onSelect}]
 */
function Menu({ trigger, items, align = "start" }) {
  const [open, setOpen] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const menuRef = React.useRef(null);
  const triggerRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) return;
    function onDocClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target) && triggerRef.current && !triggerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  React.useEffect(() => {
    if (open) menuRef.current?.querySelectorAll("[role='menuitem']")[activeIdx]?.focus();
  }, [open, activeIdx]);

  function onTriggerKeyDown(e) {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault(); setOpen(true); setActiveIdx(0);
    }
  }

  function onMenuKeyDown(e) {
    const enabled = items.map((it, i) => ({ ...it, i })).filter((it) => !it.disabled);
    const pos = enabled.findIndex((it) => it.i === activeIdx);
    if (e.key === "ArrowDown") { e.preventDefault(); setActiveIdx(enabled[(pos + 1) % enabled.length].i); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActiveIdx(enabled[(pos - 1 + enabled.length) % enabled.length].i); }
    else if (e.key === "Escape") { setOpen(false); triggerRef.current?.focus(); }
    else if (e.key === "Tab") { setOpen(false); }
  }

  return (
    <span className="dfts-menu-wrap">
      {React.cloneElement(trigger, {
        ref: triggerRef,
        "aria-haspopup": "menu",
        "aria-expanded": open,
        onClick: (e) => { setOpen((o) => !o); trigger.props.onClick && trigger.props.onClick(e); },
        onKeyDown: onTriggerKeyDown,
      })}
      {open && (
        <div ref={menuRef} role="menu" className={`dfts-menu dfts-menu--${align}`} onKeyDown={onMenuKeyDown}>
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="menuitem"
              tabIndex={-1}
              disabled={item.disabled}
              className={`dfts-menu__item ${item.danger ? "dfts-menu__item--danger" : ""}`}
              onClick={() => { item.onSelect && item.onSelect(); setOpen(false); triggerRef.current?.focus(); }}
            >
              {item.icon && <Icon name={item.icon} size={16} />}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </span>
  );
}
