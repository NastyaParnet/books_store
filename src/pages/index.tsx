import { BookList } from "@/components/BookList";
import { Book } from "@/types/book";
import { Box } from "@mui/material";
import { GetStaticProps } from "next";

interface HomePageProps {
  books: Book[];
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/mock_data/books.json`
  );
  const books: Book[] = await res.json();

  return {
    props: {
      books,
    },
  };
};

const HomePage = ({ books }: HomePageProps) => {
  return (
    <Box>
      <BookList books={books} />
    </Box>
  );
};

export default HomePage;
