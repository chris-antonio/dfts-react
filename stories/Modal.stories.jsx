import React from "react";
import { Modal, Button } from "../lib/index.js";

export default {
  title: "Containers/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export const Default = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Delete project?"
          footer={<><Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button><Button variant="destructive" onClick={() => setOpen(false)}>Delete</Button></>}
        >
          This action cannot be undone. Focus is trapped; Esc or the backdrop closes it.
        </Modal>
      </>
    );
  },
};
