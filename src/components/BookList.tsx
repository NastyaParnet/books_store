import { Book } from "@/types/book";
import { Box } from "@mui/material";
import React from "react";

interface BookListProps {
  books: Book[];
}

export const BookList = ({ books }: BookListProps) => {
  return <Box>BookList: {JSON.stringify(books)}</Box>;
};
