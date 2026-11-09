import React from "react";
import { Accordion } from "../lib/index.js";

export default {
  title: "Data display/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: {
    items: [
      { id: "a1", title: "What is DFTS?", content: "A token-driven design system." },
      { id: "a2", title: "How do I use the tokens?", content: "Reference DFTS-tokens.md." },
      { id: "a3", title: "Is dark mode supported?", content: "Yes, via the data-theme attribute." },
    ],
  },
};

export const Default = { args: { defaultOpenId: "a1" } };
export const AllowMultiple = { args: { allowMultiple: true, defaultOpenId: "a1" } };
