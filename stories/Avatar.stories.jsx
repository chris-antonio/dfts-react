import React from "react";
import { Avatar } from "../lib/index.js";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: { name: "Amara Chen" },
  argTypes: { size: { control: "inline-radio", options: ["sm", "md", "lg", "xl", "xxl"] } },
};

export const Initials = {};
export const Fallback = { args: { name: undefined } };
export const Sizes = {
  render: () => <div style={{ display: "flex", gap: 12, alignItems: "center" }}>{["sm", "md", "lg", "xl", "xxl"].map((s) => <Avatar key={s} name="Amara Chen" size={s} />)}</div>,
};
