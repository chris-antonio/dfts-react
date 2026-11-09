import React from "react";
import { Button } from "../lib/index.js";

export default {
  title: "Actions/Button",
  component: Button,
  tags: ["autodocs"],
  args: { children: "Button" },
  argTypes: {
    variant: { control: "inline-radio", options: ["primary", "secondary", "ghost", "destructive"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
  },
};

export const Primary = {};
export const Secondary = { args: { variant: "secondary" } };
export const Ghost = { args: { variant: "ghost" } };
export const Destructive = { args: { variant: "destructive", children: "Delete" } };
export const WithIcons = { args: { leadingIcon: "add", trailingIcon: "arrow_forward", children: "Create" } };
export const Loading = { args: { loading: true, children: "Saving" } };
export const Disabled = { args: { disabled: true } };
export const Sizes = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      {["sm", "md", "lg"].map((s) => <Button key={s} {...args} size={s}>{s}</Button>)}
    </div>
  ),
};
