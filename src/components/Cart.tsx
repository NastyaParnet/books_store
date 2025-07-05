import { Button, Drawer } from "@mui/material";
import React from "react";

interface CartProps {
  open: boolean;
  onClose: VoidFunction;
}

export const Cart = ({ open, onClose }: CartProps) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Button onClick={onClose}>Close</Button>
    </Drawer>
  );
};
