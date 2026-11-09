import React from "react";
import { Chip, Button } from "../lib/index.js";

export default {
  title: "Actions/Chip",
  component: Chip,
  tags: ["autodocs"],
  args: { children: "Chip" },
  argTypes: {
    variant: { control: "inline-radio", options: ["filled", "outlined"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
  },
};

export const Filled = {};
export const Outlined = { args: { variant: "outlined" } };
export const WithIcon = { args: { leadingIcon: "star" } };
export const Error = { args: { error: true, children: "Error" } };
export const Disabled = { args: { disabled: true } };
export const Removable = {
  render: (args) => {
    const [on, setOn] = React.useState(true);
    return on ? <Chip {...args} removable onRemove={() => setOn(false)}>Remove me</Chip> : <Button variant="secondary" onClick={() => setOn(true)}>Reset</Button>;
  },
};
export const Toggleable = {
  render: (args) => {
    const [sel, setSel] = React.useState(false);
    return <Chip {...args} selected={sel} onToggle={() => setSel((s) => !s)}>Toggle me</Chip>;
  },
};
