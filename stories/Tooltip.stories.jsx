import React from "react";
import { Tooltip, Button } from "../lib/index.js";

export default {
  title: "Indicators/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: { label: "Duplicate this file" },
  argTypes: { placement: { control: "inline-radio", options: ["top", "bottom"] } },
  parameters: { layout: "centered" },
};

export const Top = { render: (args) => <Tooltip {...args}><Button variant="secondary" leadingIcon="content_copy">Duplicate</Button></Tooltip> };
export const Bottom = { args: { placement: "bottom" }, render: Top.render };
