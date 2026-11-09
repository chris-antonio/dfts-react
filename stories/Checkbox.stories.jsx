import React from "react";
import { Checkbox } from "../lib/index.js";

export default {
  title: "Data entry/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: { id: "cb", label: "Accept terms" },
  argTypes: { size: { control: "inline-radio", options: ["sm", "md", "lg"] } },
};

const Controlled = (args) => {
  const [c, setC] = React.useState(!!args.checked);
  return <Checkbox {...args} checked={c} onChange={(e) => setC(e.target.checked)} />;
};
export const Default = { render: Controlled };
export const Checked = { render: Controlled, args: { checked: true } };
export const Error = { render: Controlled, args: { error: true, errorMessage: "You must accept to continue" } };
export const Disabled = { render: Controlled, args: { disabled: true } };
