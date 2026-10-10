/**
 * Breadcrumbs — DFTS.md §5.19
 * Hierarchical location trail. items: [{label, href}] — last item renders as current page.
 */
function Breadcrumbs({
  items
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    className: "dfts-breadcrumbs"
  }, /*#__PURE__*/React.createElement("ol", {
    className: "dfts-breadcrumbs__list"
  }, items.map((item, i) => {
    const isLast = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      className: "dfts-breadcrumbs__item"
    }, isLast ? /*#__PURE__*/React.createElement("span", {
      "aria-current": "page",
      className: "dfts-breadcrumbs__current"
    }, item.label) : /*#__PURE__*/React.createElement("a", {
      href: item.href || "#",
      className: "dfts-breadcrumbs__link"
    }, item.label), !isLast && /*#__PURE__*/React.createElement(Icon, {
      name: "chevron_right",
      size: 14,
      className: "dfts-breadcrumbs__separator"
    }));
  })));
}