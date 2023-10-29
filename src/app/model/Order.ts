import { Product } from './Product';

export interface Order {
  id?: number;
  userId?: string;
  date?: string;
  products?: Array<{ productId: number; quantity: number; product?: Product }>;
  __v?: number;
}
