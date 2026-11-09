import React from "react";
import { Select } from "../lib/index.js";

export default {
  title: "Data entry/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    id: "sel",
    label: "Role",
    options: [
      { value: "designer", label: "Designer" },
      { value: "engineer", label: "Engineer" },
      { value: "writer", label: "Content writer" },
    ],
  },
  argTypes: { size: { control: "inline-radio", options: ["sm", "md", "lg"] } },
};

const Single = (args) => {
  const [v, setV] = React.useState("");
  return <Select {...args} value={v} onChange={setV} />;
};
const Multi = (args) => {
  const [v, setV] = React.useState([]);
  return <Select {...args} multiple value={v} onChange={setV} />;
};
export const Default = { render: Single };
export const Multiple = { render: Multi, args: { id: "sel-m", label: "Roles" } };
export const HelperText = { render: Single, args: { helperText: "Pick the closest match" } };
export const Error = { render: Single, args: { error: "Select a role" } };
export const Disabled = { render: Single, args: { disabled: true } };
