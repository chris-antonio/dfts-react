import React from "react";
import { TextField } from "../lib/index.js";

export default {
  title: "Data entry/TextField",
  component: TextField,
  tags: ["autodocs"],
  args: { id: "tf", label: "Full name", placeholder: "Ada Lovelace" },
  argTypes: { size: { control: "inline-radio", options: ["sm", "md", "lg"] } },
};

const Controlled = (args) => {
  const [v, setV] = React.useState("");
  return <TextField {...args} value={v} onChange={(e) => setV(e.target.value)} />;
};
export const Default = { render: Controlled };
export const WithIcon = { render: Controlled, args: { leadingIcon: "person" } };
export const HelperText = { render: Controlled, args: { helperText: "As it appears on your ID" } };
export const Error = { render: Controlled, args: { error: "This field is required" } };
export const Disabled = { render: Controlled, args: { disabled: true } };
export const Password = { render: Controlled, args: { id: "pw", label: "Password", type: "password", placeholder: "" } };
