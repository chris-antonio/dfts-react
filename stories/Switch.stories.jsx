import React from "react";
import { Switch } from "../lib/index.js";

export default {
  title: "Forms/Switch",
  component: Switch,
  tags: ["autodocs"],
  args: { id: "sw", label: "Notifications" },
  argTypes: { size: { control: "inline-radio", options: ["sm", "md", "lg"] } },
};

const Controlled = (args) => {
  const [c, setC] = React.useState(!!args.checked);
  return <Switch {...args} checked={c} onChange={(e) => setC(e.target.checked)} />;
};
export const Default = { render: Controlled };
export const On = { render: Controlled, args: { checked: true } };
export const Disabled = { render: Controlled, args: { disabled: true } };
