import React from "react";
import { Carousel } from "../lib/index.js";

export default {
  title: "Data display/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  args: {
    label: "Feature highlights",
    slides: [
      { id: "s1", content: "Slide 1 — onboarding" },
      { id: "s2", content: "Slide 2 — feature highlight" },
      { id: "s3", content: "Slide 3 — call to action" },
    ],
  },
};

export const Default = {};
