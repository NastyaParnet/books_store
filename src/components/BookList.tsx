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
import { useRouter } from "next/router";
import React from "react";

interface BookListProps {
  books: Book[];
}

export const BookList = ({ books }: BookListProps) => {
  const router = useRouter();

  const handleRedirect = (id: number) => {
    router.push(`/book/${id}`);
  };

  return (
    <Grid container spacing={2} sx={{ m: 2 }}>
      {books.map((book) => (
        <Grid key={book.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
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
              onClick={() => handleRedirect(book.id)}
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
                onClick={() => handleRedirect(book.id)}
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
                  color: "text.secondary",
                  borderColor: "border",
                  textTransform: "none",
                }}
              >
                Add to Card
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
