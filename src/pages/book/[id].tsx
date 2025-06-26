import { BookCard } from "@/components/BookCard";
import { Book } from "@/types/book";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useCart } from "@/hooks/useCart";

interface BookPageProps {
  book: Book;
}

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/mock_data/books.json`
  );
  const books: Book[] = await res.json();

  const paths = books.map((book) => ({
    params: { id: book.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/mock_data/books.json`
  );
  const books: Book[] = await res.json();

  const book = books.find((book) => book.id.toString() === params.id);

  if (!book) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      book,
    },
  };
}

const BookPage = ({ book }: BookPageProps) => {
  const router = useRouter();
  const { addToCart, getIsInCart, removeFromCart } = useCart();

  const isInCart = getIsInCart(book.id);

  const handleClickButton = () => {
    if (getIsInCart(book.id)) {
      removeFromCart(book.id);
    } else {
      addToCart(book);
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <Box
      sx={{
        m: {
          xs: "16px 8px",
          sm: "16px 16px",
          md: "16px 32px",
        },
        display: "flex",
        gap: 1,
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "start" }}>
        <Button onClick={handleBack}>
          <ArrowBackIcon sx={{ color: "text.secondary" }} />
        </Button>
      </Box>
      <BookCard
        book={book}
        isInCart={isInCart}
        onClickButton={handleClickButton}
      />
    </Box>
  );
};

export default BookPage;
