/**
 * Date-Picker — DFTS.md §5.22
 * Calendar-based date selection.
 */
const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function buildMonthGrid(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  return cells;
}
function isSameDate(a, b) {
  return a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function DatePicker({
  value,
  onChange
}) {
  const today = new Date();
  const [cursor, setCursor] = React.useState(() => value || today);
  const gridRef = React.useRef(null);
  const year = cursor.getFullYear(),
    month = cursor.getMonth();
  const cells = buildMonthGrid(year, month);
  function changeMonth(delta) {
    setCursor(new Date(year, month + delta, 1));
  }
  function onDayKeyDown(e, day) {
    if (!day) return;
    let target = day;
    if (e.key === "ArrowRight") target += 1;else if (e.key === "ArrowLeft") target -= 1;else if (e.key === "ArrowDown") target += 7;else if (e.key === "ArrowUp") target -= 7;else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onChange(new Date(year, month, day));
      return;
    } else return;
    e.preventDefault();
    const newDate = new Date(year, month, target);
    setCursor(newDate);
    requestAnimationFrame(() => {
      gridRef.current?.querySelector(`[data-day="${newDate.getDate()}"]`)?.focus();
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "dfts-date-picker",
    role: "group",
    "aria-label": "Date picker"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dfts-date-picker__header"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Previous month",
    className: "dfts-date-picker__nav",
    onClick: () => changeMonth(-1)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_left",
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    className: "dfts-date-picker__label"
  }, MONTH_NAMES[month], " ", year), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Next month",
    className: "dfts-date-picker__nav",
    onClick: () => changeMonth(1)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_right",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dfts-date-picker__weekdays"
  }, WEEKDAYS.map(w => /*#__PURE__*/React.createElement("span", {
    key: w
  }, w))), /*#__PURE__*/React.createElement("div", {
    className: "dfts-date-picker__grid",
    role: "grid",
    ref: gridRef
  }, cells.map((day, i) => {
    if (!day) return /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "dfts-date-picker__cell dfts-date-picker__cell--empty"
    });
    const date = new Date(year, month, day);
    const selected = isSameDate(date, value);
    const isToday = isSameDate(date, today);
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      "data-day": day,
      role: "gridcell",
      tabIndex: day === cursor.getDate() ? 0 : -1,
      "aria-selected": selected,
      "aria-current": isToday ? "date" : undefined,
      className: `dfts-date-picker__cell ${selected ? "dfts-date-picker__cell--selected" : ""} ${isToday && !selected ? "dfts-date-picker__cell--today" : ""}`,
      onClick: () => onChange(date),
      onKeyDown: e => onDayKeyDown(e, day)
    }, day);
  })));
}