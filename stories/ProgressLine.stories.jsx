import React from "react";
import { ProgressLine } from "../lib/index.js";

export default {
  title: "Feedback/ProgressLine",
  component: ProgressLine,
  tags: ["autodocs"],
  args: { value: 60, label: "Upload", showLabel: true },
  argTypes: { value: { control: { type: "range", min: 0, max: 100, step: 1 } } },
};

export const Default = {};
export const Empty = { args: { value: 0 } };
export const Complete = { args: { value: 100 } };
export const NoLabel = { args: { showLabel: false } };
