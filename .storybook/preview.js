import React from "react";
import "../lib/styles.css";

// Light / dark toggle in the toolbar. DFTS themes via data-theme on <html>.
export const globalTypes = {
  theme: {
    description: "DFTS theme",
    defaultValue: "light",
    toolbar: {
      title: "Theme",
      icon: "circlehollow",
      items: [
        { value: "light", title: "Light", icon: "sun" },
        { value: "dark", title: "Dark", icon: "moon" },
      ],
      dynamicTitle: true,
    },
  },
};

export const decorators = [
  (Story, context) => {
    document.documentElement.setAttribute("data-theme", context.globals.theme);
    return React.createElement("div", { style: { padding: "var(--spacing-md)" } }, React.createElement(Story));
  },
];

export const parameters = {
  layout: "fullscreen",
  controls: { expanded: true },
  options: { storySort: { order: ["Actions", "Forms", "Feedback", "Data display", "Navigation"] } },
};
