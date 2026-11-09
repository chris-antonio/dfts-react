import React from "react";
import { Loader } from "../lib/index.js";

export default {
  title: "Feedback/Loader",
  component: Loader,
  tags: ["autodocs"],
  argTypes: { size: { control: "inline-radio", options: ["sm", "md", "lg"] } },
};

export const Default = {};
export const Sizes = {
  render: () => <div style={{ display: "flex", gap: 16, alignItems: "center" }}>{["sm", "md", "lg"].map((s) => <Loader key={s} size={s} />)}</div>,
};
