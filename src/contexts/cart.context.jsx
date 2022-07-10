import {
  createContext,
  useState
} from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  toggleCartDropdown: () => null
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, toggleCartDropdown] = useState(false);
  const value = { isCartOpen, toggleCartDropdown };
 
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}