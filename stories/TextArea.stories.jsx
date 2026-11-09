import React from "react";
import { TextArea } from "../lib/index.js";

export default {
  title: "Forms/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  args: { id: "ta", label: "Message", placeholder: "Write something…" },
  argTypes: { size: { control: "inline-radio", options: ["sm", "md", "lg"] } },
};

const Controlled = (args) => {
  const [v, setV] = React.useState("");
  return <TextArea {...args} value={v} onChange={(e) => setV(e.target.value)} />;
};
export const Default = { render: Controlled };
export const MultipleRows = { render: Controlled, args: { rows: 4 } };
export const HelperText = { render: Controlled, args: { helperText: "Max 280 characters" } };
export const Error = { render: Controlled, args: { error: "Message is too short" } };
export const Disabled = { render: Controlled, args: { disabled: true } };
