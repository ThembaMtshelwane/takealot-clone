export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  brand: string;
  category: number;
  discountPercentage: number;
  thumbnail: string;  
}

export const getProducts = async ():Promise<Product[]> => {
  const response = await fetch('https://dummyjson.com/products?skip=0&limit=100')
  const data = await response.json();
  return data.products;
};

export const getCatergories = async ():Promise<string[]> => {
  const response = await fetch('https://dummyjson.com/products/categories')
  const data = await response.json();
  return data;
};