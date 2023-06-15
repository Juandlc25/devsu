import { useEffect, useState } from "react";
import { Product } from "../interfaces/product.interface";
import database from "../api/database";

const useGetProducts = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredproducts, setFilteredProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    const productsPromise = database.get<Product[]>("/products");
    const response = (await productsPromise).data;
    setProducts(response);
    setFilteredProducts(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return {
    isLoading,
    products,
    filteredproducts,
    setFilteredProducts,
  };
};

export default useGetProducts;
