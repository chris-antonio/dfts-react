import React from "react";
import { Tabs } from "../lib/index.js";

export default {
  title: "Navigation/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  args: {
    items: [
      { id: "team", label: "Team", content: "Team members and roles." },
      { id: "projects", label: "Projects", content: "Active projects." },
      { id: "archive", label: "Archive", content: "Not available yet.", disabled: true },
    ],
    defaultActiveId: "team",
  },
};

export const Default = {};
