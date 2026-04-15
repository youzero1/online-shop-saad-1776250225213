export interface Product {
  id: number;
  name: string;
  price: number;
  original_price?: number;
  originalPrice?: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
