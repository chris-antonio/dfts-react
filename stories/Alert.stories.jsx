import React from "react";
import { Alert } from "../lib/index.js";

export default {
  title: "Indicators/Alert",
  component: Alert,
  tags: ["autodocs"],
  args: { title: "Heads up", children: "Something you should know about." },
  argTypes: { variant: { control: "inline-radio", options: ["info", "success", "warning", "error"] } },
};

export const Info = {};
export const Success = { args: { variant: "success", title: "Saved" } };
export const Warning = { args: { variant: "warning", title: "Storage almost full" } };
export const Error = { args: { variant: "error", title: "Upload failed" } };
export const Dismissible = { args: { dismissible: true } };
