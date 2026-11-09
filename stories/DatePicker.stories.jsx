import React from "react";
import { DatePicker } from "../lib/index.js";

export default {
  title: "Data entry/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
};

export const Default = {
  render: () => {
    const [d, setD] = React.useState(null);
    return (
      <div style={{ display: "grid", gap: 8 }}>
        <DatePicker value={d} onChange={setD} />
        {d && <span className="dfts-text-caption-md">Selected: {d.toDateString()}</span>}
      </div>
    );
  },
};
