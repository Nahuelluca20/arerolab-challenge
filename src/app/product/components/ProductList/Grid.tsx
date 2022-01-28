import React from "react";
import {Grid as ChakraGrid} from "@chakra-ui/react";

import {Product} from "../product/types";
import ProductCard from "../ProductCard";

interface Props {
  products: Product[];
  currentPage: number;
  itemLimit: number;
}

const Grid: React.FC<Props> = ({products, currentPage, itemLimit}) => {
  const [selected, setSelected] = React.useState<Product["_id"] | null>(null);
  const [curItems, setCurItems] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const offset = currentPage * itemLimit;
    const getList = (currentPage: number, itemLimit: number) => {
      setCurItems(products.slice(offset, offset + itemLimit));
    };

    getList(currentPage, itemLimit);
  }, [currentPage, itemLimit, products]);

  return (
    <ChakraGrid gap={6} templateColumns="repeat(auto-fill, minmax(256px, 1fr))" width="100%">
      {curItems.map((items) => (
        <ProductCard
          key={items._id}
          isSelected={selected === items._id}
          product={items}
          onClick={() => setSelected(items._id)}
        />
      ))}
    </ChakraGrid>
  );
};

export default Grid;
