"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import type { ShopifyCart } from "@/lib/shopify/types";

type CartContextType = {
  cart: ShopifyCart | null;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  cartId: string | null;
  totalQuantity: number;
  loading: boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

function getCartIdFromCookie(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|;\s*)cartId=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : null;
}

function setCartIdCookie(cartId: string) {
  if (typeof document === "undefined") return;
  const maxAge = 60 * 60 * 24 * 30; // 30 days
  document.cookie = `cartId=${encodeURIComponent(cartId)};path=/;max-age=${maxAge};SameSite=Lax`;
}

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<ShopifyCart | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartId, setCartId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const existingCartId = getCartIdFromCookie();
    if (existingCartId) {
      setCartId(existingCartId);
    }
  }, []);

  const totalQuantity = cart?.totalQuantity ?? 0;

  const value: CartContextType = {
    cart,
    cartOpen,
    setCartOpen: useCallback((open: boolean) => setCartOpen(open), []),
    cartId,
    totalQuantity,
    loading,
  };

  return <CartContext value={value}>{children}</CartContext>;
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
