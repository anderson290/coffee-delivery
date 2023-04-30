import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface CartContextData {
  cart: any[];
  addToCart: (coffee: any, coffeeAmount: number) => void;
}

export const CartContext = createContext({} as CartContextData);

interface CartContextProviderProps {
  children: ReactNode;
}

const CartProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = useState<any>([]);

  function addToCart(coffee: any, coffeeAmount: number) {
    coffee.amount = coffee.amount + coffeeAmount;
    if (coffee.amount > 0) {
      setCart([...cart, coffee]);
    }
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

function useCart(): CartContextData {
  return useContext(CartContext);
}

export { CartProvider, useCart };
