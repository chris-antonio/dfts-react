import React from "react";
import { Link } from "../lib/index.js";

export default {
  title: "Actions/Link",
  component: Link,
  tags: ["autodocs"],
  args: { children: "Read the docs", href: "#" },
  argTypes: { size: { control: "inline-radio", options: ["sm", "md", "lg"] } },
};

export const Default = {};
export const WithIcons = { args: { leadingIcon: "open_in_new", trailingIcon: "arrow_forward" } };
export const Error = { args: { error: true } };
export const Disabled = { args: { disabled: true } };
