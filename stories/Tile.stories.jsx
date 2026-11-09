import React from "react";
import { Tile } from "../lib/index.js";

export default {
  title: "Actions/Tile",
  component: Tile,
  tags: ["autodocs"],
  args: { icon: "dashboard", title: "Dashboard", description: "Overview & stats", onClick: () => {} },
  decorators: [(Story) => <div style={{ maxWidth: 200 }}><Story /></div>],
};

export const Default = {};
export const Disabled = { args: { disabled: true } };
