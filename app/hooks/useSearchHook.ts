import { IProducts } from "@app/api";
import { useEffect, useState } from "react";

const useSearch = (data: Array<IProducts>) => {
  const [query, setQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Array<IProducts>>(data);

  useEffect(() => {
    const filtered = data.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  }, [query, data]);

  return { query, setQuery, filteredData };
};

export default useSearch;
