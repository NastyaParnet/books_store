import { Book } from "@/types/book";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

interface BookListProps {
  books: Book[];
  getIsInCart: (bookId: Book["id"]) => boolean;
  onRedirect: (bookId: Book["id"]) => void;
  onClickButton: (bookId: Book["id"]) => void;
}

export const BookList = ({
  books,
  getIsInCart,
  onRedirect,
  onClickButton,
}: BookListProps) => {
  return (
    <Grid container spacing={2} sx={{ m: 2 }}>
      {books.map((book) => (
        <Grid key={book.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Card
            sx={{
              height: "100%",
              display: "grid",
              gridTemplateRows: "auto 1fr auto",
              border: `1px solid`,
              borderColor: "border",
              borderRadius: "8px",
            }}
          >
            <CardMedia
              height={160}
              component="img"
              alt={book.title}
              src={book.image}
              onClick={() => onRedirect(book.id)}
              sx={{
                objectFit: "contain",
                p: 2,
                cursor: "pointer",
              }}
            />
            <CardContent
              sx={{ height: "100%", backgroundColor: "background.default" }}
            >
              <Typography
                variant="h6"
                onClick={() => onRedirect(book.id)}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    color: "text.secondary",
                  },
                }}
              >
                {book.title}
              </Typography>
              <Typography variant="body2">{book.author}</Typography>
              <Typography variant="body2">${book.price}</Typography>
            </CardContent>
            <CardActions sx={{ backgroundColor: "background.default" }}>
              <Button
                fullWidth
                size="small"
                variant="outlined"
                sx={{
                  color: getIsInCart(book.id) ? "error.main" : "text.secondary",
                  borderColor: "border",
                  textTransform: "none",
                }}
                onClick={() => onClickButton(book.id)}
              >
                {getIsInCart(book.id) ? "Remove from Cart" : "Add to Cart"}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
