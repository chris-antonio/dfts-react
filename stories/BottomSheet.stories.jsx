import React from "react";
import { BottomSheet, Button } from "../lib/index.js";

export default {
  title: "Containers/BottomSheet",
  component: BottomSheet,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export const Default = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open bottom sheet</Button>
        <BottomSheet open={open} onClose={() => setOpen(false)} title="Share this file">
          <div style={{ display: "grid", gap: 8 }}>
            <Button variant="secondary" leadingIcon="link">Copy link</Button>
            <Button variant="secondary" leadingIcon="mail">Email</Button>
          </div>
        </BottomSheet>
      </>
    );
  },
};
