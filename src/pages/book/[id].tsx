import { Book } from "@/types/book";

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
  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>{book.description}</p>
    </div>
  );
};

export default BookPage;
