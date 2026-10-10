/**
 * Tabs — DFTS.md §5.17
 * Switch between sibling views. items: [{id, label, content, disabled}]
 */
function Tabs({
  items,
  defaultActiveId
}) {
  const [active, setActive] = React.useState(defaultActiveId || items[0]?.id);
  const tabRefs = React.useRef({});
  function onKeyDown(e, idx) {
    const enabled = items.filter(i => !i.disabled);
    const currentPos = enabled.findIndex(i => i.id === items[idx].id);
    let nextItem;
    if (e.key === "ArrowRight") nextItem = enabled[(currentPos + 1) % enabled.length];else if (e.key === "ArrowLeft") nextItem = enabled[(currentPos - 1 + enabled.length) % enabled.length];else if (e.key === "Home") nextItem = enabled[0];else if (e.key === "End") nextItem = enabled[enabled.length - 1];
    if (nextItem) {
      e.preventDefault();
      setActive(nextItem.id);
      tabRefs.current[nextItem.id]?.focus();
    }
  }
  const activeItem = items.find(i => i.id === active);
  return /*#__PURE__*/React.createElement("div", {
    className: "dfts-tabs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dfts-tabs__list",
    role: "tablist"
  }, items.map((item, idx) => /*#__PURE__*/React.createElement("button", {
    key: item.id,
    ref: el => tabRefs.current[item.id] = el,
    role: "tab",
    id: `tab-${item.id}`,
    "aria-selected": active === item.id,
    "aria-controls": `tabpanel-${item.id}`,
    tabIndex: active === item.id ? 0 : -1,
    disabled: item.disabled,
    className: `dfts-tabs__tab ${active === item.id ? "dfts-tabs__tab--active" : ""}`,
    onClick: () => setActive(item.id),
    onKeyDown: e => onKeyDown(e, idx)
  }, item.label))), items.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.id,
    role: "tabpanel",
    id: `tabpanel-${item.id}`,
    "aria-labelledby": `tab-${item.id}`,
    hidden: active !== item.id,
    className: "dfts-tabs__panel"
  }, item.content)));
}