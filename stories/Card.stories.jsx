import React from "react";
import { Card, ProgressLine } from "../lib/index.js";

export default {
  title: "Containers/Card",
  component: Card,
  tags: ["autodocs"],
  args: { title: "Website redesign", description: "New marketing site on the DFTS kit." },
  decorators: [(Story) => <div style={{ maxWidth: 320 }}><Story /></div>],
};

export const Default = {};
export const Interactive = { args: { interactive: true, onClick: () => {} } };
export const WithFooter = {
  args: { footer: <ProgressLine value={72} showLabel label="Progress" /> },
};
