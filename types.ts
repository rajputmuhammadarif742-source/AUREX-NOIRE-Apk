
export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  category: 'WATCHES' | 'HEADPHONES' | 'ACCESSORIES';
  image: string;
  description: string;
  rating: number;
  reviews: number;
  colors: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: 'Delivered' | 'Processing' | 'Shipped';
}

export interface User {
  id: string;
  name: string;
  email: string;
  orders: Order[];
}

export type View = 'HOME' | 'PRODUCTS' | 'PRODUCT_DETAIL' | 'CART' | 'CHECKOUT' | 'ORDERS' | 'AUTH' | 'AI_ASSISTANT';
