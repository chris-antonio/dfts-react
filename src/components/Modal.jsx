/**
 * Modal — DFTS.md §5.16
 * Blocking overlay dialog. Focus-trapped, Esc/backdrop to close, restores focus to trigger.
 */
function Modal({ open, onClose, title, children, footer }) {
  const dialogRef = React.useRef(null);
  const triggerRef = React.useRef(null);

  React.useEffect(() => {
    if (open) {
      triggerRef.current = document.activeElement;
      const node = dialogRef.current;
      const focusable = node && node.querySelector("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
      (focusable || node)?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      triggerRef.current && triggerRef.current.focus && triggerRef.current.focus();
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function handleKeyDown(e) {
    if (e.key === "Escape") { onClose(); return; }
    if (e.key === "Tab") {
      const node = dialogRef.current;
      if (!node) return;
      const focusables = Array.from(node.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"));
      if (focusables.length === 0) return;
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }

  if (!open) return null;

  return (
    <div className="dfts-modal__backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div
        className="dfts-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dfts-modal-title"
        ref={dialogRef}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
      >
        <div className="dfts-modal__header">
          <h2 id="dfts-modal-title" className="dfts-modal__title">{title}</h2>
          <button type="button" className="dfts-modal__close" aria-label="Close dialog" onClick={onClose}>
            <Icon name="close" size={20} />
          </button>
        </div>
        <div className="dfts-modal__content">{children}</div>
        {footer && <div className="dfts-modal__footer">{footer}</div>}
      </div>
    </div>
  );
}
