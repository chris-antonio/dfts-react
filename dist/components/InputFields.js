/**
 * Input-Fields — DFTS.md §5.4
 * Single-line text entry. size: sm|md|lg.
 */
function TextField({
  id,
  label,
  value,
  onChange,
  placeholder,
  error,
  helperText,
  size = "md",
  disabled = false,
  type = "text",
  leadingIcon,
  ...props
}) {
  const describedBy = error || helperText ? `${id}-help` : undefined;
  return /*#__PURE__*/React.createElement("div", {
    className: "dfts-input-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: "dfts-input-field__label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: `dfts-input-field__control-wrap dfts-input-field--${size} ${error ? "dfts-input-field--error" : ""} ${disabled ? "dfts-input-field--disabled" : ""}`
  }, leadingIcon && /*#__PURE__*/React.createElement(Icon, {
    name: leadingIcon,
    size: 16,
    className: "dfts-input-field__icon"
  }), /*#__PURE__*/React.createElement("input", {
    id: id,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    "aria-invalid": error ? "true" : undefined,
    "aria-describedby": describedBy,
    className: "dfts-input-field__control",
    ...props
  })), (error || helperText) && /*#__PURE__*/React.createElement("span", {
    id: describedBy,
    className: error ? "dfts-input-field__helper--error" : "dfts-input-field__helper"
  }, error || helperText));
}

/**
 * Input-Fields — TextArea (Figma: 💠 text-area)
 * Multi-line text entry. Same anatomy as TextField: label → box → helper/error text.
 */
function TextArea({
  id,
  label,
  value,
  onChange,
  placeholder,
  error,
  helperText,
  size = "md",
  disabled = false,
  rows = 1,
  ...props
}) {
  const describedBy = error || helperText ? `${id}-help` : undefined;
  return /*#__PURE__*/React.createElement("div", {
    className: "dfts-input-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: "dfts-input-field__label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: `dfts-input-field__control-wrap dfts-input-field__control-wrap--multiline dfts-input-field--${size} ${error ? "dfts-input-field--error" : ""} ${disabled ? "dfts-input-field--disabled" : ""}`
  }, /*#__PURE__*/React.createElement("textarea", {
    id: id,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    rows: rows,
    "aria-invalid": error ? "true" : undefined,
    "aria-describedby": describedBy,
    className: "dfts-input-field__control dfts-input-field__control--textarea",
    ...props
  })), (error || helperText) && /*#__PURE__*/React.createElement("span", {
    id: describedBy,
    className: error ? "dfts-input-field__helper--error" : "dfts-input-field__helper"
  }, error || helperText));
}

/**
 * Input-Fields — Select (Figma: 💠 select)
 * Custom listbox. mode: single (value is a string) | multiple (value is an array).
 * options: [{ value, label }] — plain strings are also accepted.
 * size: sm|md|lg. Keyboard: Enter/Space/ArrowDown open, Arrow keys move, Enter selects, Esc closes.
 */
