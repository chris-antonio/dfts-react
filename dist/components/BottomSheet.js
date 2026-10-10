/**
 * Bottom-Sheet — DFTS.md §5.23
 * Mobile-first overlay panel sliding from the bottom edge. Same dialog semantics as Modal.
 */
function BottomSheet({
  open,
  onClose,
  title,
  children
}) {
  const sheetRef = React.useRef(null);
  const triggerRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      triggerRef.current = document.activeElement;
      sheetRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      triggerRef.current && triggerRef.current.focus && triggerRef.current.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  function handleKeyDown(e) {
    if (e.key === "Escape") onClose();
  }
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "dfts-bottom-sheet__backdrop",
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dfts-bottom-sheet",
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "dfts-sheet-title",
    ref: sheetRef,
    tabIndex: -1,
    onKeyDown: handleKeyDown
  }, /*#__PURE__*/React.createElement("div", {
    className: "dfts-bottom-sheet__handle"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dfts-bottom-sheet__header"
  }, /*#__PURE__*/React.createElement("h2", {
    id: "dfts-sheet-title",
    className: "dfts-bottom-sheet__title"
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "dfts-bottom-sheet__close",
    "aria-label": "Close sheet",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dfts-bottom-sheet__content"
  }, children)));
}