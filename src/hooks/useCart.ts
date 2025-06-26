import {
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from "@/store/selectors/cartSelector";
import {
  addToCart,
  clearCart,
  decreaseQuantity,
  removeFromCart,
} from "@/store/slices/cartSlice";
import { Book } from "@/types/book";
import { useDispatch, useSelector } from "react-redux";

export const useCart = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectCartItems);
  const count = useSelector(selectCartCount);
  const total = useSelector(selectCartTotal);

  const add = (item: Book) => {
    dispatch(addToCart(item));
  };

  const remove = (itemId: number) => {
    dispatch(removeFromCart(itemId));
  };

  const decrease = (itemId: number) => {
    dispatch(decreaseQuantity(itemId));
  };

  const clear = () => {
    dispatch(clearCart());
  };

  const getIsInCart = (bookId: Book["id"]) => {
    return items.some((item) => item.id === bookId);
  };

  return {
    items,
    count,
    total,
    addToCart: add,
    removeFromCart: remove,
    decreaseQuantity: decrease,
    clearCart: clear,
    getIsInCart,
  };
};
