/**
 * DFTS Component Kit — interactive demo app.
 * Renders every component from src/components with live interactions,
 * plus a light/dark theme switch. Mounted into #root by ReactDOM at the
 * bottom of this file.
 */

const SECTIONS = [
  { id: "buttons", label: "Button" },
  { id: "chips", label: "Chip" },
  { id: "form-controls", label: "Form Controls" },
  { id: "input-fields", label: "Input Fields" },
  { id: "alert", label: "Alert" },
  { id: "toast", label: "Toast" },
  { id: "tooltip", label: "Tooltip" },
  { id: "loader", label: "Loader" },
  { id: "progress-line", label: "Progress Line" },
  { id: "link", label: "Link" },
  { id: "avatar", label: "Avatar" },
  { id: "divider", label: "Divider" },
  { id: "tile", label: "Tile" },
  { id: "card", label: "Card" },
  { id: "accordion", label: "Accordion" },
  { id: "modal", label: "Modal" },
  { id: "tabs", label: "Tabs" },
  { id: "menu", label: "Menu" },
  { id: "breadcrumbs", label: "Breadcrumbs" },
  { id: "navigation-controls", label: "Navigation Controls" },
  { id: "table", label: "Table" },
  { id: "date-picker", label: "Date Picker" },
  { id: "bottom-sheet", label: "Bottom Sheet" },
  { id: "carousel", label: "Carousel" },
];

function Section({ id, title, description, children }) {
  return (
    <section id={id} className="demo-section">
      <div className="demo-section__intro">
        <h2 className="demo-section__title">{title}</h2>
        {description && <p className="demo-section__description">{description}</p>}
      </div>
      <div className="demo-section__stage">{children}</div>
    </section>
  );
}

function Row({ children }) {
  return <div className="demo-row">{children}</div>;
}

