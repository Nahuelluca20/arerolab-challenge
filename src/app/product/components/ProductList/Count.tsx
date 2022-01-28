import React from "react";
import {Text} from "@chakra-ui/react";

import {Product} from "../product/types";

interface Props {
  total: number;
  products: Product[];
  currentPage: number;
  itemLimit: number;
}

const Count: React.FC<Props> = ({total, products, itemLimit}) => {
  return (
    <Text color="gray.500" fontWeight="bold">
      {itemLimit} of total {total}
    </Text>
  );
};

export default Count;
