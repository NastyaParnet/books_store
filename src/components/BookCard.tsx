import { Book } from "@/types/book";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

interface BookCardProps {
  book: Book;
  isInCart: boolean;
  onClickButton: () => void;
}

export const BookCard = ({ book, isInCart, onClickButton }: BookCardProps) => {
  return (
    <Card
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 1fr",
        },
        border: `1px solid`,
        borderColor: "border",
        borderRadius: "8px",
      }}
    >
      <CardMedia
        height={300}
        component="img"
        alt={book.title}
        src={book.image}
        sx={{
          objectFit: "contain",
          p: 2,
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent
          sx={{ height: "100%", backgroundColor: "background.default" }}
        >
          <Typography variant="h6" sx={{ mb: 1 }}>
            {book.title}
          </Typography>
          <Typography variant="body1">{book.author}</Typography>
          <Typography variant="body1">${book.price}</Typography>
          <Typography variant="body2" sx={{ mt: 1.5 }}>
            {book.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            backgroundColor: "background.default",
          }}
        >
          <Button
            size="small"
            variant="outlined"
            sx={{
              color: isInCart ? "error.main" : "text.secondary",
              borderColor: "border",
              textTransform: "none",
            }}
            onClick={onClickButton}
          >
            {isInCart ? "Remove from Cart" : "Add to Cart"}
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};
