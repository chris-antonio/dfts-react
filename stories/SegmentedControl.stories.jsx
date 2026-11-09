import React from "react";
import { SegmentedControl } from "../lib/index.js";

export default {
  title: "Actions/SegmentedControl",
  component: SegmentedControl,
  tags: ["autodocs"],
  args: { segments: [{ value: "day", label: "Day" }, { value: "week", label: "Week" }, { value: "month", label: "Month" }] },
};

export const Default = {
  render: (args) => {
    const [v, setV] = React.useState("week");
    return <SegmentedControl {...args} value={v} onChange={setV} />;
  },
};
