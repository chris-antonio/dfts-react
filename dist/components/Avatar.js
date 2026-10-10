/**
 * Avatar — DFTS.md §5.11
 * Represents a user/entity via image, initials, or fallback icon. size: sm|md|lg|xl|xxl.
 */
function Avatar({
  src,
  name,
  size = "md",
  className = ""
}) {
  const initials = name ? name.split(" ").map(p => p[0]).slice(0, 2).join("").toUpperCase() : null;
  return /*#__PURE__*/React.createElement("span", {
    className: `dfts-avatar dfts-avatar--${size} ${className}`,
    "aria-label": name,
    role: name ? "img" : undefined
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || "",
    className: "dfts-avatar__image"
  }) : initials ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, initials) : /*#__PURE__*/React.createElement(Icon, {
    name: "person",
    size: 16,
    label: name
  }));
}