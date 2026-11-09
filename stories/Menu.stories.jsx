import React from "react";
import { Menu, Button } from "../lib/index.js";

export default {
  title: "Navigation/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export const Default = {
  render: () => (
    <Menu
      trigger={<Button variant="secondary" trailingIcon="expand_more">Actions</Button>}
      items={[
        { id: "edit", label: "Edit", icon: "edit", onSelect: () => {} },
        { id: "duplicate", label: "Duplicate", icon: "content_copy", onSelect: () => {} },
        { id: "archive", label: "Archive", icon: "archive", disabled: true },
        { id: "delete", label: "Delete", icon: "delete", danger: true, onSelect: () => {} },
      ]}
    />
  ),
};
export const AlignEnd = {
  render: () => (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Menu
        align="end"
        trigger={<Button variant="secondary" trailingIcon="expand_more">Align end</Button>}
        items={[{ id: "a", label: "First", onSelect: () => {} }, { id: "b", label: "Second", onSelect: () => {} }]}
      />
    </div>
  ),
};
