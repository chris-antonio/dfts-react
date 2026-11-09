import React from "react";
import { Table } from "../lib/index.js";

export default {
  title: "Containers/Table",
  component: Table,
  tags: ["autodocs"],
  args: {
    columns: [
      { key: "name", label: "Name", sortable: true },
      { key: "role", label: "Role", sortable: true },
      { key: "status", label: "Status", sortable: false },
    ],
    rows: [
      { id: 1, name: "Amara Chen", role: "Product Designer", status: "Active" },
      { id: 2, name: "Diego Fischer", role: "Frontend Engineer", status: "Active" },
      { id: 3, name: "Priya Nandan", role: "Design Lead", status: "Away" },
      { id: 4, name: "Sam O'Malley", role: "Content Strategist", status: "Active" },
    ],
  },
};

export const Default = {};
export const Selectable = { args: { selectable: true } };
