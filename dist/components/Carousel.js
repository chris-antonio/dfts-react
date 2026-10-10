/**
 * Carousel — DFTS.md §5.24
 * Horizontally paged content. slides: [{id, content}]
 */
function Carousel({
  slides,
  label = "Carousel"
}) {
  const [index, setIndex] = React.useState(0);
  const count = slides.length;
  function go(delta) {
    setIndex(i => (i + delta + count) % count);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "dfts-carousel",
    role: "region",
    "aria-roledescription": "carousel",
    "aria-label": label
  }, /*#__PURE__*/React.createElement("div", {
    className: "dfts-carousel__viewport"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dfts-carousel__track",
    style: {
      transform: `translateX(-${index * 100}%)`
    }
  }, slides.map((slide, i) => /*#__PURE__*/React.createElement("div", {
    key: slide.id,
    className: "dfts-carousel__slide",
    role: "group",
    "aria-roledescription": "slide",
    "aria-label": `${i + 1} of ${count}`,
    "aria-hidden": i !== index
  }, slide.content)))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "dfts-carousel__nav dfts-carousel__nav--prev",
    "aria-label": "Previous slide",
    onClick: () => go(-1)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_left",
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "dfts-carousel__nav dfts-carousel__nav--next",
    "aria-label": "Next slide",
    onClick: () => go(1)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_right",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    className: "dfts-carousel__dots"
  }, slides.map((slide, i) => /*#__PURE__*/React.createElement("button", {
    key: slide.id,
    type: "button",
    className: `dfts-carousel__dot ${i === index ? "dfts-carousel__dot--active" : ""}`,
    "aria-label": `Go to slide ${i + 1}`,
    "aria-current": i === index,
    onClick: () => setIndex(i)
  }))));
}