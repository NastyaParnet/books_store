import { CartItem } from "@/types/cart";
import { Box, Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { BookInCart } from "./BookInCart";

interface CartProps {
  open: boolean;
  booksInCart: CartItem[];
  onClose: VoidFunction;
}

export const Cart = ({ open, booksInCart, onClose }: CartProps) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ p: 1, display: "flex", justifyContent: "end" }}>
        <IconButton color="primary" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
          px: 1,
          gap: 1,
        }}
      >
        {booksInCart.map((book) => (
          <BookInCart key={book.id} book={book} />
        ))}
      </Box>
    </Drawer>
  );
};
