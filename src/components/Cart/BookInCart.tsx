import { CartItem } from "@/types/cart";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

interface BookInCartProps {
  book: CartItem;
}

export const BookInCart = ({ book }: BookInCartProps) => {
  return (
    <Card
      sx={{
        border: `1px solid`,
        borderColor: "border",
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          alt={book.title}
          src={book.image}
          sx={{
            objectFit: "contain",
            p: 2,
          }}
        />

        <CardContent sx={{ height: "100%" }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            {book.title}
          </Typography>
          <Typography variant="body1">{book.author}</Typography>
        </CardContent>
      </Box>

      <Divider />

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 1,
          gap: 3,
        }}
      >
        <IconButton color="error" onClick={() => {}}>
          <DeleteOutlineIcon />
        </IconButton>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={() => {}}>
            <RemoveIcon />
          </IconButton>
          <TextField
            type="number"
            size="small"
            value={book.quantity}
            sx={{
              "& input": {
                textAlign: "center",
              },
              "& ::-webkit-inner-spin-button": {
                "-webkit-appearance": "none",
              },
            }}
          />
          <IconButton onClick={() => {}}>
            <AddIcon />
          </IconButton>
        </Box>

        <Box sx={{ p: 1 }}>
          <Typography variant="body2" color="textSecondary">
            ${book.price.toFixed(2)}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
};
