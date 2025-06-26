import { BookList } from "@/components/BookList";
import { useCart } from "@/hooks/useCart";
import { Book } from "@/types/book";
import { Pagination } from "@mui/material";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

const PAGINATION_LIMIT = 12;

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
  const router = useRouter();
  const [page, setPage] = useState(1);

  const { addToCart, getIsInCart, removeFromCart } = useCart();

  const countPages = Math.ceil(books.length / PAGINATION_LIMIT);
  const paginatedBooks = books.slice(
    (page - 1) * PAGINATION_LIMIT,
    page * PAGINATION_LIMIT
  );

  const onChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRedirect = (id: number) => {
    router.push(`/book/${id}`);
  };

  const handleClickButton = (bookId: Book["id"]) => {
    if (getIsInCart(bookId)) {
      removeFromCart(bookId);
    } else {
      const book = books.find((b) => b.id === bookId);
      if (book) {
        addToCart(book);
      }
    }
  };

  return (
    <>
      <BookList
        books={paginatedBooks}
        getIsInCart={getIsInCart}
        onRedirect={handleRedirect}
        onClickButton={handleClickButton}
      />
      <Pagination
        count={countPages}
        page={page}
        onChange={onChangePage}
        sx={{ my: 2, display: "flex", justifyContent: "center" }}
      />
    </>
  );
};

export default HomePage;
