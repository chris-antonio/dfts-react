import React from "react";
import { Icon } from "../lib/index.js";

export default {
  title: "Visuals/Icon",
  component: Icon,
  tags: ["autodocs"],
  args: { name: "home", size: 24 },
  parameters: { docs: { description: { component: "Shared helper wrapping a Google Material Symbols glyph; use any symbol name." } } },
};

export const Default = {};
export const Gallery = {
  render: () => (
    <div style={{ display: "flex", gap: 16 }}>
      {["home", "search", "settings", "favorite", "delete", "mail"].map((n) => <Icon key={n} name={n} size={28} label={n} />)}
    </div>
  ),
};
