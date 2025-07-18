import React from "react";
import { Header } from "../Header";
import { useCart } from "@/hooks/useCart";

interface HeaderWithCartProps {
  label?: string;
  onClickBack?: () => void;
}

const HeaderWithCart = ({ label, onClickBack }: HeaderWithCartProps) => {
  const {
    count: countBooksInCart,
    items: booksInCart,
    addToCart,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const handleAddQuantity = (bookId: number) => {
    const book = booksInCart.find((item) => item.id === bookId);
    if (book) {
      addToCart(book);
    }
  };

  return (
    <Header
      label={label}
      booksInCart={booksInCart}
      countBooksInCart={countBooksInCart}
      onClickBack={onClickBack}
      onAddQuantityBookInCart={handleAddQuantity}
      onDecreaseQuantityBookInCart={decreaseQuantity}
      onRemoveBookFromCart={removeFromCart}
    />
  );
};

export default HeaderWithCart;
