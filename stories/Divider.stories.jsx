import React from "react";
import { Divider } from "../lib/index.js";

export default {
  title: "Visuals/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: { orientation: { control: "inline-radio", options: ["horizontal", "vertical"] } },
};

export const Horizontal = {};
export const Vertical = {
  render: (args) => <div style={{ display: "flex", gap: 16, alignItems: "center", height: 40 }}>Left<Divider {...args} orientation="vertical" />Right</div>,
};
