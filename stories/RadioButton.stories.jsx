import React from "react";
import { RadioButton } from "../lib/index.js";

export default {
  title: "Data entry/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  args: { id: "rb", name: "plan", label: "Option" },
  argTypes: { size: { control: "inline-radio", options: ["sm", "md", "lg"] } },
};

export const Default = {};
export const Group = {
  render: () => {
    const [v, setV] = React.useState("monthly");
    return (
      <div style={{ display: "grid", gap: 8 }}>
        {["monthly", "yearly", "lifetime"].map((p) => (
          <RadioButton key={p} id={`plan-${p}`} name="plan" label={p[0].toUpperCase() + p.slice(1)} checked={v === p} onChange={() => setV(p)} />
        ))}
      </div>
    );
  },
};
export const Disabled = { args: { disabled: true } };
