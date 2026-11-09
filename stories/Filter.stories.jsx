import React from "react";
import { Filter } from "../lib/index.js";

export default {
  title: "Actions/Filter",
  component: Filter,
  tags: ["autodocs"],
  args: { label: "Design", icon: "palette" },
};

export const Default = {
  render: (args) => {
    const [active, setActive] = React.useState(false);
    return <Filter {...args} active={active} onToggle={() => setActive((a) => !a)} />;
  },
};
export const Active = { args: { active: true } };
export const Disabled = { args: { disabled: true } };
export const Group = {
  render: () => {
    const [on, setOn] = React.useState(new Set(["design"]));
    const toggle = (k) => setOn((s) => { const n = new Set(s); n.has(k) ? n.delete(k) : n.add(k); return n; });
    return (
      <div style={{ display: "flex", gap: 8 }}>
        <Filter label="Design" icon="palette" active={on.has("design")} onToggle={() => toggle("design")} />
        <Filter label="Engineering" icon="code" active={on.has("eng")} onToggle={() => toggle("eng")} />
        <Filter label="Content" icon="edit_note" active={on.has("content")} onToggle={() => toggle("content")} />
      </div>
    );
  },
};
