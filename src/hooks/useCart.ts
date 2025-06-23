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

  return {
    items,
    count,
    total,
    addToCart: add,
    removeFromCart: remove,
    decreaseQuantity: decrease,
    clearCart: clear,
  };
};