function Select({
  id,
  label,
  options = [],
  value,
  onChange,
  placeholder = "Select option...",
  multiple = false,
  size = "md",
  error,
  helperText,
  disabled = false,
  className = ""
}) {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const wrapRef = React.useRef(null);
  const items = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  const selected = multiple ? Array.isArray(value) ? value : [] : value == null || value === "" ? [] : [value];
  const isSelected = v => selected.includes(v);
  const describedBy = error || helperText ? `${id}-help` : undefined;
  const listId = `${id}-listbox`;
  React.useEffect(() => {
    if (!open) return;
    const onDocClick = e => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);
  const choose = item => {
    if (multiple) {
      onChange(isSelected(item.value) ? selected.filter(v => v !== item.value) : [...selected, item.value]);
    } else {
      onChange(item.value);
      setOpen(false);
    }
  };
  const onKeyDown = e => {
    if (disabled) return;
    if (!open && ["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key)) {
      e.preventDefault();
      setOpen(true);
      return;
    }
    if (!open) return;
    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive(i => Math.min(i + 1, items.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive(i => Math.max(i - 1, 0));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (items[active]) choose(items[active]);
    }
  };
  const labels = selected.map(v => (items.find(i => i.value === v) || {
    label: v
  }).label);
  const display = labels.length === 0 ? null : multiple && labels.length > 2 ? `${labels.length} selected` : labels.join(", ");
  const iconSize = size === "sm" ? 16 : size === "lg" ? 24 : 20;
  return /*#__PURE__*/React.createElement("div", {
    className: `dfts-input-field dfts-select ${className}`,
    ref: wrapRef
  }, label && /*#__PURE__*/React.createElement("label", {
    id: `${id}-label`,
    htmlFor: id,
    className: "dfts-input-field__label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "dfts-select__anchor"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    id: id,
    disabled: disabled,
    role: "combobox",
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    "aria-controls": listId,
    "aria-invalid": error ? "true" : undefined,
    "aria-describedby": describedBy,
    onClick: () => {
      setOpen(o => !o);
      setActive(Math.max(0, items.findIndex(i => isSelected(i.value))));
    },
    onKeyDown: onKeyDown,
    className: `dfts-select__trigger dfts-select--${size} ${error ? "dfts-select--error" : ""} ${open ? "dfts-select--open" : ""}`
  }, /*#__PURE__*/React.createElement("span", {
    className: `dfts-select__value ${display ? "" : "dfts-select__value--placeholder"}`
  }, display || placeholder), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_drop_down",
    size: iconSize,
    className: "dfts-select__chevron"
  })), open && /*#__PURE__*/React.createElement("ul", {
    id: listId,
    role: "listbox",
    "aria-multiselectable": multiple || undefined,
    "aria-labelledby": label ? `${id}-label` : undefined,
    className: "dfts-select__list"
  }, items.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: item.value,
    role: "option",
    "aria-selected": isSelected(item.value),
    onMouseEnter: () => setActive(i),
    onMouseDown: e => e.preventDefault(),
    onClick: () => choose(item),
    className: `dfts-select__option ${i === active ? "dfts-select__option--active" : ""} ${isSelected(item.value) ? "dfts-select__option--selected" : ""}`
  }, /*#__PURE__*/React.createElement("span", null, item.label), isSelected(item.value) && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16
  }))))), (error || helperText) && /*#__PURE__*/React.createElement("span", {
    id: describedBy,
    className: error ? "dfts-input-field__helper--error" : "dfts-input-field__helper"
  }, error || helperText));
}

/**
 * Input-Fields — PhoneField (Figma: 💠 phone-field)
 * A country-code Select composed with a text input. size: sm|md|lg.
 * value: { code, number }. countries: [{ value: "+33", label: "🇫🇷  +33" }].
 */
const DFTS_DEFAULT_COUNTRIES = [{
  value: "+33",
  label: "🇫🇷  +33"
}, {
  value: "+44",
  label: "🇬🇧  +44"
}, {
  value: "+49",
  label: "🇩🇪  +49"
}, {
  value: "+34",
  label: "🇪🇸  +34"
}, {
  value: "+39",
  label: "🇮🇹  +39"
}, {
  value: "+1",
  label: "🇺🇸  +1"
}];
function PhoneField({
  id,
  label = "Phone number",
  value = {
    code: "+33",
    number: ""
  },
  onChange,
  countries = DFTS_DEFAULT_COUNTRIES,
  placeholder = "06 12 34 56 78",
  size = "md",
  error,
  helperText,
  disabled = false
}) {
  const describedBy = error || helperText ? `${id}-help` : undefined;
  return /*#__PURE__*/React.createElement("div", {
    className: `dfts-input-field dfts-phone-field dfts-phone-field--${size}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "dfts-input-field__label dfts-phone-field__label",
    id: `${id}-label`
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "dfts-phone-field__row",
    role: "group",
    "aria-labelledby": `${id}-label`
  }, /*#__PURE__*/React.createElement(Select, {
    id: `${id}-code`,
    options: countries,
    value: value.code,
    onChange: code => onChange({
      ...value,
      code
    }),
    size: size,
    error: !!error,
    disabled: disabled,
    className: "dfts-phone-field__code"
  }), /*#__PURE__*/React.createElement("div", {
    className: `dfts-input-field__control-wrap dfts-input-field--${size} ${error ? "dfts-input-field--error" : ""} ${disabled ? "dfts-input-field--disabled" : ""} dfts-phone-field__number`
  }, /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "tel",
    inputMode: "tel",
    autoComplete: "tel-national",
    value: value.number,
    onChange: e => onChange({
      ...value,
      number: e.target.value
    }),
    placeholder: placeholder,
    disabled: disabled,
    "aria-invalid": error ? "true" : undefined,
    "aria-describedby": describedBy,
    className: "dfts-input-field__control"
  }))), (error || helperText) && /*#__PURE__*/React.createElement("span", {
    id: describedBy,
    className: error ? "dfts-input-field__helper--error" : "dfts-input-field__helper"
  }, error || helperText));
}