function App() {
  const [theme, setTheme] = React.useState("light");
  const [toasts, setToasts] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const [progress, setProgress] = React.useState(35);
  const [checkboxState, setCheckboxState] = React.useState({ a: true, b: false, c: false });
  const [radioValue, setRadioValue] = React.useState("plan-pro");
  const [switchOn, setSwitchOn] = React.useState(true);
  const [textValue, setTextValue] = React.useState("");
  const [bioValue, setBioValue] = React.useState("");
  const [selectValue, setSelectValue] = React.useState("");
  const [multiSelectValue, setMultiSelectValue] = React.useState(["design"]);
  const [phoneValue, setPhoneValue] = React.useState({ code: "+33", number: "" });
  const [emailValue, setEmailValue] = React.useState("not-an-email");
  const [alertVisible, setAlertVisible] = React.useState(true);
  const [filters, setFilters] = React.useState(() => new Set(["design"]));
  const [demoChips, setDemoChips] = React.useState([
    { id: "c1", label: "Design" },
    { id: "c2", label: "Engineering" },
    { id: "c3", label: "Research" },
  ]);
  const [segment, setSegment] = React.useState("week");
  const [dateValue, setDateValue] = React.useState(null);
  const [tileDisabled, setTileDisabled] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function pushToast(variant, message) {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, variant, message }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4000);
  }
  function dismissToast(id) {
    setToasts((t) => t.filter((x) => x.id !== id));
  }

  function toggleFilter(key) {
    setFilters((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }

  const tableColumns = [
    { key: "name", label: "Name", sortable: true },
    { key: "role", label: "Role", sortable: true },
    { key: "status", label: "Status", sortable: false },
  ];
  const tableRows = [
    { id: 1, name: "Amara Chen", role: "Product Designer", status: "Active" },
    { id: 2, name: "Diego Fischer", role: "Frontend Engineer", status: "Active" },
    { id: 3, name: "Priya Nandan", role: "Design Lead", status: "Away" },
    { id: 4, name: "Sam O'Malley", role: "Content Strategist", status: "Active" },
  ];

  const accordionItems = [
    { id: "a1", title: "What is DFTS?", content: "DFTS is a token-driven design system covering colour, spacing, typography, motion, and 24 core components." },
    { id: "a2", title: "How do I use the tokens?", content: "Reference DFTS-tokens.md for every raw value, and DFTS.md for anatomy, states, and accessibility rules per component." },
    { id: "a3", title: "Is dark mode supported?", content: "Yes — every semantic and component colour token resolves to a light and dark value automatically via the [data-theme] attribute." },
  ];

  const carouselSlides = [
    { id: "s1", content: "Slide 1 — onboarding" },
    { id: "s2", content: "Slide 2 — feature highlight" },
    { id: "s3", content: "Slide 3 — call to action" },
  ];

  return (
    <div className="demo-app">
      <ToastStack toasts={toasts} onDismiss={dismissToast} />

      <header className="demo-header">
        <div className="demo-header__brand">
          <span className="demo-header__logo">DFTS</span>
          <span className="demo-header__subtitle">React Component Kit</span>
        </div>
        <div className="demo-header__actions">
          <span className="demo-text-caption">Light</span>
          <Switch
            id="theme-switch"
            label=""
            checked={theme === "dark"}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
          <span className="demo-text-caption">Dark</span>
        </div>
      </header>

      <div className="demo-layout">
        <nav className="demo-nav" aria-label="Component sections">
          <ul>
            {SECTIONS.map((s) => (
              <li key={s.id}><a href={`#${s.id}`}>{s.label}</a></li>
            ))}
          </ul>
        </nav>

        <main className="demo-main">
          <div className="demo-intro">
            <h1 className="dfts-text-title-lg">DFTS Component Kit</h1>
            <p className="dfts-text-body-md demo-intro__text">
              Every component from DFTS.md, built in React against DFTS-tokens.md. Toggle the switch above to preview both themes.
            </p>
          </div>

          <Section id="buttons" title="Button" description="variant: primary / secondary / ghost / destructive · size: sm / md / lg">
            <Row>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </Row>
            <Row>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </Row>
            <Row>
              <Button leadingIcon="add">With icon</Button>
              <Button loading>Loading</Button>
              <Button disabled>Disabled</Button>
            </Row>
          </Section>

          <Section id="chips" title="Chip" description="variant: filled / outlined · dismissible and toggleable examples">
            <Row>
              <Chip variant="filled">Filled</Chip>
              <Chip variant="outlined">Outlined</Chip>
              <Chip error>Error</Chip>
              <Chip disabled>Disabled</Chip>
            </Row>
            <Row>
              {demoChips.map((c) => (
                <Chip
                  key={c.id}
                  variant="filled"
                  leadingIcon="palette"
                  removable
                  onRemove={() => { setDemoChips((prev) => prev.filter((x) => x.id !== c.id)); pushToast("default", `${c.label} removed`); }}
                >
                  {c.label}
                </Chip>
              ))}
              {demoChips.length === 0 && (
                <Button size="sm" variant="ghost" onClick={() => setDemoChips([{ id: "c1", label: "Design" }, { id: "c2", label: "Engineering" }, { id: "c3", label: "Research" }])}>
                  Reset chips
                </Button>
              )}
              <Chip variant="outlined" selected onToggle={() => {}}>Toggleable (selected)</Chip>
            </Row>
          </Section>

          <Section id="form-controls" title="Form Controls" description="Checkbox, Radio, and Switch — native inputs under the hood">
            <Row>
              <Checkbox id="cb-a" label="Email notifications" checked={checkboxState.a} onChange={(e) => setCheckboxState((s) => ({ ...s, a: e.target.checked }))} />
              <Checkbox id="cb-b" label="SMS notifications" checked={checkboxState.b} onChange={(e) => setCheckboxState((s) => ({ ...s, b: e.target.checked }))} />
              <Checkbox id="cb-c" label="Required field" checked={checkboxState.c} onChange={(e) => setCheckboxState((s) => ({ ...s, c: e.target.checked }))} error errorMessage={!checkboxState.c ? "This must be checked" : undefined} />
            </Row>
            <Row>
              <Radio id="plan-free" name="plan" label="Free" checked={radioValue === "plan-free"} onChange={() => setRadioValue("plan-free")} />
              <Radio id="plan-pro" name="plan" label="Pro" checked={radioValue === "plan-pro"} onChange={() => setRadioValue("plan-pro")} />
              <Radio id="plan-team" name="plan" label="Team" checked={radioValue === "plan-team"} onChange={() => setRadioValue("plan-team")} />
            </Row>
            <Row>
              <Switch id="switch-1" label="Auto-save" checked={switchOn} onChange={(e) => setSwitchOn(e.target.checked)} />
            </Row>
          </Section>

          <Section id="input-fields" title="Input Fields" description="TextField, TextArea, Select (single / multiple) and PhoneField · size: sm / md / lg · error and helper text states">
            <Row>
              <TextField id="tf-1" label="Full name" placeholder="Ada Lovelace" value={textValue} onChange={(e) => setTextValue(e.target.value)} leadingIcon="person" helperText="As it appears on your ID" />
              <TextField id="tf-2" label="Email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} error={!emailValue.includes("@") ? "Enter a valid email address" : undefined} />
              <TextField id="tf-3" label="Disabled" value="Can't edit this" disabled onChange={() => {}} />
            </Row>
            <Row>
              <TextArea id="ta-1" label="Bio" placeholder="Tell us about yourself" value={bioValue} onChange={(e) => setBioValue(e.target.value)} helperText="Max 280 characters" />
              <TextArea id="ta-2" label="Notes" error="This field is required" value="" onChange={() => {}} />
              <TextArea id="ta-3" label="Disabled" value="Can't edit this" disabled onChange={() => {}} />
            </Row>
            <Row>
              <Select id="sel-1" label="Role" value={selectValue} onChange={setSelectValue} options={[{ value: "design", label: "Design" }, { value: "eng", label: "Engineering" }, { value: "pm", label: "Product" }]} helperText="Single select" />
              <Select id="sel-2" label="Teams" multiple value={multiSelectValue} onChange={setMultiSelectValue} options={[{ value: "design", label: "Design" }, { value: "eng", label: "Engineering" }, { value: "pm", label: "Product" }]} helperText="Multiple select" />
              <Select id="sel-3" label="Error" error="Pick an option" value="" onChange={() => {}} options={["One", "Two"]} />
              <Select id="sel-4" label="Disabled" disabled value="" onChange={() => {}} options={["One", "Two"]} />
            </Row>
            <Row>
              <PhoneField id="ph-1" value={phoneValue} onChange={setPhoneValue} helperText="We'll only use this for sign-in codes" />
              <PhoneField id="ph-2" size="sm" value={{ code: "+44", number: "" }} onChange={() => {}} error="Enter a valid number" />
            </Row>
          </Section>

          <Section id="alert" title="Alert" description="variant: info / success / warning / error · role=alert for warning/error">
            <Row>
              <Alert variant="info" title="Heads up">A new version of DFTS is available.</Alert>
            </Row>
            <Row>
              <Alert variant="success" title="Saved">Your changes were saved successfully.</Alert>
            </Row>
            <Row>
              <Alert variant="warning" title="Storage almost full">You're at 90% of your plan's limit.</Alert>
            </Row>
            {alertVisible && (
              <Row>
                <Alert variant="error" title="Something went wrong" dismissible onDismiss={() => setAlertVisible(false)}>
                  We couldn't process your request. Try again.
                </Alert>
              </Row>
            )}
          </Section>

          <Section id="toast" title="Toast" description="Transient, auto-dismissing after 4s. aria-live announces each one.">
            <Row>
              <Button variant="secondary" onClick={() => pushToast("default", "Default notification")}>Default</Button>
              <Button variant="secondary" onClick={() => pushToast("info", "New comment on your file")}>Info</Button>
              <Button variant="secondary" onClick={() => pushToast("success", "Export complete")}>Success</Button>
              <Button variant="secondary" onClick={() => pushToast("warning", "Connection unstable")}>Warning</Button>
              <Button variant="secondary" onClick={() => pushToast("error", "Failed to save")}>Error</Button>
            </Row>
          </Section>

          <Section id="tooltip" title="Tooltip" description="Shows on hover and keyboard focus, dismisses on Esc/blur">
            <Row>
              <Tooltip label="Duplicate this file">
                <Button variant="ghost" leadingIcon="content_copy">Duplicate</Button>
              </Tooltip>
              <Tooltip label="Move to archive" placement="bottom">
                <Button variant="ghost" leadingIcon="archive">Archive</Button>
              </Tooltip>
            </Row>
          </Section>

          <Section id="loader" title="Loader" description="size: sm / md / lg · role=status">
            <Row>
              <Loader size="sm" />
              <Loader size="md" />
              <Loader size="lg" />
            </Row>
          </Section>

          <Section id="progress-line" title="Progress Line" description="Determinate progress, role=progressbar">
            <Row>
              <div style={{ width: 280 }}>
                <ProgressLine value={progress} showLabel label="Upload progress" />
              </div>
              <Button size="sm" variant="ghost" onClick={() => setProgress((p) => Math.max(0, p - 10))}>-10</Button>
              <Button size="sm" variant="ghost" onClick={() => setProgress((p) => Math.min(100, p + 10))}>+10</Button>
            </Row>
          </Section>

          <Section id="link" title="Link" description="Native anchor semantics · error and disabled states">
            <Row>
              <Link href="#">Default link</Link>
              <Link href="#" trailingIcon="open_in_new">With icon</Link>
              <Link href="#" error>Error link</Link>
              <Link href="#" disabled>Disabled link</Link>
            </Row>
          </Section>

          <Section id="avatar" title="Avatar" description="Image, initials, or fallback icon · size: sm–xxl">
            <Row>
              <Avatar name="Ada Lovelace" size="sm" />
              <Avatar name="Grace Hopper" size="md" />
              <Avatar name="Alan Turing" size="lg" />
              <Avatar name="Margaret Hamilton" size="xl" />
              <Avatar size="xxl" />
            </Row>
          </Section>

          <Section id="divider" title="Divider" description="Horizontal and vertical orientation">
            <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%", maxWidth: 320 }}>
              <span className="dfts-text-body-sm">Section A</span>
              <Divider />
              <span className="dfts-text-body-sm">Section B</span>
            </div>
            <Row>
              <span className="dfts-text-body-sm">Left</span>
              <Divider orientation="vertical" />
              <span className="dfts-text-body-sm">Right</span>
            </Row>
          </Section>

          <Section id="tile" title="Tile" description="Compact clickable surface for navigation shortcuts">
            <Row>
              <div style={{ width: 180 }}><Tile icon="dashboard" title="Dashboard" description="Overview & stats" onClick={() => pushToast("default", "Navigated to Dashboard")} /></div>
              <div style={{ width: 180 }}><Tile icon="settings" title="Settings" description="Account preferences" onClick={() => pushToast("default", "Navigated to Settings")} /></div>
              <div style={{ width: 180 }}><Tile icon="lock" title="Disabled tile" description="Not available" disabled={tileDisabled} onClick={() => pushToast("default", "Navigated")} /></div>
            </Row>
          </Section>

          <Section id="card" title="Card" description="Static and interactive variants">
            <Row>
              <div style={{ width: 240 }}>
                <Card title="Static card" description="Used for grouping content without navigation." />
              </div>
              <div style={{ width: 240 }}>
                <Card
                  interactive
                  title="Interactive card"
                  description="Whole card is clickable and keyboard-focusable."
                  onClick={() => pushToast("default", "Card clicked")}
                  footer={<Chip variant="filled" leadingIcon="star">Featured</Chip>}
                />
              </div>
            </Row>
          </Section>

          <Section id="accordion" title="Accordion" description="Single-open by default; aria-expanded / aria-controls wired up">
            <div style={{ width: "100%", maxWidth: 480 }}>
              <Accordion items={accordionItems} defaultOpenId="a1" />
            </div>
          </Section>

          <Section id="modal" title="Modal" description="Focus-trapped dialog, closes on Esc / backdrop click, restores focus on close">
            <Row>
              <Button onClick={() => setModalOpen(true)}>Open modal</Button>
            </Row>
            <Modal
              open={modalOpen}
              onClose={() => setModalOpen(false)}
              title="Delete project?"
              footer={(
                <React.Fragment>
                  <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
                  <Button variant="destructive" onClick={() => { setModalOpen(false); pushToast("error", "Project deleted"); }}>Delete</Button>
                </React.Fragment>
              )}
            >
              This action can't be undone. The project and all its files will be permanently removed.
            </Modal>
          </Section>

          <Section id="tabs" title="Tabs" description="Arrow-key navigation between tabs, single visible panel">
            <div style={{ width: "100%", maxWidth: 480 }}>
              <Tabs
                items={[
                  { id: "overview", label: "Overview", content: "High-level summary of this project's status." },
                  { id: "activity", label: "Activity", content: "A timeline of recent changes and comments." },
                  { id: "settings", label: "Settings", content: "Manage members, permissions, and integrations." },
                  { id: "archived", label: "Archived", content: "Nothing here yet.", disabled: true },
                ]}
              />
            </div>
          </Section>

          <Section id="menu" title="Menu" description="Floating action list, arrow-key navigation, closes on Esc / outside click">
            <Row>
              <Menu
                trigger={<Button variant="secondary" trailingIcon="expand_more">Actions</Button>}
                items={[
                  { id: "edit", label: "Edit", icon: "edit", onSelect: () => pushToast("default", "Editing…") },
                  { id: "duplicate", label: "Duplicate", icon: "content_copy", onSelect: () => pushToast("default", "Duplicated") },
                  { id: "archive", label: "Archive", icon: "archive", onSelect: () => pushToast("default", "Archived") },
                  { id: "delete", label: "Delete", icon: "delete", danger: true, onSelect: () => pushToast("error", "Deleted") },
                ]}
              />
            </Row>
          </Section>

          <Section id="breadcrumbs" title="Breadcrumbs" description="Current page uses aria-current='page' and is not a link">
            <Breadcrumbs items={[{ label: "Projects", href: "#" }, { label: "DFTS", href: "#" }, { label: "Component Kit" }]} />
          </Section>

          <Section id="navigation-controls" title="Navigation Controls" description="FilterChip (multi-select toggle) and SegmentedControl (single-select)">
            <Row>
              <FilterChip label="Design" icon="palette" active={filters.has("design")} onToggle={() => toggleFilter("design")} />
              <FilterChip label="Engineering" icon="code" active={filters.has("eng")} onToggle={() => toggleFilter("eng")} />
              <FilterChip label="Research" icon="search" active={filters.has("research")} onToggle={() => toggleFilter("research")} />
            </Row>
            <Row>
              <SegmentedControl
                segments={[{ value: "day", label: "Day" }, { value: "week", label: "Week" }, { value: "month", label: "Month" }]}
                value={segment}
                onChange={setSegment}
              />
            </Row>
          </Section>

          <Section id="table" title="Table" description="Sortable headers (aria-sort), row selection (aria-selected)">
            <Table columns={tableColumns} rows={tableRows} selectable />
          </Section>

          <Section id="date-picker" title="Date Picker" description="Arrow-key day navigation, aria-current='date' for today">
            <DatePicker value={dateValue} onChange={setDateValue} />
            {dateValue && <p className="dfts-text-caption-md demo-selected-date">Selected: {dateValue.toDateString()}</p>}
          </Section>

          <Section id="bottom-sheet" title="Bottom Sheet" description="Mobile-first overlay, same dialog semantics as Modal">
            <Row>
              <Button onClick={() => setSheetOpen(true)}>Open bottom sheet</Button>
            </Row>
            <BottomSheet open={sheetOpen} onClose={() => setSheetOpen(false)} title="Share this file">
              <p className="dfts-text-body-sm">Choose how you'd like to share this file with your team.</p>
              <Row>
                <Button variant="secondary" leadingIcon="link" onClick={() => pushToast("success", "Link copied")}>Copy link</Button>
                <Button variant="secondary" leadingIcon="mail" onClick={() => pushToast("default", "Opening email…")}>Email</Button>
              </Row>
            </BottomSheet>
          </Section>

          <Section id="carousel" title="Carousel" description="Prev/next controls plus dot pagination, arrow-key friendly nav buttons">
            <div style={{ width: "100%", maxWidth: 480 }}>
              <Carousel slides={carouselSlides} label="Feature highlights" />
            </div>
          </Section>

          <footer className="demo-footer">
            <p className="dfts-text-caption-md">DFTS React Component Kit — generated from DFTS.md &amp; DFTS-tokens.md.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
