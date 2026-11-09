import React from "react";
import { PhoneField } from "../lib/index.js";

export default {
  title: "Forms/PhoneField",
  component: PhoneField,
  tags: ["autodocs"],
  args: { id: "ph" },
  argTypes: { size: { control: "inline-radio", options: ["sm", "md", "lg"] } },
};

const Controlled = (args) => {
  const [v, setV] = React.useState({ code: "+33", number: "" });
  return <PhoneField {...args} value={v} onChange={setV} />;
};
export const Default = { render: Controlled };
export const HelperText = { render: Controlled, args: { helperText: "Used for sign-in codes" } };
export const Error = { render: Controlled, args: { error: "Enter a valid number" } };
export const Disabled = { render: Controlled, args: { disabled: true } };
