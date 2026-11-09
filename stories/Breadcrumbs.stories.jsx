import React from "react";
import { Breadcrumbs } from "../lib/index.js";

export default {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  args: { items: [{ label: "Projects", href: "#" }, { label: "DFTS", href: "#" }, { label: "Component Kit" }] },
};

export const Default = {};
