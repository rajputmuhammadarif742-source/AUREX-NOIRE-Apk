
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'w1',
    name: 'Aurex Chronograph V1',
    price: 1200,
    oldPrice: 1500,
    category: 'WATCHES',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop',
    description: 'Precision engineered luxury timepiece with sapphire glass and genuine leather strap.',
    rating: 4.8,
    reviews: 124,
    colors: ['#000000', '#C0C0C0', '#B87333']
  },
  {
    id: 'w2',
    name: 'Midnight Onyx Elite',
    price: 850,
    category: 'WATCHES',
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1000&auto=format&fit=crop',
    description: 'Deep black matte finish with surgical grade stainless steel.',
    rating: 4.5,
    reviews: 89,
    colors: ['#000000', '#1a1a1a']
  },
  {
    id: 'h1',
    name: 'Noire Sonic Pro',
    price: 350,
    oldPrice: 450,
    category: 'HEADPHONES',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
    description: 'Noise canceling high-fidelity headphones with 40-hour battery life.',
    rating: 4.9,
    reviews: 210,
    colors: ['#000000', '#FFFFFF', '#3b82f6']
  },
  {
    id: 'h2',
    name: 'Blue Azure Wireless',
    price: 280,
    category: 'HEADPHONES',
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1000&auto=format&fit=crop',
    description: 'Sleek, lightweight wireless audio with deep bass profiles.',
    rating: 4.4,
    reviews: 45,
    colors: ['#3b82f6', '#1e40af']
  },
  {
    id: 'a1',
    name: 'Titanium Wallet S',
    price: 120,
    category: 'ACCESSORIES',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000&auto=format&fit=crop',
    description: 'RFID blocking slim titanium wallet for the modern minimalist.',
    rating: 4.7,
    reviews: 67,
    colors: ['#4b5563', '#1f2937']
  },
  {
    id: 'a2',
    name: 'Aurex Leather Belt',
    price: 95,
    category: 'ACCESSORIES',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop',
    description: 'Full-grain Italian leather belt with custom alloy buckle.',
    rating: 4.6,
    reviews: 32,
    colors: ['#000000', '#451a03']
  }
];

export const CATEGORIES = [
  { id: 'WATCHES', label: 'Watches', icon: 'fa-stopwatch' },
  { id: 'HEADPHONES', label: 'Headphones', icon: 'fa-headphones' },
  { id: 'ACCESSORIES', label: 'Accessories', icon: 'fa-gem' }
];
