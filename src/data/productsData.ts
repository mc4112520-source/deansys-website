import productsRaw from './products.json';
import { Product } from '../types';

export const productsData: Product[] = productsRaw as Product[];

export const getProductById = (id: string): Product | undefined => {
  return productsData.find(p => p.id === id);
};

export const getProductCategories = (): string[] => {
  const categories = Array.from(new Set(productsData.map(p => p.category)));
  return ['All Products', ...categories];
};

