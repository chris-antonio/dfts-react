import React from "react";
import { Toast, ToastStack, Button } from "../lib/index.js";

export default {
  title: "Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
  args: { children: "Export complete" },
  argTypes: { variant: { control: "select", options: ["default", "info", "success", "warning", "error"] } },
};

export const Default = {};
export const Info = { args: { variant: "info" } };
export const Success = { args: { variant: "success" } };
export const Warning = { args: { variant: "warning" } };
export const Error = { args: { variant: "error", children: "Failed to save" } };
export const Stack = {
  render: () => {
    const [toasts, setToasts] = React.useState([]);
    const push = (variant, message) => {
      const id = Date.now() + Math.random();
      setToasts((t) => [...t, { id, variant, message }]);
      setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4000);
    };
    return (
      <>
        <ToastStack toasts={toasts} onDismiss={(id) => setToasts((t) => t.filter((x) => x.id !== id))} />
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Button variant="secondary" onClick={() => push("default", "Default notification")}>Default</Button>
          <Button variant="secondary" onClick={() => push("success", "Export complete")}>Success</Button>
          <Button variant="secondary" onClick={() => push("error", "Failed to save")}>Error</Button>
        </div>
      </>
    );
  },
};
