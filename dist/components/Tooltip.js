/**
 * Tooltip — DFTS.md §5.7
 * Short supplementary text on hover/focus of a trigger. placement: top|bottom.
 */
function Tooltip({
  label,
  children,
  placement = "top"
}) {
  const [visible, setVisible] = React.useState(false);
  const id = React.useId();
  const child = React.cloneElement(children, {
    "aria-describedby": id,
    onMouseEnter: e => {
      setVisible(true);
      children.props.onMouseEnter && children.props.onMouseEnter(e);
    },
    onMouseLeave: e => {
      setVisible(false);
      children.props.onMouseLeave && children.props.onMouseLeave(e);
    },
    onFocus: e => {
      setVisible(true);
      children.props.onFocus && children.props.onFocus(e);
    },
    onBlur: e => {
      setVisible(false);
      children.props.onBlur && children.props.onBlur(e);
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    className: "dfts-tooltip-wrap",
    onKeyDown: e => {
      if (e.key === "Escape") setVisible(false);
    }
  }, child, visible && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    id: id,
    className: `dfts-tooltip dfts-tooltip--${placement}`
  }, label));
}