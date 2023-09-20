import { useState, useEffect } from "react";
import axios from "axios";
import { IProducts } from "../schemas/products";
import { BASE_URL } from "@env";

const useGetProducts = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [products, setProducts] = useState<Array<IProducts>>([]);

  const fetchProducts = async () => {
    await axios
      .get(BASE_URL)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products =>", error);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const refetch = () => {
    setRefreshing(true);
    fetchProducts();
    setRefreshing(false);
  };

  return { refetch, products, isLoading, refreshing };
};

export default useGetProducts;
