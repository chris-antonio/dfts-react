/**
 * DFTS Component Kit — interactive demo app.
 * Renders every component from src/components with live interactions,
 * plus a light/dark theme switch. Mounted into #root by ReactDOM at the
 * bottom of this file.
 */

const SECTIONS = [{
  id: "buttons",
  label: "Button"
}, {
  id: "chips",
  label: "Chip"
}, {
  id: "form-controls",
  label: "Form Controls"
}, {
  id: "input-fields",
  label: "Input Fields"
}, {
  id: "alert",
  label: "Alert"
}, {
  id: "toast",
  label: "Toast"
}, {
  id: "tooltip",
  label: "Tooltip"
}, {
  id: "loader",
  label: "Loader"
}, {
  id: "progress-line",
  label: "Progress Line"
}, {
  id: "link",
  label: "Link"
}, {
  id: "avatar",
  label: "Avatar"
}, {
  id: "divider",
  label: "Divider"
}, {
  id: "tile",
  label: "Tile"
}, {
  id: "card",
  label: "Card"
}, {
  id: "accordion",
  label: "Accordion"
}, {
  id: "modal",
  label: "Modal"
}, {
  id: "tabs",
  label: "Tabs"
}, {
  id: "menu",
  label: "Menu"
}, {
  id: "breadcrumbs",
  label: "Breadcrumbs"
}, {
  id: "navigation-controls",
  label: "Navigation Controls"
}, {
  id: "table",
  label: "Table"
}, {
  id: "date-picker",
  label: "Date Picker"
}, {
  id: "bottom-sheet",
  label: "Bottom Sheet"
}, {
  id: "carousel",
  label: "Carousel"
}];
function Section({
  id,
  title,
  description,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    className: "demo-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "demo-section__intro"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "demo-section__title"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "demo-section__description"
  }, description)), /*#__PURE__*/React.createElement("div", {
    className: "demo-section__stage"
  }, children));
}
function Row({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "demo-row"
  }, children);
}
function App() {
  const [theme, setTheme] = React.useState("light");
  const [toasts, setToasts] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const [progress, setProgress] = React.useState(35);
  const [checkboxState, setCheckboxState] = React.useState({
    a: true,
    b: false,
    c: false
  });
  const [radioValue, setRadioValue] = React.useState("plan-pro");
  const [switchOn, setSwitchOn] = React.useState(true);
  const [textValue, setTextValue] = React.useState("");
  const [emailValue, setEmailValue] = React.useState("not-an-email");
  const [alertVisible, setAlertVisible] = React.useState(true);
  const [filters, setFilters] = React.useState(() => new Set(["design"]));
  const [demoChips, setDemoChips] = React.useState([{
    id: "c1",
    label: "Design"
  }, {
    id: "c2",
    label: "Engineering"
  }, {
    id: "c3",
    label: "Research"
  }]);
  const [segment, setSegment] = React.useState("week");
  const [dateValue, setDateValue] = React.useState(null);
  const [tileDisabled, setTileDisabled] = React.useState(false);
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  function pushToast(variant, message) {
    const id = Date.now() + Math.random();
    setToasts(t => [...t, {
      id,
      variant,
      message
    }]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 4000);
  }
  function dismissToast(id) {
    setToasts(t => t.filter(x => x.id !== id));
  }
  function toggleFilter(key) {
    setFilters(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }
  const tableColumns = [{
    key: "name",
    label: "Name",
    sortable: true
  }, {
    key: "role",
    label: "Role",
    sortable: true
  }, {
    key: "status",
    label: "Status",
    sortable: false
  }];
  const tableRows = [{
    id: 1,
    name: "Amara Chen",
    role: "Product Designer",
    status: "Active"
  }, {
    id: 2,
    name: "Diego Fischer",
    role: "Frontend Engineer",
    status: "Active"
  }, {
    id: 3,
    name: "Priya Nandan",
    role: "Design Lead",
    status: "Away"
  }, {
    id: 4,
    name: "Sam O'Malley",
    role: "Content Strategist",
    status: "Active"
  }];
  const accordionItems = [{
    id: "a1",
    title: "What is DFTS?",
    content: "DFTS is a token-driven design system covering colour, spacing, typography, motion, and 24 core components."
  }, {
    id: "a2",
    title: "How do I use the tokens?",
    content: "Reference DFTS-tokens.md for every raw value, and DFTS.md for anatomy, states, and accessibility rules per component."
  }, {
    id: "a3",
    title: "Is dark mode supported?",
    content: "Yes — every semantic and component colour token resolves to a light and dark value automatically via the [data-theme] attribute."
  }];
  const carouselSlides = [{
    id: "s1",
    content: "Slide 1 — onboarding"
  }, {
    id: "s2",
    content: "Slide 2 — feature highlight"
  }, {
    id: "s3",
    content: "Slide 3 — call to action"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "demo-app"
  }, /*#__PURE__*/React.createElement(ToastStack, {
    toasts: toasts,
    onDismiss: dismissToast
  }), /*#__PURE__*/React.createElement("header", {
    className: "demo-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "demo-header__brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "demo-header__logo"
  }, "DFTS"), /*#__PURE__*/React.createElement("span", {
    className: "demo-header__subtitle"
  }, "React Component Kit")), /*#__PURE__*/React.createElement("div", {
    className: "demo-header__actions"
  }, /*#__PURE__*/React.createElement("span", {
    className: "demo-text-caption"
  }, "Light"), /*#__PURE__*/React.createElement(Switch, {
    id: "theme-switch",
    label: "",
    checked: theme === "dark",
    onChange: e => setTheme(e.target.checked ? "dark" : "light")
  }), /*#__PURE__*/React.createElement("span", {
    className: "demo-text-caption"
  }, "Dark"))), /*#__PURE__*/React.createElement("div", {
    className: "demo-layout"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "demo-nav",
    "aria-label": "Component sections"
  }, /*#__PURE__*/React.createElement("ul", null, SECTIONS.map(s => /*#__PURE__*/React.createElement("li", {
    key: s.id
  }, /*#__PURE__*/React.createElement("a", {
    href: `#${s.id}`
  }, s.label))))), /*#__PURE__*/React.createElement("main", {
    className: "demo-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "demo-intro"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "dfts-text-title-lg"
  }, "DFTS Component Kit"), /*#__PURE__*/React.createElement("p", {
    className: "dfts-text-body-md demo-intro__text"
  }, "Every component from DFTS.md, built in React against DFTS-tokens.md. Toggle the switch above to preview both themes.")), /*#__PURE__*/React.createElement(Section, {
    id: "buttons",
    title: "Button",
    description: "variant: primary / secondary / ghost / destructive · size: sm / md / lg"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Primary"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Secondary"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Ghost"), /*#__PURE__*/React.createElement(Button, {
    variant: "destructive"
  }, "Destructive")), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Small"), /*#__PURE__*/React.createElement(Button, {
    size: "md"
  }, "Medium"), /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Large")), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Button, {
    leadingIcon: "add"
  }, "With icon"), /*#__PURE__*/React.createElement(Button, {
    loading: true
  }, "Loading"), /*#__PURE__*/React.createElement(Button, {
    disabled: true
  }, "Disabled"))), /*#__PURE__*/React.createElement(Section, {
    id: "chips",
    title: "Chip",
    description: "variant: filled / outlined · dismissible and toggleable examples"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Chip, {
    variant: "filled"
  }, "Filled"), /*#__PURE__*/React.createElement(Chip, {
    variant: "outlined"
  }, "Outlined"), /*#__PURE__*/React.createElement(Chip, {
    error: true
  }, "Error"), /*#__PURE__*/React.createElement(Chip, {
    disabled: true
  }, "Disabled")), /*#__PURE__*/React.createElement(Row, null, demoChips.map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c.id,
    variant: "filled",
    leadingIcon: "palette",
    removable: true,
    onRemove: () => {
      setDemoChips(prev => prev.filter(x => x.id !== c.id));
      pushToast("default", `${c.label} removed`);
    }
  }, c.label)), demoChips.length === 0 && /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    onClick: () => setDemoChips([{
      id: "c1",
      label: "Design"
    }, {
      id: "c2",
      label: "Engineering"
    }, {
      id: "c3",
      label: "Research"
    }])
  }, "Reset chips"), /*#__PURE__*/React.createElement(Chip, {
    variant: "outlined",
    selected: true,
    onToggle: () => {}
  }, "Toggleable (selected)"))), /*#__PURE__*/React.createElement(Section, {
    id: "form-controls",
    title: "Form Controls",
    description: "Checkbox, Radio, and Switch — native inputs under the hood"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Checkbox, {
    id: "cb-a",
    label: "Email notifications",
    checked: checkboxState.a,
    onChange: e => setCheckboxState(s => ({
      ...s,
      a: e.target.checked
    }))
  }), /*#__PURE__*/React.createElement(Checkbox, {
    id: "cb-b",
    label: "SMS notifications",
    checked: checkboxState.b,
    onChange: e => setCheckboxState(s => ({
      ...s,
      b: e.target.checked
    }))
  }), /*#__PURE__*/React.createElement(Checkbox, {
    id: "cb-c",
    label: "Required field",
    checked: checkboxState.c,
    onChange: e => setCheckboxState(s => ({
      ...s,
      c: e.target.checked
    })),
    error: true,
    errorMessage: !checkboxState.c ? "This must be checked" : undefined
  })), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Radio, {
    id: "plan-free",
    name: "plan",
    label: "Free",
    checked: radioValue === "plan-free",
    onChange: () => setRadioValue("plan-free")
  }), /*#__PURE__*/React.createElement(Radio, {
    id: "plan-pro",
    name: "plan",
    label: "Pro",
    checked: radioValue === "plan-pro",
    onChange: () => setRadioValue("plan-pro")
  }), /*#__PURE__*/React.createElement(Radio, {
    id: "plan-team",
    name: "plan",
    label: "Team",
    checked: radioValue === "plan-team",
    onChange: () => setRadioValue("plan-team")
  })), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Switch, {
    id: "switch-1",
    label: "Auto-save",
    checked: switchOn,
    onChange: e => setSwitchOn(e.target.checked)
  }))), /*#__PURE__*/React.createElement(Section, {
    id: "input-fields",
    title: "Input Fields",
    description: "size: sm / md / lg · error and helper text states"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(TextField, {
    id: "tf-1",
    label: "Full name",
    placeholder: "Ada Lovelace",
    value: textValue,
    onChange: e => setTextValue(e.target.value),
    leadingIcon: "person",
    helperText: "As it appears on your ID"
  }), /*#__PURE__*/React.createElement(TextField, {
    id: "tf-2",
    label: "Email",
    value: emailValue,
    onChange: e => setEmailValue(e.target.value),
    error: !emailValue.includes("@") ? "Enter a valid email address" : undefined
  }), /*#__PURE__*/React.createElement(TextField, {
    id: "tf-3",
    label: "Disabled",
    value: "Can't edit this",
    disabled: true,
    onChange: () => {}
  }))), /*#__PURE__*/React.createElement(Section, {
    id: "alert",
    title: "Alert",
    description: "variant: info / success / warning / error · role=alert for warning/error"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Alert, {
    variant: "info",
    title: "Heads up"
  }, "A new version of DFTS is available.")), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Alert, {
    variant: "success",
    title: "Saved"
  }, "Your changes were saved successfully.")), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Alert, {
    variant: "warning",
    title: "Storage almost full"
  }, "You're at 90% of your plan's limit.")), alertVisible && /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Alert, {
    variant: "error",
    title: "Something went wrong",
    dismissible: true,
    onDismiss: () => setAlertVisible(false)
  }, "We couldn't process your request. Try again."))), /*#__PURE__*/React.createElement(Section, {
    id: "toast",
    title: "Toast",
    description: "Transient, auto-dismissing after 4s. aria-live announces each one."
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => pushToast("default", "Default notification")
  }, "Default"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => pushToast("info", "New comment on your file")
  }, "Info"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => pushToast("success", "Export complete")
  }, "Success"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => pushToast("warning", "Connection unstable")
  }, "Warning"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => pushToast("error", "Failed to save")
  }, "Error"))), /*#__PURE__*/React.createElement(Section, {
    id: "tooltip",
    title: "Tooltip",
    description: "Shows on hover and keyboard focus, dismisses on Esc/blur"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Duplicate this file"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    leadingIcon: "content_copy"
  }, "Duplicate")), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Move to archive",
    placement: "bottom"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    leadingIcon: "archive"
  }, "Archive")))), /*#__PURE__*/React.createElement(Section, {
    id: "loader",
    title: "Loader",
    description: "size: sm / md / lg · role=status"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Loader, {
    size: "sm"
  }), /*#__PURE__*/React.createElement(Loader, {
    size: "md"
  }), /*#__PURE__*/React.createElement(Loader, {
    size: "lg"
  }))), /*#__PURE__*/React.createElement(Section, {
    id: "progress-line",
    title: "Progress Line",
    description: "Determinate progress, role=progressbar"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280
    }
  }, /*#__PURE__*/React.createElement(ProgressLine, {
    value: progress,
    showLabel: true,
    label: "Upload progress"
  })), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    onClick: () => setProgress(p => Math.max(0, p - 10))
  }, "-10"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    onClick: () => setProgress(p => Math.min(100, p + 10))
  }, "+10"))), /*#__PURE__*/React.createElement(Section, {
    id: "link",
    title: "Link",
    description: "Native anchor semantics · error and disabled states"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Link, {
    href: "#"
  }, "Default link"), /*#__PURE__*/React.createElement(Link, {
    href: "#",
    trailingIcon: "open_in_new"
  }, "With icon"), /*#__PURE__*/React.createElement(Link, {
    href: "#",
    error: true
  }, "Error link"), /*#__PURE__*/React.createElement(Link, {
    href: "#",
    disabled: true
  }, "Disabled link"))), /*#__PURE__*/React.createElement(Section, {
    id: "avatar",
    title: "Avatar",
    description: "Image, initials, or fallback icon · size: sm–xxl"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Avatar, {
    name: "Ada Lovelace",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Grace Hopper",
    size: "md"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Alan Turing",
    size: "lg"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Margaret Hamilton",
    size: "xl"
  }), /*#__PURE__*/React.createElement(Avatar, {
    size: "xxl"
  }))), /*#__PURE__*/React.createElement(Section, {
    id: "divider",
    title: "Divider",
    description: "Horizontal and vertical orientation"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      width: "100%",
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dfts-text-body-sm"
  }, "Section A"), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("span", {
    className: "dfts-text-body-sm"
  }, "Section B")), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement("span", {
    className: "dfts-text-body-sm"
  }, "Left"), /*#__PURE__*/React.createElement(Divider, {
    orientation: "vertical"
  }), /*#__PURE__*/React.createElement("span", {
    className: "dfts-text-body-sm"
  }, "Right"))), /*#__PURE__*/React.createElement(Section, {
    id: "tile",
    title: "Tile",
    description: "Compact clickable surface for navigation shortcuts"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 180
    }
  }, /*#__PURE__*/React.createElement(Tile, {
    icon: "dashboard",
    title: "Dashboard",
    description: "Overview & stats",
    onClick: () => pushToast("default", "Navigated to Dashboard")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 180
    }
  }, /*#__PURE__*/React.createElement(Tile, {
    icon: "settings",
    title: "Settings",
    description: "Account preferences",
    onClick: () => pushToast("default", "Navigated to Settings")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 180
    }
  }, /*#__PURE__*/React.createElement(Tile, {
    icon: "lock",
    title: "Disabled tile",
    description: "Not available",
    disabled: tileDisabled,
    onClick: () => pushToast("default", "Navigated")
  })))), /*#__PURE__*/React.createElement(Section, {
    id: "card",
    title: "Card",
    description: "Static and interactive variants"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 240
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Static card",
    description: "Used for grouping content without navigation."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 240
    }
  }, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    title: "Interactive card",
    description: "Whole card is clickable and keyboard-focusable.",
    onClick: () => pushToast("default", "Card clicked"),
    footer: /*#__PURE__*/React.createElement(Chip, {
      variant: "filled",
      leadingIcon: "star"
    }, "Featured")
  })))), /*#__PURE__*/React.createElement(Section, {
    id: "accordion",
    title: "Accordion",
    description: "Single-open by default; aria-expanded / aria-controls wired up"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: accordionItems,
    defaultOpenId: "a1"
  }))), /*#__PURE__*/React.createElement(Section, {
    id: "modal",
    title: "Modal",
    description: "Focus-trapped dialog, closes on Esc / backdrop click, restores focus on close"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setModalOpen(true)
  }, "Open modal")), /*#__PURE__*/React.createElement(Modal, {
    open: modalOpen,
    onClose: () => setModalOpen(false),
    title: "Delete project?",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setModalOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "destructive",
      onClick: () => {
        setModalOpen(false);
        pushToast("error", "Project deleted");
      }
    }, "Delete"))
  }, "This action can't be undone. The project and all its files will be permanently removed.")), /*#__PURE__*/React.createElement(Section, {
    id: "tabs",
    title: "Tabs",
    description: "Arrow-key navigation between tabs, single visible panel"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: "overview",
      label: "Overview",
      content: "High-level summary of this project's status."
    }, {
      id: "activity",
      label: "Activity",
      content: "A timeline of recent changes and comments."
    }, {
      id: "settings",
      label: "Settings",
      content: "Manage members, permissions, and integrations."
    }, {
      id: "archived",
      label: "Archived",
      content: "Nothing here yet.",
      disabled: true
    }]
  }))), /*#__PURE__*/React.createElement(Section, {
    id: "menu",
    title: "Menu",
    description: "Floating action list, arrow-key navigation, closes on Esc / outside click"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Menu, {
    trigger: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      trailingIcon: "expand_more"
    }, "Actions"),
    items: [{
      id: "edit",
      label: "Edit",
      icon: "edit",
      onSelect: () => pushToast("default", "Editing…")
    }, {
      id: "duplicate",
      label: "Duplicate",
      icon: "content_copy",
      onSelect: () => pushToast("default", "Duplicated")
    }, {
      id: "archive",
      label: "Archive",
      icon: "archive",
      onSelect: () => pushToast("default", "Archived")
    }, {
      id: "delete",
      label: "Delete",
      icon: "delete",
      danger: true,
      onSelect: () => pushToast("error", "Deleted")
    }]
  }))), /*#__PURE__*/React.createElement(Section, {
    id: "breadcrumbs",
    title: "Breadcrumbs",
    description: "Current page uses aria-current='page' and is not a link"
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: "Projects",
      href: "#"
    }, {
      label: "DFTS",
      href: "#"
    }, {
      label: "Component Kit"
    }]
  })), /*#__PURE__*/React.createElement(Section, {
    id: "navigation-controls",
    title: "Navigation Controls",
    description: "FilterChip (multi-select toggle) and SegmentedControl (single-select)"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(FilterChip, {
    label: "Design",
    icon: "palette",
    active: filters.has("design"),
    onToggle: () => toggleFilter("design")
  }), /*#__PURE__*/React.createElement(FilterChip, {
    label: "Engineering",
    icon: "code",
    active: filters.has("eng"),
    onToggle: () => toggleFilter("eng")
  }), /*#__PURE__*/React.createElement(FilterChip, {
    label: "Research",
    icon: "search",
    active: filters.has("research"),
    onToggle: () => toggleFilter("research")
  })), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(SegmentedControl, {
    segments: [{
      value: "day",
      label: "Day"
    }, {
      value: "week",
      label: "Week"
    }, {
      value: "month",
      label: "Month"
    }],
    value: segment,
    onChange: setSegment
  }))), /*#__PURE__*/React.createElement(Section, {
    id: "table",
    title: "Table",
    description: "Sortable headers (aria-sort), row selection (aria-selected)"
  }, /*#__PURE__*/React.createElement(Table, {
    columns: tableColumns,
    rows: tableRows,
    selectable: true
  })), /*#__PURE__*/React.createElement(Section, {
    id: "date-picker",
    title: "Date Picker",
    description: "Arrow-key day navigation, aria-current='date' for today"
  }, /*#__PURE__*/React.createElement(DatePicker, {
    value: dateValue,
    onChange: setDateValue
  }), dateValue && /*#__PURE__*/React.createElement("p", {
    className: "dfts-text-caption-md demo-selected-date"
  }, "Selected: ", dateValue.toDateString())), /*#__PURE__*/React.createElement(Section, {
    id: "bottom-sheet",
    title: "Bottom Sheet",
    description: "Mobile-first overlay, same dialog semantics as Modal"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setSheetOpen(true)
  }, "Open bottom sheet")), /*#__PURE__*/React.createElement(BottomSheet, {
    open: sheetOpen,
    onClose: () => setSheetOpen(false),
    title: "Share this file"
  }, /*#__PURE__*/React.createElement("p", {
    className: "dfts-text-body-sm"
  }, "Choose how you'd like to share this file with your team."), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leadingIcon: "link",
    onClick: () => pushToast("success", "Link copied")
  }, "Copy link"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leadingIcon: "mail",
    onClick: () => pushToast("default", "Opening email…")
  }, "Email")))), /*#__PURE__*/React.createElement(Section, {
    id: "carousel",
    title: "Carousel",
    description: "Prev/next controls plus dot pagination, arrow-key friendly nav buttons"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement(Carousel, {
    slides: carouselSlides,
    label: "Feature highlights"
  }))), /*#__PURE__*/React.createElement("footer", {
    className: "demo-footer"
  }, /*#__PURE__*/React.createElement("p", {
    className: "dfts-text-caption-md"
  }, "DFTS React Component Kit — generated from DFTS.md & DFTS-tokens.md.")))));
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/React.createElement(App, null));
