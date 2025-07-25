import { BookCard } from "@/components/BookCard";
import { Book } from "@/types/book";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useCart } from "@/hooks/useCart";
import HeaderWithCart from "@/components/Header/HeaderWithCart";

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
  const { getIsInCart, addToCart, removeFromCart } = useCart();

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
    <>
      <HeaderWithCart onClickBack={handleBack} />
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
        <BookCard
          book={book}
          isInCart={isInCart}
          onClickButton={handleClickButton}
        />
      </Box>
    </>
  );
};

export default BookPage;
